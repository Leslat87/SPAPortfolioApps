
import { Component } from '@angular/core';
import { TasksListService } from '../../services/tasks-list.service';
import { Tasks } from '../../interfaces/tasks.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent {
  taskName: string = '';
  taskDescription: string = '';
  TasksListService: any;

  constructor(private router: Router, private tasksListService: TasksListService) {}

  saveTask() {
    // Crear una nueva tarea con los datos del formulario
    const newTask: Tasks = {
      id: this.generateId(), // Generar un ID único para la tarea (implementación personalizada)
      name: this.taskName,
      description: this.taskDescription,
      estatus: 0, // Puedes establecer el estado inicial aquí si es necesario
      favorite: 0, // Puedes establecer el estado inicial aquí si es necesario// Fecha actual
      date: new Date().toISOString(),
      start: new Date, // Fecha actual
      title: 'New Task Title' // Título de la tarea, puedes ajustarlo según lo necesites
};

       // Guardar la nueva tarea utilizando el servicio TasksListService
       this.TasksListService.addTask(newTask);

    // Limpiar los campos del formulario después de guardar la tarea
    this.taskName = '';
    this.taskDescription = '';

    this.router.navigate(['tasks']);
  }

  // Función para generar un ID único para la tarea
  private generateId(): string {
    // Implementación personalizada para generar un ID único
    // Aquí puedes utilizar cualquier método que prefieras para generar un ID único
    return Math.random().toString(36).substr(2, 9);
  }
}
