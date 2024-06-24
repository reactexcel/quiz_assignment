import { combineReducers } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";

const rootReducer = combineReducers({
  questionsSlice: questionsSlice,
});

export default rootReducer;
