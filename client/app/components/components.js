import angular from 'angular';
import Login from './login/';
import Home from './homepage/'

let componentModule = angular.module('app.components', [
    Login,
    Home
])

    .name;

export default componentModule;
