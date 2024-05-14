import { Component, OnInit } from '@angular/core';
import { TasksListService } from '../../sevice/tasks-list-service.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './taskslist-page.component.html',
  styles: ``
})
export class TasksListPageComponent implements OnInit {

  constructor(private tasksListService: TasksListService) { }

  ngOnInit() {
  }

  deleteLocalStorage(){

    this.tasksListService.deleteLocalstorage();

  }

}


