import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "../task.model";

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls : ['./task.component.css']
})
export class TaskComponent {

    @Input() task : Task;
    @Output() deleteTask = new EventEmitter<Number>();
    @Output() toggleTask = new EventEmitter<Number>();

    reminderON:Boolean = false; 

    constructor(){

    }

    deleteTasks(){
        this.deleteTask.emit(this.task.taskId);
        console.log("jjj")
    }

    onToggleTask(){
        this.reminderON = this.task.taskreminder;
        this.toggleTask.emit(this.task.taskId);
    }

}