var app = angular.module('testApp', []);

app.controller('testController', function($scope, $log){
    $log.info('Hello world!');
    $scope.message = 'Hello world!';
});