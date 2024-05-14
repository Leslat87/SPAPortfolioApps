import { Component, OnInit } from '@angular/core';
import { TasksListService } from '../../services/tasks-list.service';
import { Tasks } from '../../interfaces/tasks.interface';


@Component({
  selector: 'app-finishedtasklist',
  templateUrl: './finishedtaskslist.component.html',
  styleUrls: ['./finishedtaskslist.component.scss']
})
export class FinishedTasksListComponent {

  constructor( private tasksListService: TasksListService) { }

  get getTasks () {
    return [...this.tasksListService.tasks];
  }

  tasksDelete(value:Tasks){
    console.log(value)
    this.tasksListService.tasksDelete(value);
  }

}
