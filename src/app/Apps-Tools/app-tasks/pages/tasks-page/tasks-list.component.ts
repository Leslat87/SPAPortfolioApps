import { Component, OnInit } from '@angular/core';

import { TasksListService } from '../../services/tasks-list.service';
import { Tasks } from '../../interfaces/tasks.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor(private taskService: TasksListService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

  onDrop(event: any, status: 'todo' | 'inprogress' | 'done') {
    const id = event.dataTransfer.getData('text');
    this.taskService.updateTaskStatus(id, status);
    this.tasks = this.taskService.tasks;
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  drag(event: any, id: string) {
    event.dataTransfer.setData('text', id);
  }
  deleteLocalStorage() {
    this.taskService.deleteLocalStorage();
  }
}


