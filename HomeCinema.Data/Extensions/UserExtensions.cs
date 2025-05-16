using System.Linq;
using Iftekhari.Data.Repositories;
using Iftekhari.Entities;

namespace Iftekhari.Data.Extensions
{
    public static class UserExtensions
    {
        public static User GetSingleByUsername(this IEntityBaseRepository<User> userRepository, string username)
        {
            return userRepository.GetAll().FirstOrDefault(x => x.Username == username);
        }
    }
}
