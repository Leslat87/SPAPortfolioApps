import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksListPageComponent } from './pages/tasks-page/tasks-list-page.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

const routes: Routes = [
  { path: '', component: TasksListPageComponent },
  { path: 'addtask', component: AddTasksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
