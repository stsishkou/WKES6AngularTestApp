import {module} from '../app';

module.controller('TabController', ['$scope', ($scope) => {
    $scope.hello = () => 'world';
}]);