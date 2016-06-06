export default class AuthService {
  constructor($firebaseAuth) {
      this.$firebaseAuth = $firebaseAuth;
  }

  getfirebase() {
      //var ref = new Firebase("https://todolistss.firebaseio.com/");
      return new Firebase("https://todolistss.firebaseio.com/");
  }
  
}