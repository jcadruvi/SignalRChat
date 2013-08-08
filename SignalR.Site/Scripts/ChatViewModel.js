function chatViewModel() {
    self = {};

    self.message = ko.observable();
    self.name = ko.observable();
    self.showChat = ko.observable();
    self.showName = ko.observable();
    self.showName(true);

    var myConnection = $.connection("/chat");
    myConnection.received(function (data) {
        $("#content").append("<div>" + data.Name + ': ' + data.Message + "</div>");
    });

    myConnection.error(function (error) {
        console.warn(error);
    });

    myConnection.start()
    .promise()
    .done(function () {
        $("#send").click(function () {
            var myName = self.name();
            var myMessage = self.message();
            myConnection.send(JSON.stringify({ name: myName, message: myMessage }));
        });
    });

    self.onLogInClick = function () {
        self.showChat(true);
        self.showName(false);
    };

    return self;
}