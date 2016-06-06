
export default class ToDoListController{
    constructor(Auth, $firebaseArray, $rootScope){
        var ref = Auth.getfirebase();
        var taskRef = ref.child('task');
        
        //console.log($rootScope.authData.password.email);
        
        this.tasks = $firebaseArray(taskRef);
        
        this.addTask = function(){
              taskRef.push().set({
                author: $rootScope.authData.password.email,
                task: this.task,
                stat: "unDone"
              });
              
              this.task = "";
            }
            
        
        this.removeTask = function(task){
            if (task.author === $rootScope.authData.password.email) {
                this.tasks.$remove(task);
                this.error = null;
            }else{
                this.error = "Nie jestes właścicielem tego taska";
                console.log('nie jestes wlascicielem taska');
            }
        }
        
        this.doneTask = function(task){
            if (task.author === $rootScope.authData.password.email) {
                var item = this.tasks.$getRecord(task.$id);
                item.stat = "Done";
                this.tasks.$save(item);
                this.error = null;
            }else{
                this.error = "Nie jestes właścicielem tego taska";
                console.log('nie jestes wlascicielem taska');
            }
        }
            
    }
        
}