app.controller('RegisterCtrl', ['$scope', 'registerService', function($scope, registerService) {
    $scope.register = function() {
        registerService.postData();
    };
}]);