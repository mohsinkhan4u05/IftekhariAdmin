using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Iftekhari.Entities
{
     [Table("Error", Schema = "Iftekhari")]
    public class Error : IEntityBase
    {
        public int ID { get; set; }
        public string Message { get; set; }
        public string StackTrace { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
