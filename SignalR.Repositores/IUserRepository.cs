using SignalR.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Repositories
{
    public interface IUserRepository
    {
        void AddUser(User user);
        IList<User> GetUsers();
    }
}
