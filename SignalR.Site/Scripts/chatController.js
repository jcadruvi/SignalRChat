var chatApp = angular.module('chatApp', []);

chatApp.controller('ChatController', function ($scope, chatService) {
    $scope.addUser = chatService.addUser;
    $scope.selectUser = chatService.selectUser;
    $scope.users = chatService.users;
});