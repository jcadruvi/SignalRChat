using SignalR.Model;
using SignalR.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService()
        {
            _userRepository = UserRepository.Instance;
        }
        public void AddUser(User user)
        {
            _userRepository.AddUser(user);
        }
        public IList<User> GetUsers()
        {
            return _userRepository.GetUsers();
        }
    }
}
