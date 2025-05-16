using Iftekhari.Entities;

namespace Iftekhari.Data.Configurations
{
    public class BookConfiguration : EntityBaseConfiguration<Book>
    {
        public BookConfiguration()
        {
            Property(ur => ur.Name).IsRequired().HasMaxLength(50);
        }
    }
}
