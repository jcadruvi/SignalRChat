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
            var users = (from u in _userService.GetUsers()
                         select new
                         {
                             u.Id,
                             u.Name
                         });
            Clients.Caller.initializeUsers(users);
            User user = new User(Context.ConnectionId, Guid.NewGuid(), name);
            _userService.AddUser(user);
            Clients.Others.addUser(new { user.Id, user.Name });
        }

        public void SendMessage(string name, string message, string connectionId)
        {
            Clients.Client(connectionId).sendMessage(name, message, connectionId);
        }
    }
}