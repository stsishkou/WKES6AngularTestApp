import 'angular-mocks';

import '../src/controllers/main';
import '../src/controllers/tab';

import '../src/services/main';

describe('Application Testing', () => {

    beforeEach(angular.mock.module('MyApp'));

    describe('Controllers Testing', () => {
        var $controller;

        beforeEach(angular.mock.inject((_$controller_) => {
            $controller = _$controller_;

        }));

        describe('MainController', () => {

            it('should say hello world', () => {
                var $scope = {};
                $controller('MainController', {$scope: $scope});

                expect($scope.hello()).to.be.equal('world');
            });

        });
        
        describe('TabController', () => {
           
            it('should say hello world', () => {
                var $scope = {};
                $controller('TabController', {$scope: $scope});

                expect($scope.hello()).to.be.equal('world');
            });
            
        });

    });

    describe('Factories Testing', () => {

        describe('MainFactory', () => {
            var MainFactory;

            beforeEach(angular.mock.inject((_MainFactory_) => {
                MainFactory = _MainFactory_;
            }));

            it('should say hello world', () => {
                expect(MainFactory.hello()).to.be.equal('world');
            });

        });

    });

});