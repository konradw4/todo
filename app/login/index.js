import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import angularfire from 'angularfire';

import routing from './routes';
import LoginController from './login.controller';
import RegisterController from './register.controller';
import LogoutController from './logout.controller';
import AuthService from './auth.service';


export default angular.module('app.login', [uirouter, angularfire])
  .config(routing)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .controller('LogoutController', LogoutController)
  .service('AuthService', AuthService)
  .name;