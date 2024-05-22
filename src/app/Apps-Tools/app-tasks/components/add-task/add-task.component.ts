import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: uuidv4(),
        description: this.taskForm.value.description,
        status: 'to do'
      };
      this.taskService.addTask(newTask);
      this.taskForm.reset();
    }
  }
}
