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
        state=state.filter((postId)=>postId!=action.payload)
    }
  },

});

export const{likePost,disLikePost}=favoriteSlice.actions
export default favoriteSlice.reducer;
