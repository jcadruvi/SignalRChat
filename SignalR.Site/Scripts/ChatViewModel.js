function chatViewModel() {
    self = {};

    var _connectionProxy = null;

    self.name = ko.observable(null);
    self.tabStrip = null;
    self.showChat = ko.observable();
    self.showName = ko.observable(true);
    self.showTabs = ko.observable(false);
    self.usersData = ko.observableArray();
    self.usersGrid = ko.observable();
    self.usersGridOptions = {
        change: function () {
            addTab(this.dataItem(this.select()));
        },
        columns: [
            {
                field: "Name",
                title: "Name",
                width: "70px"
            }]
    };

    self.onLogInClick = function () {
        self.showChat(true);
        self.showName(false);
        var connection = $.hubConnection();
        _connectionProxy = connection.createHubProxy('chatHub');
        _connectionProxy.on('sendMessage', function (name, message, id) {
            //var $content, dataItem = {};
            //dataItem.Name = name;
            //dataItem.Id = id;
            //addTab(dataItem);
            //$content = $(self.tabStrip.data("kendoTabStrip").contentElement(0)).find('.content');
            //$content.html($content.html() + '<div>' + name + ': ' + message + '</div>');
        });
        _connectionProxy.on('initializeUsers', function (users) {
            if (users.length === 1) {
                self.usersData.push(users);
            }
            else if (users.length > 1) {
                self.usersData(users);
            }
        });
        _connectionProxy.on('addUser', function (user) {
            self.usersData.push(user);
        });
        connection.start().done(function () {
            _connectionProxy.invoke('addUser', self.name());
        });
    };

    return self;
}