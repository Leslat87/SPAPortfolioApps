import { Component } from '@angular/core';

import { TasksListService } from '../../services/tasks-list.service';
import { Tasks } from '../../interfaces/tasks.interface';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  constructor(private tasksListService: TasksListService) { }

  //OBTENEMOS LA FECHA DEL MOMENTO QUE SE CREA LA TAREA
  //VAMOS SACANDO EL DIA, MES Y AÑO CON LAS FUNCIONES DEL TIPO 'DATE()'
  //Y RETORNAMOS UN STRING DE LA FECHA CREADA
  getDate():string{
    let currentDate = new Date();
    const day = currentDate.getDay();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  //GUARDAMOS EN LA PROPIEDAD DE NUESTRO OBJETO TAREA
  //EL STRING QUE HEMOS CREADO ANTES DE LA FECHA
  public tasks : Tasks = {
    id: uuid(),
    name: '',
    description: '',
    estatus: 0,
    date: this.getDate(),
    favorite: 0,
    start: new Date(),
    title: ''
  };

  saveTasks(){

    this.tasksListService.addTask(this.tasks);
    // console.table(this.Tarea)

    this.tasks = {
      id: uuid(),
      name: '',
      description: '',
      estatus: 0,
      date: this.getDate(),
      favorite : 0,
      start: new Date(),
      title: ''
    }

  }

}
