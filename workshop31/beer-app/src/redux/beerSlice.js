import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBeers = createAsyncThunk('beers/fetchBeers', async () => {
  const requests = Array(10)
    .fill()
    .map(() => axios.get('https://api.punkapi.com/v2/beers/random'));
    
  const responses = await Promise.all(requests);
  return responses.map((response) => response.data[0]);  // Each response contains an array with one beer
});

const beerSlice = createSlice({
  name: 'beers',
  initialState: {
    beers: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBeers.fulfilled, (state, action) => {
        state.beers = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchBeers.rejected, (state, action) => {
        console.error('Error fetching beers:', action.error.message);  // Log the error
        state.status = 'failed';
      });
  },
});

export default beerSlice.reducer;
