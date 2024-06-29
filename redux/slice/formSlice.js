import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  company: '한화생명'
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
      if (value.length > 0) {
        delete state.errors[name];
      }
    },
    setError: (state, action) => {
      const { name, message } = action.payload;
      state.errors[name] = message;
    },
    clearError: (state, action) => {
      const { name } = action.payload;
      delete state.errors[name];
    },
    resetForm: () => initialState,
  },
});

export const { updateField, setError, clearError, resetForm } = formSlice.actions;
export default formSlice.reducer;
