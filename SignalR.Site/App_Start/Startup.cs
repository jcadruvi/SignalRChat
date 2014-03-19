using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(SignalR.App_Start.Startup))]
namespace SignalR.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var hubActivator = new MvcHubActivator();

            GlobalHost.DependencyResolver.Register(
                typeof(IHubActivator),
                () => hubActivator);
            app.MapSignalR();
        }
    }
}