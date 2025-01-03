import {  createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
  name: "likes",
  initialState: [],
  reducers:{
    likePost:(state,action)=>{
        if(!state.includes(action.payload)){
            state.push(action.payload)
        }
    },
    disLikePost:(state,action)=>{
      const restPost=state.filter((post)=>post!=action.payload)
      state=restPost
    }
  },

});

export const{likePost,disLikePost}=favoriteSlice.actions
export default favoriteSlice.reducer;
