namespace Iftekhari.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        IftekhariContext dbContext;

        public IftekhariContext Init()
        {
            return dbContext ?? (dbContext = new IftekhariContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
