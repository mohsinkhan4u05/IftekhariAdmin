using System.ComponentModel.DataAnnotations.Schema;

namespace Iftekhari.Entities
{
     [Table("Role", Schema = "Iftekhari")]
    public class Role : IEntityBase
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
