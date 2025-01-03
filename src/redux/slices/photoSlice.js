import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPhoto = createAsyncThunk(
  "photo/fetchPhoto",async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
    return response.data;
  }
);

// export const fetchPhoto()

// const response=fetch("https://jsonplaceholder.typicode.com/photos")

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    loading: false,
    error: false,
  },
  reducers:{},
  photoReducers: (builder) => {
    builder
      .addCase(fetchPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhoto.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.loading = false;
      })
      .addCase(fetchPhoto.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default photosSlice.reducer;
