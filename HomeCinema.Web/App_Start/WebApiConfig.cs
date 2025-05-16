using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Iftekhari.Web.Infrastructure.MessageHandlers;


namespace Iftekhari.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.MessageHandlers.Add(new HomeCinemaAuthHandler());

            // Web API routes
            config.MapHttpAttributeRoutes();

            //r cores = new EnableCorsAttribute("*", "*", "*");
            var cores = new EnableCorsAttribute("http://localhost:3000", "*", "*")
            {
                SupportsCredentials = true // ✅ Required when using withCredentials
            };

            config.EnableCors(cores);
            
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);
        }
    }
}
