export interface Tasks {
  id: string;
  name: string;
  description: string;
  status: 'todo' | 'inprogress' | 'done';
  date: string;
}
