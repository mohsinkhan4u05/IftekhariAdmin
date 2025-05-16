using System.ComponentModel.DataAnnotations.Schema;

namespace Iftekhari.Entities
{
     [Table("Tags", Schema = "Iftekhari")]
    public class Tags : IEntityBase
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
