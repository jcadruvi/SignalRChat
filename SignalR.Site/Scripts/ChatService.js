chatApp.factory('chatService', ['$http', function ($http) {
    var selectedUsers = [];
    var users = [{
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
        selectedUsers: selectedUsers,
        selectUser: function (user) {
            var alreadySelected = false;
            for (var i = 0; i < users.length; i++) {
                users[i].selected = false;
            }
            user.selected = true;
            for (var j = 0; j < selectedUsers.length; j++) {
                selectedUsers[j].selected = false;
                if (user.id === selectedUsers[j].id) {
                    selectedUsers[j].selected = true;
                    alreadySelected = true;
                }
            }
            if (!alreadySelected) {
                selectedUsers.push(user);
            }
        },
        users: users
    };
}]);