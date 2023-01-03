import { createSlice } from "@reduxjs/toolkit";

import { readEmployeesFromStorage, updateEmployeesStorage } from "../utils/employeeLocalStorage";

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: readEmployeesFromStorage(),
    reducers: {
        create: (state, action) => {
            const newEmployee = action.payload
            
            updateEmployeesStorage([...state, newEmployee])
            
            console.log([...state, newEmployee])

            return [...state, newEmployee]
        }
    },
});
  
export const { create, read } = employeeSlice.actions;

export default employeeSlice.reducer;