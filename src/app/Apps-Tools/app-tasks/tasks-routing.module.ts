import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';


const routes: Routes = [
  { path: '', component: KanbanBoardComponent },
  { path: 'addtask', component: AddTaskComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Cambiar aquí
  exports: [RouterModule]
})
export class TasksRoutingModule { }
