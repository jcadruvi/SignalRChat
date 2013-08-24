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
            _userService.AddUser(new User(Context.ConnectionId, Guid.NewGuid(), name));
        }

        public void SendMessage(string name, string message)
        {
            Clients.All.sendMessage(name, message);
        }
    }
}