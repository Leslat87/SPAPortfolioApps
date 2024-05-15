import { Component, OnInit } from '@angular/core';
import { TasksListService } from '../../services/tasks-list.service';
import { Tasks } from '../../interfaces/tasks.interface';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-list-page.component.html',
  styles: ``
})
export class TasksListPageComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(private tasksListService: TasksListService) { }

  ngOnInit() {
    this.tasks = this.tasksListService.tasks;
  }
  getTasks() {
    this.tasks = this.tasksListService.tasks;
  }
  deleteLocalStorage(){

    this.tasksListService.deleteLocalstorage();

  }

}


