import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './pages/tasks-page/tasks-list.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';


const routes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'addtask', component: AddTasksComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Cambiar aquí
  exports: [RouterModule]
})
export class TasksRoutingModule { }
