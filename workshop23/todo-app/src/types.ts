export interface Task {
    id: string;
    name: string;
    isCompleted: boolean;
  }
  
  export interface TaskState {
    tasks: Task[];
  }
  