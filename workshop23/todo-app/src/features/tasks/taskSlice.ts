import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../types';

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    editTask: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.name = action.payload.name;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion, editTask } = taskSlice.actions;
export default taskSlice.reducer;
