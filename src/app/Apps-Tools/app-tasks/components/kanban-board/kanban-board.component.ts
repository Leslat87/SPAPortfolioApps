import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task, TaskStatus } from '../../interfaces/task.interface';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
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
      if (task && task.status !== 'done') {
        this.taskService.updateTaskStatus(task, status);
      }
    }
  }

  onDragStart(event: DragEvent, taskId: string) {
    event.dataTransfer?.setData('taskId', taskId);
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId);
  }

  onStatusChange(task: Task, newStatus: TaskStatus): void {
    if (task.status !== 'done') {
      this.taskService.updateTaskStatus(task, newStatus);
    }
  }

  getTaskClass(status: TaskStatus): string {
    switch (status) {
      case 'to do':
        return 'bg-blue-500';
      case 'in progress':
        return 'bg-yellow-300';
      case 'done':
        return 'bg-green-300';
      default:
        return '';
    }
  }
}
