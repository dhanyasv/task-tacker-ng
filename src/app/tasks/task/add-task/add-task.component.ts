import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup,FormControl } from '@angular/forms';
import { Task } from "../../task.model";
import { TaskService } from "../../task.service";

@Component({
    selector : 'add-task',
    templateUrl : './add-task.component.html',
    styleUrls : ['./add-task.component.css'],
    providers : [TaskService]
})
export class AddTaskComponent {

    showaddTaskForm:boolean = false;
    addTaskButtonText:string = 'ADD TASK';
    addTaskForm = new FormGroup({
        taskName: new FormControl(''),
        taskDate: new FormControl(''),
        taskreminder: new FormControl(false),
      });
    @Output() newTask = new EventEmitter<Task>();  

    constructor(private taskService:TaskService){
    }

    toggleAddTaskForm(){
        this.showaddTaskForm = !this.showaddTaskForm;
        this.showaddTaskForm ? this.addTaskButtonText = 'CLOSE' :
                                 this.addTaskButtonText ='ADD TASK';
    }
    onAdd(){ 
        const newtsk = {taskId :Math.floor(Math.random() * 100),...this.addTaskForm.value};
        this.newTask.emit(newtsk)
        //this.taskService.addData({taskId :Math.floor(Math.random() * 100),...this.addTaskForm.value});
        //this.taskService.getValue()
           // console.log(this.taskService.allTasks$)
    }

}