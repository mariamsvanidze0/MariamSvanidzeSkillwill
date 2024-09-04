import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './todosThunks';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.items.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
