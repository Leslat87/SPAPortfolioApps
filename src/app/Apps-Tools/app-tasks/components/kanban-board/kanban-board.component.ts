// src/app/Apps-Tools/app-tasks/components/kanban-board/kanban-board.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task, TaskStatus } from '../../interfaces/task.interface';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  onDrop(event: DragEvent, status: TaskStatus) {
    const taskId = event.dataTransfer?.getData('taskId');
    if (taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        this.taskService.updateTaskStatus(task, status);
      }
    }
  }

  onDragStart(event: DragEvent, taskId: string) {
    event.dataTransfer?.setData('taskId', taskId);
  }
}
