import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/tasks.interface';

@Injectable({ providedIn: 'root' })
export class TasksListService {
  public tasks: Tasks[] = [];





  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('history')!) || [];
  }

  saveOnLocalStorage(value: Tasks[]) {
    localStorage.setItem('history', JSON.stringify(value));
  }

  addTask(newTask: Tasks) {
    this.tasks.push(newTask);
    this.saveOnLocalStorage(this.tasks);

  }

  updateTaskStatus(id: string, status: 'todo' | 'inprogress' | 'done') {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = status;
      this.saveOnLocalStorage(this.tasks);

    }
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveOnLocalStorage(this.tasks);

  }

  editTask(id: string, newName: string) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.name = newName;
      this.saveOnLocalStorage(this.tasks);

    }
  }

  getTaskDate(id: string): string | undefined {
    const task = this.tasks.find(t => t.id === id);
    return task?.date;
  }

  deleteLocalStorage() {
    const del = confirm("¿Desea eliminar el historial de tareas?");
    if (!del) return;
    localStorage.clear();
    location.reload();
  }
}
