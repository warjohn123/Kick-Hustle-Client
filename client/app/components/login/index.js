import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './component';

let loginModule = angular.module('login', [
    uiRouter
])

    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $stateProvider
            .state('login', {
                url: '/login',
                component: 'login'
            });
    })

    .component('login', loginComponent)

    .name;

export default loginModule;
