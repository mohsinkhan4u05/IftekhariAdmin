using System;

namespace Iftekhari.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        IftekhariContext Init();
    }
}
