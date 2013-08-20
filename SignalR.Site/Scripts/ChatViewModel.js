﻿function chatViewModel() {
    self = {};

    var _connectionProxy = null;

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
        _connectionProxy.invoke('sendMessage', myName, myMessage);
        self.message(null);
    }

    self.onLogInClick = function () {
        self.showChat(true);
        self.showName(false);
        var connection = $.hubConnection();
        _connectionProxy = connection.createHubProxy('chatHub');
        _connectionProxy.on('sendMessage', function (name, message) {
            self.content(self.content() + ("<div>" + name + ': ' + message + "</div>"));
        });

        //_connection.error(function (error) {
        //    console.warn(error);
        //});

        connection.start()
    };

    return self;
}