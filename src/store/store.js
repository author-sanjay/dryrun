import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import {persistStore,persistReducer} from "redux-persist";
import authreducer from "./authSlice";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key: 'main-root',
    storage
}
const persistedReducer=persistReducer(persistConfig,auth)
const store = configureStore({
    reducer:{
        auth: authreducer,
        
    },
    applyMiddleware

});

const Persistor = persistStore(store);
export {Persistor}

export  {store};