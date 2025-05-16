using System.ComponentModel.DataAnnotations.Schema;

namespace Iftekhari.Entities
{
     [Table("Category", Schema = "Iftekhari")]
    public class Category : IEntityBase
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
