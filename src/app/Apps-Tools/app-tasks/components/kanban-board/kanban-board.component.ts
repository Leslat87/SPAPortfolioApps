import { Component, OnInit } from '@angular/core';
import { TasksListService } from '../../services/task.service';
import { Task, TaskStatus } from '../../interfaces/task.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  tasks: Task[] = [];
  userId: string | null = null;
  draggedTaskId: string | null = null;

  constructor(
    private tasksService: TasksListService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.tasksService.loadTasks(this.userId);
      this.tasksService.tasks$.subscribe(tasks => {
        this.tasks = tasks;
      });
    }
  }


  getTasksByStatus(status: string): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  onDragStart(event: any, taskId: string): void {
    this.draggedTaskId = taskId;
  }

  onDrop(event: any, newStatus: string): void {
    if (this.draggedTaskId && this.userId) {
      const task = this.tasks.find(t => t.id === this.draggedTaskId);
      if (task && task.status !== newStatus) {
        task.status = newStatus as TaskStatus;
        this.tasksService.updateTask(this.userId, task);
      }
      this.draggedTaskId = null;
    }
  }

  deleteTask(taskId: string): void {
    if (this.userId) {
      this.tasksService.deleteTask(this.userId, taskId);
    }
  }

  onStatusChange(task: Task, newStatus: string): void {
    if (task.status !== newStatus) {
      task.status = newStatus as TaskStatus;
      if (this.userId) {
        this.tasksService.updateTask(this.userId, task);
      }
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
