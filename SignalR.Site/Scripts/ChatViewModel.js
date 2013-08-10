function chatViewModel() {
    self = {};

    var _connection = null;

    self.content = ko.observable();
    self.content("");
    self.message = ko.observable();
    self.name = ko.observable();
    self.showChat = ko.observable();
    self.showName = ko.observable();
    self.showName(true);
    
    self.onSendClick = function () {
        var myName = self.name();
        var myMessage = self.message();
        _connection.send(JSON.stringify({ name: myName, message: myMessage }));
        self.message(null);
    }

    self.onLogInClick = function () {
        self.showChat(true);
        self.showName(false);
        _connection = $.connection("/chat");
        _connection.received(function (data) {
            self.content(self.content() + ("<div>" + data.Name + ': ' + data.Message + "</div>"));
        });

        _connection.error(function (error) {
            console.warn(error);
        });

        _connection.start()
    };

    return self;
}