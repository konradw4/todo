

export default class LogoutController{
    constructor(AuthService, $rootScope, $location){
        
        var ref = AuthService.getfirebase();
        
        this.signout = function(){
            ref.onAuth(function(authData) {
                $rootScope.authData = null;
                $rootScope.logg = false;
                console.log('z auth: ', $rootScope.authData);
            });
            $location.path('/login');
        }
        
        
    }
}