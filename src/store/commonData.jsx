import { createSlice } from "@reduxjs/toolkit";

const name = "common";

const initialState = {
  error: null,
  information: [],
};

export const { reducer: informationReducer, actions: informationActions } =
  createSlice({
    name,
    initialState,
    reducers: {
      setInformations(state, action) {
        state.information = action.payload;
      },
    },
  });
