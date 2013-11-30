chatApp.factory('chatService', ['$http', function ($http) {

    var selectedUsers = users;
    var users = [
    {
        id: 1,
        name: 'John Doe',
        selected: true
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'Fred Smith'
    }];
    return {
        addUser: function(user) {

        },
        selectUser: function (user) {
            for (var i = 0; i < users.length; i++) {
                users[i].selected = false;
            }
            user.selected = true;
            selectedUsers.push(user);
        },
        users: users
    };
}]);