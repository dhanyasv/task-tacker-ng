import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Task } from './task.model';
import { tap } from 'rxjs/operators';

@Injectable()
export class TaskService{
    private allTasks = [{
        taskId : 1,
        taskName : 'Dhanya',
        taskDate : '11 Aug' , 
        taskreminder : true
        },
        {
        taskId : 2,
        taskName : 'Akhil',
        taskDate : '13 Aug' , 
        taskreminder : true
        },
        {
        taskId : 3,
        taskName : 'Adwin',
        taskDate : '12 Aug' , 
        taskreminder : false
        }];
    getAllTasks(): Observable<Task[]>{
        return of(this.allTasks);
    }
    /*updateAllTasks(newTask:Task[]){
        this.allTasks.next(newTask)
    }
    getValue(){
        console.log(`Subject Value:`, this.allTasks.getValue());
    }*/
    addData(newTask) {
        //this.allTasks.push(newTask);
        //return this.allTasks;
    }
}