var chatApp = angular.module('chatApp', []);

chatApp.controller('ChatController', function ($scope) {
    $scope.users = [
      {
          'name': 'John Doe',
      },
      {
          'name': 'Jane Doe',
      },
      {
          'name': 'Fred Smith',
      }
    ];
});