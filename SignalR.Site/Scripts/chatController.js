var chatApp = angular.module('chatApp', []);

chatApp.controller('ChatController', function ($scope, chatService) {

    $scope.users = chatService.users;

    $scope.selectUser = chatService.selectUser;
});