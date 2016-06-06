export default function routes($stateProvider) {
  $stateProvider
    .state('todoList', {
      url: '/list',
      template: require('./todoList.html'),
      controller: 'ToDoListController',
      controllerAs: 'todoCtrl'
    })
}