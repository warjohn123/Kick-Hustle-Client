import angular from 'angular';
import Login from './login/';
import Home from './homepage/';
import Dashboard from './dashboard/'

let componentModule = angular.module('app.components', [
    Login,
    Home,
    Dashboard
])

    .name;

export default componentModule;
