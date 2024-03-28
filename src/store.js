import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./slice/toggleSlice";
import searchReducer from "./slice/searchSlice";
import chatReducer from "./slice/chatSlice";

const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        search: searchReducer,
        chat: chatReducer
    }
});

export default store;