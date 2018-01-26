import angular from 'angular';
import Login from './login/';
import Home from './homepage/';
import Dashboard from './dashboard/';
import Registration from './registration';

let componentModule = angular.module('app.components', [
    Login,
    Home,
    Dashboard,
    Registration
])

    .name;

export default componentModule;
