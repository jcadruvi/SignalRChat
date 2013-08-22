using SignalR.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Repositories
{
    public class UserRepository : IUserRepository
    {
        private static readonly UserRepository _instance = new UserRepository();
        private static IList<User> _users = new List<User>();
        public static UserRepository Instance { get { return _instance; } }

        static UserRepository()
        {

        }

        private UserRepository()
        {

        }

        public void AddUser(User user)
        {
            _users.Add(user);
        }

        public IList<User> GetUsers()
        {
            return _users;
        }
    }
}
