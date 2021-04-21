import { Component, Input, OnChanges, OnInit ,SimpleChanges } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Task } from "./task.model";
import { TaskService } from "./task.service";

@Component({
    selector: 'tasks',
    templateUrl : './tasks.component.html',
    styleUrls : ['./tasks.component.css'],
    providers: [TaskService]
})

export class TasksComponent implements OnInit,OnChanges{

    tasks: Task[];
    @Input() newTask:Task;

    constructor(private taskService : TaskService) {
    }

    ngOnInit() {
        this.taskService.getAllTasks().subscribe(
            task => {
                this.tasks = task
            });
    }
    ngOnChanges(changes:SimpleChanges){
       if(changes.newTask.currentValue != undefined){
            this.tasks.push(changes.newTask.currentValue)
       }
    }
    deleteATask(taskId){
        this.tasks = this.tasks.filter((task) => task.taskId != taskId)
    }
    toggleATask(taskId){
         this.tasks = this.tasks.map((task) => 
            (task.taskId === taskId) ? {...task,taskreminder : !task.taskreminder} : task
        )
    }
}