import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
import themeReducer from './features/theme/themeSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer,
  },
});

export default store;
