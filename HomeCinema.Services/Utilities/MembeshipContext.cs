﻿using System.Security.Principal;
using Iftekhari.Entities;

namespace Iftekhari.Services.Utilities
{
    public class MembershipContext
    {
        public IPrincipal Principal { get; set; }
        public User User { get; set; }
        public bool IsValid()
        {
            return Principal != null;
        }
    }
}
