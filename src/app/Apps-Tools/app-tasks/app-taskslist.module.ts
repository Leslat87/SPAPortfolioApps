import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MaterialModule } from '../../material/material.module';


import { FinishedTasksListComponent } from './components/finishedtaskslist/finishedtaskslist.component';
import { FormComponent } from './components/form/form.component';
import { TasksListComponent } from './components/taskslist/taskslist.component';
import { TasksListPageComponent } from './pages/tasks-page/tasks-list-page.component';
import { TasksRoutingModule } from './taskslist-routing.module';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';


@NgModule({
  declarations: [
    TasksListPageComponent,
    FormComponent,
    FinishedTasksListComponent,
    TasksListComponent,
    AddTasksComponent


  ],
  imports: [
    CommonModule,
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
