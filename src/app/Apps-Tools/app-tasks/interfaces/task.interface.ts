// src/app/Apps-Tools/app-tasks/interfaces/task.interface.ts
export interface Task {
  id: string;
  description: string;
  status: TaskStatus;
}

export type TaskStatus = 'to do' | 'in progress' | 'done';
