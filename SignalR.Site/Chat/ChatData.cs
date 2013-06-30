using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR.Chat
{
    public class ChatData
    {
        public string Message { get; set; }
        public string Name { get; set; }

        public ChatData()
        {

        }

        public ChatData(string name, string message)
        {
            Name = name;
            Message = message;
        }

    }
}