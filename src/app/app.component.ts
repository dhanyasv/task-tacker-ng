import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './tasks/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-tracker';
  newTask:Task;

  getDataToTasks(dataFromAdd){
    this.newTask = dataFromAdd;
  }
}
