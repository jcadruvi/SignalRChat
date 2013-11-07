function chatViewModel() {
    self = {};

    var _connectionProxy = null;

    self.content = ko.observable("");
    self.message = ko.observable();
    self.name = ko.observable();
    self.tabStrip = null;
    self.showChat = ko.observable();
    self.showName = ko.observable(true);
    self.showTabs = ko.observable(false);
    self.usersData = ko.observableArray();
    self.usersGrid = ko.observable();
    self.usersGridOptions = {
        change: function () {
            addTab(this.dataItem(this.select()).Name);
        },
        columns: [
            {
                field: "Name",
                title: "Name",
                width: "70px"
            }]
    };

    var addTab = function (tabName) {
        if (self.tabStrip.data("kendoTabStrip").items().length == 0) {
            self.tabStrip.data("kendoTabStrip").append([{
                text: tabName,
                encoded: false,
                content: '<div style="width: 500px; height: 300px; margin: 0 0 20px 0; border: solid 1px #999; overflow-y: scroll;"></div>' +
                         '<input type="text" />' +
                         '<input class="sendButton" type="button" value="Send" />'
            }]);
        } else {
            self.tabStrip.data("kendoTabStrip").insertBefore([{
                text: self.usersGrid().dataItem(self.usersGrid().select()).Name,
                encoded: false,
                content: '<div style="width: 500px; height: 300px; margin: 0 0 20px 0; border: solid 1px #999; overflow-y: scroll;"></div>' +
                         '<input type="text" />' +
                         '<input class="sendButton" type="button" value="Send" />'
            }],
            $(self.tabStrip.data("kendoTabStrip").items()[0]));
        }
        self.tabStrip.data("kendoTabStrip").select(0);
        self.showTabs(true);
        $(self.tabStrip.data("kendoTabStrip").contentElement(0)).find('.sendButton').click(function () {

        })
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