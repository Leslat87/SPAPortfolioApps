import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MaterialModule } from '../../material/material.module';

import { TasksFilterPipe } from '../pipes/tasks-filter.pipe';

import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { TasksRoutingModule } from './taskslist-routing.module';
import { TasksListComponent } from './pages/tasks-page/tasks-list.component';


@NgModule({
  declarations: [
    TasksListComponent,
    AddTasksComponent,
    TasksFilterPipe,


  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    PrimeNgModule,
    FormsModule,


  ]
  ,exports: [
    TasksListComponent,
    AddTasksComponent,
    TasksFilterPipe,


  ]

})
export class AppTasksListModule { }
