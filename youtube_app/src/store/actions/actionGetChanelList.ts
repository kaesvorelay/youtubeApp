import { createAction } from "@reduxjs/toolkit";

export const getValue = createAction("getValueText", (val: string) => {
  return {
    payload: val,
  };
});
