import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './todoList.routes';
import ToDoListController from './todoList.controller';
import Auth from '../login/auth.service';

export default angular.module('app.todoList', [uirouter])
                    .controller('ToDoListController', ToDoListController)
                    .service('Auth', Auth)
                    .config(routing)
                    .name;