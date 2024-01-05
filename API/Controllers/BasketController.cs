using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _context;

        public BasketController(StoreContext context)
        {
            this._context = context;
        }

        #region Methods
        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            var basket = new Basket { BuyerId = buyerId };
            _context.Baskets.Add(basket);
            return basket;
        }

        private async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
                        .Include(i => i.Items)
                        .ThenInclude(p => p.Product)
                        .FirstOrDefaultAsync(p => p.BuyerId == Request.Cookies["buyerId"]);
        }


        #endregion

        [HttpGet]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();

            //* Mapeo las propiedades
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                    Quantity = item.Quantity

                }).ToList()

            };
        }


        [HttpPost] //* api/basket?productId=X&quantity=Y
        //* .NET Core es lo suficientemente inteligente como para inferir los query params
        //* Estos query params van a ir como argumentos en el metodfo
        public async Task<ActionResult> AddItemToBasket(int productId, int quantity)
        {
            //* Get basket
            var basket = await RetrieveBasket();
            //*? Create basket
            if (basket == null) basket = CreateBasket();
            //* Get Product
            var product = await _context.Products.FindAsync(productId);
            if (product == null) return NotFound();
            //* Add item to product
            basket.AddItem(product, quantity);
            //* Save changes
            var result = await _context.SaveChangesAsync() > 0; //casteo
            if (result) return StatusCode(201);

            return BadRequest(new ProblemDetails { Title = "Problem saving item to basket" });
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveItemToBasket(int productId, int quantity)
        {
            //* Get basket
            var basket = await RetrieveBasket();
            if (basket == null) basket = CreateBasket();

            //* Delete item or reduce qty
            basket.RemoveItem(productId, quantity);

            //* Save changes
            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok();
            return BadRequest(new ProblemDetails { Title = "Problem removing item from the basket" });
        }
    }
}