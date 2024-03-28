import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "ToggleSlice",
    initialState: {
        toggleSideNave: true,
        showSuggestion: false
    },
    reducers: {
        toggle: (state) => {
            state.toggleSideNave = !state.toggleSideNave;
        },
        toggleHide: (state) => {
            state.toggleSideNave = false;
        },
        toggleShow: (state) => {
            state.toggleSideNave = true;
        },
        suggestionShow: (state) => {
            state.showSuggestion = true
        },
        suggestionHide: (state) => {
            state.showSuggestion = false
        }
    }
})

export const { toggle, toggleHide, suggestionHide, suggestionShow, toggleShow } = toggleSlice.actions;
export default toggleSlice.reducer;