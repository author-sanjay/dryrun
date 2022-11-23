import { configureStore } from "@reduxjs/toolkit";
import {persistStore,persistReducer} from "redux-persist";
import authreducer from "./authSlice";
import storage from "redux-persist/lib/storage";

// const persistedReducer=persistReducer(persistConfig,authreducer)
const store = configureStore({
    reducer:{
        auth: authreducer,
        
    },
});



export  {store};