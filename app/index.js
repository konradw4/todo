import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './config';

import login from './login';
import todoList from './todoList';

const ngModule = angular
        .module('app', [
          uirouter,
          login,
          todoList
        ])
        .config(routing);