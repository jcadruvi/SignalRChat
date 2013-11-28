var chatApp = angular.module('chatApp', []);

chatApp.controller('ChatController', function ($scope) {

    $scope.users = [
      {
          'name': 'John Doe',
          'selected': true
      },
      {
          'name': 'Jane Doe'
      },
      {
          'name': 'Fred Smith'
      }
    ];

    $scope.selectUser = function (user) {
        for (var i = 0; i < $scope.users.length; i++) {
            $scope.users[i].selected = false;
        }
        user.selected = true;
    };
});