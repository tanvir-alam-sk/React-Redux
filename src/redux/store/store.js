import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photosSlice from '../slices/photoSlice'
import likesSlice from '../slices/favoriteSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const likesPersistConfig={
    key:'root',
    storage,
}


const rootReducer=combineReducers({
    likes:likesSlice
})

const persistdReducer=persistReducer(likesPersistConfig,rootReducer)

export const store=configureStore({
    reducer:persistdReducer
    
})

// export const store=configureStore({
//     reducer:{
//         photos:photosSlice,
//         likes:likesSlice
//     }
// })



export const persistor=persistStore(store)