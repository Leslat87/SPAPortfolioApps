import { Component, Input, OnInit } from '@angular/core';
import { TasksListService } from '../../sevice/tasks-list-service.service';
import { Tasks } from '../../interface/tasks.interface';


@Component({
  selector: 'app-listatareas',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.scss']
})
export class TasksListComponent {

  constructor(private tasksListService: TasksListService) { }

  // @Input()
  // public tareas: Tareas [] = [];

  get TasksList (){
    return [...this.tasksListService.tasks]
  }

  tasksComplete(value:Tasks){
    this.tasksListService.tasksComplete(value);
  }


  get TasksList1 () {
    return [...this.tasksListService.tasks];
  }

  tasksDelete(value:Tasks){
    // console.log(value)
    this.tasksListService.tasksDelete(value);
  }

  tasksEdit(value?:Tasks){

    if(!value) return;
    let newName = prompt("Nombre su tarea: ");
    if(!newName) return;
    this.tasksListService.tasksEdit(value, newName);

  }

  /*PROPIEDADES QUE USAMOS EN EL TEMPLATE PARA MOSTRAR LA FECHA
  Y PARA COMPROBAR EL ID Y AL PNERME ENCIMA DE UNA TAREA LO MUESTRE EN TODAS
  YA QUE CON EL BUCLE QUE HACEMOS PARA SACAR LAS TAREAS, SIN LA CONDICION DEL
  ID ME LO MOSTRARIA EN TODAS*/
  public templateDate?: string = "";
  public DateId?: string = "";

  tasksShowDate(value:string){
    this.templateDate = this.tasksListService.tasksShowDate(value);
    this.DateId = value;
  }

  deleteDate(){
    this.DateId = "";
    this.DateId = "";
  }

  addFavorite(value: Tasks){

    this.tasksListService.tasksFavorite(value);

  }





}
