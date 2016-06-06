import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './config';

import login from './login';

const ngModule = angular
        .module('app', [
          uirouter,
          login
        ])
        .config(routing);