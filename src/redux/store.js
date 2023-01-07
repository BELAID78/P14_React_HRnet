import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from './employeeSlice';
import sideBarReducer from "./sideBarSlice";

export default configureStore({
	reducer: {
		employees: employeeReducer,
		sidebar: sideBarReducer
	},
});