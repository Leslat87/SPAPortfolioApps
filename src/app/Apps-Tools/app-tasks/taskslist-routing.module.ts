import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListPageComponent } from './pages/tasks-page/taskslist-page.component';




// localhost:4200/heroes/
const routes: Routes = [
  { path: '', component: TasksListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }