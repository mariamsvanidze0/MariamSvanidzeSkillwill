import { configureStore } from '@reduxjs/toolkit';
import beerReducer from './beerSlice';

export const store = configureStore({
  reducer: {
    beers: beerReducer,
  },
});
