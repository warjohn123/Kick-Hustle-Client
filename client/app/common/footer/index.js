import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponent from './component';

let footerModule = angular.module('footer', [
    uiRouter
])

    .component('footerSection', footerComponent)

    .name;

export default footerModule;
