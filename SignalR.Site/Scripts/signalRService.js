(function () {
    'use strict';

    angular.module('chatApp').factory('signalRService', signalRService);

    function signalRService() {

        var self = {};

        self.connection = null;
        self.proxy = null;

        self.createConnection = function (hubName) {
            connection = $.hubConnection();
            proxy = connection.createHubProxy(hubName);
            return connection.start();
        };

        return self;

    }
})();