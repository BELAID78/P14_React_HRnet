import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        show: true
    },
    reducers: {
        toggleSideBar: (state, action) => {
            return { ...state, show: action.payload }
        }
    },
});
  
export const { toggleSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;