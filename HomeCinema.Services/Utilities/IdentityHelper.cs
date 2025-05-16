using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Iftekhari.Services.Utilities
{
    public static class IdentityHelper
    {
        public static string LoggedOperatorId(this IIdentity identity)
        {
            var claimIdent = identity as ClaimsIdentity;
            return claimIdent != null
                && claimIdent.HasClaim(c => c.Type == "OperatorId")
                ? claimIdent.FindFirst("OperatorId").Value
                : string.Empty;
        }
    }
}
