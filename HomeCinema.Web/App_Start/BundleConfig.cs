using System.Web.Optimization;

namespace Iftekhari.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
          
            BundleTable.EnableOptimizations = false;
        }
    }
}