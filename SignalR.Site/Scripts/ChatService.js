chatApp.factory('chatService', ['$http', function ($http) {
    var connection = $.hubConnection();
    var connectionProxy = connection.createHubProxy('chatHub');
    connectionProxy.on('sendMessage', function (name, message, id) {
        //var $content, dataItem = {};
        //dataItem.Name = name;
        //dataItem.Id = id;
        //addTab(dataItem);
        //$content = $(self.tabStrip.data("kendoTabStrip").contentElement(0)).find('.content');
        //$content.html($content.html() + '<div>' + name + ': ' + message + '</div>');
    });
    connectionProxy.on('initializeUsers', function (users) {
        if (users.length === 1) {
            self.usersData.push(users);
        }
        else if (users.length > 1) {
            self.usersData(users);
        }
    });
    connectionProxy.on('addUser', function (user) {
        self.usersData.push(user);
    });
    connection.start().done(function () {
        connectionProxy.invoke('addUser', self.name());
    });
    var selectedUsers = [];
    var showChatPage = false;
    var users = [{
        id: 1,
        name: 'John Doe'
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
        onLogInClick: function () {
            showChatPage = true;
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
        showChatPage: showChatPage,
        users: users
    };
}]);