
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
                stat: "Active"
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

        this.filterTasksUser = function(type) {
            if(type == 'all') {
                this.filter = "";
            } 
            else if(type == 'my' && $rootScope.authData.password.email != "") {
                  this.filter = $rootScope.authData.password.email;
            }
        }
        
        this.filterTasks = function(type) {
            if(type == 'all') {
                this.filterTask = "";
                console.log('all done');
            } 
            else if(type == 'Active') {
                  this.filterTask = "Active";
                  console.log('Active');
            }
            else if(type == 'Done') {
                  this.filterTask = "Done";
                  console.log('done');
            }
        }
        
    }
        
}