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
        
        public ChatHub(IUserService userService)
        {
            _userService = userService;
        }

        public void AddUser(string name)
        {
            Clients.Caller.initializeUsers(_userService.GetUsers());
            User user = new User(Context.ConnectionId, Guid.NewGuid(), name);
            _userService.AddUser(user);
            Clients.Others.addUser(new { user.Id, user.Name });
        }

        public void SendMessage(string name, string message, Guid id)
        {
            string connectionId = null;
            var user = (from u in _userService.GetUsers()
                        where u.Id == id
                        select u);
            if (user.Count<User>() > 0)
            {
                connectionId = user.First<User>().ConnectionId;
            }
            if (!string.IsNullOrEmpty(connectionId))
            {
                Clients.Client(connectionId).sendMessage(name, message, id);
            }
        }
    }
}