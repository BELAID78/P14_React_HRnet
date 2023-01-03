import { createSlice } from "@reduxjs/toolkit";

import { readEmployeesFromStorage, updateEmployeesStorage } from "../utils/employeeLocalStorage";

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: [],
    reducers: {
        read: () => {
            return [readEmployeesFromStorage()]
        },
        create: (state, action) => {
            const newEmployee = action.payload
            
            updateEmployeesStorage([...state, newEmployee])
            
            return [...state, newEmployee]
        }
    },
});
  
export const { create, read } = employeeSlice.actions;

export default employeeSlice.reducer;