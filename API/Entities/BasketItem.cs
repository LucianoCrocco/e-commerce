using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
   [Table("BasketItems")]
   public class BasketItem
   {
      //* Automaticamente generado
      public int Id { get; set; }
      //* Hay que especificarlo
      public int Quantity { get; set; }
      //* Propiedades de navegacion
      public int ProductId { get; set; }
      public Product Product { get; set; } //? En la base no va a existir pero sirve para carga diferida 
      public int BasketId { get; set; }
      public Basket Basket { get; set; }
   }
}