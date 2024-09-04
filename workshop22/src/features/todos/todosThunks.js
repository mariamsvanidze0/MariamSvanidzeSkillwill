import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('/api/todos');
  const data = await response.json();
  return data;
});
