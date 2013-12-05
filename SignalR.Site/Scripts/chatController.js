var chatApp = angular.module('chatApp', []);

chatApp.controller('ChatController', function ($scope, chatService) {
    $scope.addUser = chatService.addUser;
    $scope.onLogInClick = function () {
        $scope.showChatPage = true;
    };
    $scope.selectedUsers = chatService.selectedUsers;
    $scope.selectUser = chatService.selectUser;
    $scope.showChatPage = chatService.showChatPage;
    $scope.users = chatService.users;
});