namespace API.Entities
{
   public class Basket
   {
      public int Id { get; set; }
      public string BuyerId { get; set; }
      public List<BasketItem> Items { get; set; } = []; //* Inicializo el array vacio asi prevengo null|Undefined

      public void AddItem(Product product, int qty)
      {
         if (Items.All(item => item.ProductId != product.Id))
         {
            Items.Add(new BasketItem { Product = product, Quantity = qty });

         }
         var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
         if (existingItem != null)
         {
            existingItem.Quantity += qty;
         }
         //* Falta implementar los cambios en la db, esto solo es en memoria
      }

      public void RemoveItem(Product product, int qty)
      {
         var item = Items.FirstOrDefault(item => item.ProductId == product.Id);
         if (item == null) return;
         item.Quantity -= qty;
         if (item.Quantity <= 0)
         {
            Items.Remove(item);
         }
         //* Falta implementar los cambios en la db, esto solo es en memoria
      }
   }
}