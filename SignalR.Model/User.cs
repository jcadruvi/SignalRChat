using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Model
{
    public class User
    {
        public int ConnectionId { get; set; }
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
