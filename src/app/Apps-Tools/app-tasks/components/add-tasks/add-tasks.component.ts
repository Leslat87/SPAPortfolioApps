import { Component } from '@angular/core';
import { Tasks } from '../../interfaces/tasks.interface';
import { TasksListService } from '../../services/tasks-list.service';


@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent {
  task: Tasks = { id: '', name: '', description: '', status: 'todo', date: '' };

  constructor(private taskService: TasksListService) { }

  addTask() {
    this.task.id = Date.now().toString();
    this.task.date = new Date().toISOString();
    this.taskService.addTask(this.task);
    this.task = { id: '', name: '', description: '', status: 'todo', date: '' };
  }
}
