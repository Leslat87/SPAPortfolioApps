import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MaterialModule } from '../../material/material.module';

import { TasksFilterPipe } from '../pipes/tasks-filter.pipe';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { TaskService } from './services/task.service';



@NgModule({
  declarations: [

    AddTaskComponent,
    TasksFilterPipe,
    KanbanBoardComponent,


  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,


  ]
  ,exports: [

    AddTaskComponent,
    TasksFilterPipe,
    KanbanBoardComponent,


  ],
  providers: [
    TaskService,
  ]

})
export class AppTasksModule { }
