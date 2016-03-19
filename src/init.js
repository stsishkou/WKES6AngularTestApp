import angular from 'angular';
import domready from 'domready';
import './app';
import './routes';
import './controllers/main';
import './services/main';

domready(() => {
    angular.bootstrap(document, ['MyApp'])
});
