using Iftekhari.Entities;

namespace Iftekhari.Data.Configurations
{
    public class TagsConfiguration : EntityBaseConfiguration<Tags>
    {
        public TagsConfiguration()
        {
            Property(ur => ur.Name).IsRequired().HasMaxLength(20);
        }
    }
}
