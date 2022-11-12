import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./authSlice"
const store= configureStore({
    reducer:{
        auth: authreducer,
    }
})

export default store