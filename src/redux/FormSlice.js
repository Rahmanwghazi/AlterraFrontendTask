import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  fullName: "",
  email: "",
  phoneNumber: "",
  nationality: "",
  message: "",
};

const formSlice = createSlice({
  name: "form",
  initialState: {
    form: initValue,
  },
  reducers: {
    addForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { addForm } = formSlice.actions;
export default formSlice;