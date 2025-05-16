using System.Data.Entity.ModelConfiguration;
using Iftekhari.Entities;

namespace Iftekhari.Data.Configurations
{
    public class EntityBaseConfiguration<T> : EntityTypeConfiguration<T> where T : class, IEntityBase
    {
        public EntityBaseConfiguration()
        {
            HasKey(e => e.ID);
        }
    }
}
