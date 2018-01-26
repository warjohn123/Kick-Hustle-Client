import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registrationComponent from './component';

let registrationModule = angular.module('registration', [
    uiRouter
])

    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('registration', {
                url: '/register',
                component: 'registration'
            });
    })

    .component('registration', registrationComponent)

    .name;

export default registrationModule;
