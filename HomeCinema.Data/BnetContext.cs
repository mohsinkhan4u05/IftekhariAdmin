using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Iftekhari.Data.Configurations;
using Iftekhari.Entities;

namespace Iftekhari.Data
{
    public class IftekhariContext : DbContext
    {
        public IftekhariContext()
            : base("IftekhariConnection")
        {
            Database.SetInitializer<IftekhariContext>(null);
        }

        #region Entity Sets
        public IDbSet<User> UserSet { get; set; }
        public IDbSet<Role> RoleSet { get; set; }
        public IDbSet<UserRole> UserRoleSet { get; set; }
        public IDbSet<Error> ErrorSet { get; set; }

        public IDbSet<Book> BookSet { get; set; }


        #endregion

        public virtual void Commit()
        {
            base.SaveChanges();
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Configurations.Add(new UserConfiguration());
            modelBuilder.Configurations.Add(new UserRoleConfiguration());
            modelBuilder.Configurations.Add(new RoleConfiguration());
            modelBuilder.Configurations.Add(new BookConfiguration());
            modelBuilder.Configurations.Add(new CategoryConfiguration());
            modelBuilder.Configurations.Add(new TagsConfiguration());
        }
    }
}
