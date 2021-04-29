import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { AddTaskComponent } from './tasks/task/add-task/add-task.component';
import { GeneralComponent } from './misc/general.component';
import { GeneralDirective } from './misc/general.directive';
import { MiscDirective } from './misc/misc.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent,
    GeneralComponent,
    GeneralDirective,
    MiscDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
