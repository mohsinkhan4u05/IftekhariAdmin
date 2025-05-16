using System.Collections.Generic;
using Iftekhari.Entities;
using Iftekhari.Services.Utilities;

namespace Iftekhari.Services.Abstract
{
    public interface IMembershipService
    {
        MembershipContext ValidateUser(string username, string password);
        User CreateUser(string username, string email, string password, int[] roles);
        User GetUser(int userId);
        List<Role> GetUserRoles(string username);

        bool UpdatePassword(string username, string passwod);
    }
}
