import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isOpen: false,
};

const popUpSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    open(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { open } = popUpSlice.actions;
export default popUpSlice.reducer;
