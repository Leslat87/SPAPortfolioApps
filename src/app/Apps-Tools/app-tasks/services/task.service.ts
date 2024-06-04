import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  private storageKeyPrefix = 'tasks_';
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.loadTasks(userId);
    }
  }

  private getStorageKey(userId: string): string {
    return `${this.storageKeyPrefix}${userId}`;
  }

  loadTasks(userId: string): void {
    const storedTasks = localStorage.getItem(this.getStorageKey(userId));
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    this.tasksSubject.next(tasks);
  }

  saveTasks(userId: string, tasks: Task[]): void {
    localStorage.setItem(this.getStorageKey(userId), JSON.stringify(tasks));
    this.tasksSubject.next(tasks);
  }
  getTasksByUser(userId: string): Task[] {
    const storedTasks = localStorage.getItem(this.getStorageKey(userId));
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  addTask(userId: string, task: Task): void {
    const tasks = this.getTasksByUser(userId);
    tasks.push(task);
    this.saveTasks(userId, tasks);
  }

  updateTask(userId: string, updatedTask: Task): void {
    const tasks = this.getTasksByUser(userId);
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
    }
    this.saveTasks(userId, tasks);
  }

  deleteTask(userId: string, taskId: string): void {
    const tasks = this.getTasksByUser(userId).filter(task => task.id !== taskId);
    this.saveTasks(userId, tasks);
  }
}
