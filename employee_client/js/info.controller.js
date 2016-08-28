app.controller('InfoCtrl', ['$scope', 'registerService', function($scope, registerService) {
    $scope.updateInfo = function() {
        var name = $scope.fname + " " + $scope.lname;
        registerService.updateInfo(name, $scope.age);
    };
}]);