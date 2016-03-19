import 'angular-ui-router';
import {module} from './app';

import './controllers/main';
import main from './templates/main.html';

import './controllers/tab';
import tab from './templates/tab.html';

module.config(['$urlRouterProvider', '$stateProvider',
    ($urlRouterProvider, $stateProvider) => {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state({
                name: 'root',
                url: '/',
                template: main,
                controller: 'MainController'
            })
            .state({
                name: 'tab',
                url: '/tab',
                template: tab,
                controller: 'TabController'
            })
        
        ;

    }
]);

