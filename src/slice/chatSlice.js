import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const chatSlice = createSlice({
    name: "Message",
    initialState: {
        message: []
    },
    reducers: {
        addMessage: (state, action) => {
            // if(state.message.length === LIVE_CHAT_COUNT){
            //     state.message.shift();
            // }
            state.message.splice(LIVE_CHAT_COUNT, 1);
            state.message.unshift(action.payload);
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;