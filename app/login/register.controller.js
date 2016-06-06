export default class RegisterController {
    constructor(AuthService){
        
        var ref = AuthService.getfirebase();
        console.log(ref);
        
        this.signup = function(){
            ref.createUser({
              email    : this.email,
              password : this.password
            }, function(error, userData) {
              if (error) {
                console.log("Error creating user:", error);
              } else {
                console.log("Successfully created user account with uid:", userData.uid);
              }
            });
        }
    }
}