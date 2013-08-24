using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Model
{
    public class User
    {
        public string ConnectionId { get; set; }
        public Guid Id { get; set; }
        public string Name { get; set; }

        public User(string connectionId, Guid id, string name)
        {
            ConnectionId = connectionId;
            Id = id;
            Name = name;
        }
    }
}
