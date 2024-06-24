import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store/Store";
import axios from "axios";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.isError = false;
    },
    questionsSuccess(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = action.payload;
    },
    hasError(state, action) {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.data = action.payload;
    },
    resetReducer(state) {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.data = [];
    },
  },
});

export function fetchedData(difficulty) {
  return async () => {
    dispatch(questionsSlice.actions.startLoading());
    try {
      let url;
      switch (difficulty) {
        case "Medium":
          url = "mediumData.json";
          break;
        case "Hard":
          url = "hardData.json";
          break;
        default:
          url = "easyData.json";
      }
      const response = await axios.get(url);
      dispatch(questionsSlice.actions.questionsSuccess(response.data));
    } catch (e) {
      dispatch(questionsSlice.actions.hasError(e));
    }
  };
}

export const { startLoading, hasError, questionsSuccess, resetReducer } =
  questionsSlice.actions;

export default questionsSlice.reducer;
