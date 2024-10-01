import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('counter/fetchData', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return response.data;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data: {},
    status: 'idle',
  },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => { state.status = 'loading' })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
