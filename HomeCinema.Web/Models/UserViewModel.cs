using System;
using System.Collections.Generic;
using Iftekhari.Entities;

namespace Iftekhari.Web.Models
{
    public class UserViewModel 
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }
        public string HashedPassword { get; set; }
        public string Salt { get; set; }
        public bool IsLocked { get; set; }
        public DateTime DateCreated { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}