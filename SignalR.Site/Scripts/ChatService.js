chatApp.factory('chatService', ['$http', function ($http) {
    var users = [
    {
        'name': 'John Doe',
        'selected': true
    },
    {
        'name': 'Jane Doe'
    },
    {
        'name': 'Fred Smith'
    }];

    return {
        addUser: function(user) {

        },
        selectUser: function (user) {
            for (var i = 0; i < users.length; i++) {
                users[i].selected = false;
            }
            user.selected = true;
        },
        users: users
    };
}]);