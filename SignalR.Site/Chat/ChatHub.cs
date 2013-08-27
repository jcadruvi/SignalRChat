using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using SignalR.Services;
using SignalR.Model;

namespace SignalR.Chat
{
    public class ChatHub : Hub
    {
        private IUserService _userService;
        
        public ChatHub()
        {
            _userService = new UserService();
        }

        public void AddUser(string name)
        {
            Guid userGuid = Guid.NewGuid();
            User user = new User(Context.ConnectionId, userGuid, name);
            _userService.AddUser(user);
            Clients.Others.addUser(user.Id, user.Name);
            var users = (from u in _userService.GetUsers()
                         where u.Id != userGuid
                         select new {
                            u.Id,
                            u.Name
                         });
            Clients.Caller.initializeUsers(users);
        }

        public void SendMessage(string name, string message)
        {
            Clients.All.sendMessage(name, message);
        }
    }
}