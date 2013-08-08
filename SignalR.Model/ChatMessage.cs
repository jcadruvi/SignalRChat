using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Model
{
    public class ChatMessage
    {
        public string Message { get; set; }
        public string Name { get; set; }

        public ChatMessage()
        {

        }

        public ChatMessage(string name, string message)
        {
            Name = name;
            Message = message;
        }
    }
}
