import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasksFilterPipe } from '../pipes/tasks-filter.pipe';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { TasksListService } from './services/task.service';



@NgModule({
  declarations: [

    AddTaskComponent,
    TasksFilterPipe,
    KanbanBoardComponent,


  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ]
  ,exports: [

    AddTaskComponent,
    TasksFilterPipe,
    KanbanBoardComponent,


  ],
  providers: [
    TasksListService,
  ]

})
export class AppTasksModule { }
