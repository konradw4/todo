export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('./login.html'),
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    })
    .state('register', {
      url: '/register',
      template: require('./register.html'),
      controller: 'RegisterController',
      controllerAs: 'registerCtrl'
    })
    .state('logout', {
      url: '/logout',
      template: require('./logout.html'),
      controller: 'LogoutController',
      controllerAs: 'logoutCtrl'
    })
}