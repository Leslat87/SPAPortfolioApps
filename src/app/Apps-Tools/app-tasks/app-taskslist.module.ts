import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MaterialModule } from '../../material/material.module';


import { FinishedTasksListComponent } from './components/finishedtaskslist/finishedtaskslist.component';
import { FormComponent } from './components/form/form.component';
import { TasksListComponent } from './components/taskslist/taskslist.component';
import { TasksListPageComponent } from './pages/tasks-page/taskslist-page.component';
import { TasksRoutingModule } from './taskslist-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TasksListPageComponent,
    FormComponent,
    FinishedTasksListComponent,
    TasksListComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    TasksRoutingModule,
    MaterialModule,
    PrimeNgModule,
    FormsModule,

  ]
  ,exports: [
    TasksListPageComponent,
  ]

})
export class AppTasksListModule { }
