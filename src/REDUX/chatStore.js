import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";

const chatStore = configureStore({
    reducer:{
        chatReducer : chatSlice
    }
})

export default chatStore