import angular from 'angular';
import Login from './login/';

let componentModule = angular.module('app.components', [
    Login
])

    .name;

export default componentModule;
