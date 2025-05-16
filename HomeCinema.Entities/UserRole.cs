using System.ComponentModel.DataAnnotations.Schema;

namespace Iftekhari.Entities
{
    [Table("UserRole", Schema = "Iftekhari")]
    public class UserRole : IEntityBase
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }
        public virtual Role Role { get; set; }
    }
}
