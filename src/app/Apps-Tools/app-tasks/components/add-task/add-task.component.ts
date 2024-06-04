import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksListService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private tasksService: TasksListService) {
    this.taskForm = this.fb.group({
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.taskForm.valid) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        const task: Task = {
          id: Date.now().toString(),
          description: this.taskForm.value.description,
          status: 'to do',
          userId: userId // Establecemos la propiedad userId con el valor del userId del usuario actual
        };
        this.tasksService.addTask(userId, task);
        this.taskForm.reset();
      }
    }
  }
}
