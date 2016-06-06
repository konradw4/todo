
export default class ToDoListController{
    constructor(Auth, $firebaseArray, $rootScope){
        var ref = Auth.getfirebase();
        var taskRef = ref.child('task');
        
        //console.log($rootScope.authData.password.email);
        
        this.tasks = $firebaseArray(taskRef);
        
        this.addTask = function(){
              taskRef.push().set({
                author: $rootScope.authData.password.email,
                task: this.task
              });
              
              this.author = "";
              this.task = "";
            }
        }
}