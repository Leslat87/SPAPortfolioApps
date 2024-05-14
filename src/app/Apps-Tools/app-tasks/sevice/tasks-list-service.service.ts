
import { Injectable } from '@angular/core';
import { Tasks } from '../interface/tasks.interface';

@Injectable({providedIn: 'root'})

export class TasksListService {

    public tasks : Tasks [] = [];
    //variables para los alerts
    public tasksFavouriteSaveAlert: string = "Tarea guardada en favorito";
    public tasksFavouriteOutAlert: string = "Tarea fuera de favoritos";
    public tasksCompleteAlert: string = "Tarea completada";
    public tasksDeletedAlert: string = "Tarea eliminada";
    public tasksSavedAlert: string = "Tarea guardada";
    public tasksEditedAlert: string = "Tarea editada";



    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('history')!) || [];
    }

    saveOnLocalStorage(value: Tasks []){
        localStorage.setItem('history', JSON.stringify(value));
    }

    saveTasks(value:Tasks){
        this.tasks.push(value);
        this.saveOnLocalStorage(this.tasks);
        alert(this.tasksSavedAlert);
    }

    tasksComplete(value:Tasks){

        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id === value.id){
                value.estatus = 1;
            }
        }

        this.saveOnLocalStorage(this.tasks);
        alert(this.tasksCompleteAlert);
    }

    tasksDelete(value:Tasks){

        // console.log(value)

        for(let i = 0; i < this.tasks.length; i++){

            if(this.tasks[i].id === value.id){

                this.tasks.splice(i,1)
            }
        }
        this.saveOnLocalStorage(this.tasks);
        alert(this.tasksDeletedAlert);
    }

    tasksEdit(value:Tasks, newname:string){

        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id === value.id){
                this.tasks[i].name = newname;
            }
        }

        this.saveOnLocalStorage(this.tasks);
        alert(this.tasksEditedAlert)
    }

    tasksShowDate(value:string):string | undefined{

        let date: string | undefined = "";

        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id === value){

                date = this.tasks[i].date;

            }
        }
        return date;
    }

    deleteLocalstorage(){

        let del = confirm("¿Desea eliminar el historial de tareas?");
        if(!del) return;
        localStorage.clear();
        location.reload();
    }


    tasksFavorite(value:Tasks){
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id === value.id){

                this.tasks[i].favorite = 1;

            }
        }

        this.saveOnLocalStorage(this.tasks);
        alert(this.tasksFavouriteSaveAlert)
    }

    outFavorite(value:Tasks){
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id === value.id){

                this.tasks[i].favorite = 0;
            }
        }
        this.saveOnLocalStorage(this.tasks);
        alert(this.tasksFavouriteOutAlert)

    }

  }
