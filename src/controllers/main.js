import {module} from './../app';

module.controller('MainController', ['$scope', ($scope) => {
    $scope.hello = () => 'world';

    $scope.time = new Date();

    $scope.toTest = () => {};
}]);