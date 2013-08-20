using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using System.Collections.Generic;
using SignalR.Model;


namespace SignalR.Chat
{
    public class ChatConnection //: PersistentConnection
    {
        /*private readonly Dictionary<string, string> _clients = new Dictionary<string, string>();

        protected override Task OnConnected(IRequest request, string connectionId)
        {
            _clients.Add(connectionId, string.Empty);
            ChatMessage chatMessage = new ChatMessage("Server", "A new user has joined the room.");
            return Connection.Broadcast(chatMessage);
        }

        protected override Task OnDisconnected(IRequest request, string connectionId)
        {
            string name = _clients[connectionId];
            ChatMessage chatMessage = new ChatMessage("Server", string.Format("{0} has left the room.", name));
            _clients.Remove(connectionId);
            return Connection.Broadcast(chatMessage);
        }

        protected override Task OnReceived(IRequest request, string connectionId, string data)
        {
            ChatMessage chatMessage = JsonConvert.DeserializeObject<ChatMessage>(data);
            _clients[connectionId] = chatMessage.Name;
            return Connection.Broadcast(chatMessage);
        }*/
    }
}