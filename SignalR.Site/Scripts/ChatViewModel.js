function chatViewModel() {
    self = {};

    var _connectionProxy = null;

    self.content = ko.observable();
    self.content("");
    self.message = ko.observable();
    self.name = ko.observable();
    self.showChat = ko.observable();
    self.showName = ko.observable();
    self.showName(true);
    self.usersData = ko.observableArray();
    self.usersGridOptions = {
        change: function () {
            $("#chatTab").data("kendoTabStrip").insertBefore([{
                text: this.dataItem(this.select()).Name,
                encoded: false,                             
                content: '<div style="width: 500px; height: 300px; margin: 0 0 20px 0; border: solid 1px #999; overflow-y: scroll;"></div>' + 
                         '<input type="text" />' +
                         '<input type="button" value="Send" />'
            }],
            $($("#chatTab").data("kendoTabStrip").items()[0]));
            $("#chatTab").data("kendoTabStrip").select(0);
        },
        columns: [
            {
                field: "Name",
                title: "Name",
                width: "70px"
            }]
    };

    

    self.onSendClick = function () {
        _connectionProxy.invoke('sendMessage', self.name(), self.message());
        self.message(null);
    };

    self.onLogInClick = function () {
        self.showChat(true);
        self.showName(false);
        var connection = $.hubConnection();
        _connectionProxy = connection.createHubProxy('chatHub');
        _connectionProxy.on('sendMessage', function (name, message) {
            self.content(self.content() + ("<div>" + name + ': ' + message + "</div>"));
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