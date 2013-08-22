using SignalR.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Services
{
    public interface IUserService
    {
        void AddUser(User user);
        IList<User> GetUsers();
    }
}
