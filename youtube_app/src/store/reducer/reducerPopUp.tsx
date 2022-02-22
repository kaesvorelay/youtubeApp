import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isOpen: false,
};

const popUpSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = popUpSlice.actions;
export default popUpSlice.reducer;
