import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';


const routes: Routes = [
  { path: ':id', component: KanbanBoardComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class TasksRoutingModule { }
