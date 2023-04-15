import { createSlice } from '@reduxjs/toolkit';

export const bottomLeftTableSlice = createSlice({
  name: 'topLeftTable',
  initialState: {
    tableData: [],
    addDataToggle: false,
  },
  reducers: {
    toggleAddForm(state, _action) {
      state.addDataToggle = !state.addDataToggle;
    },
    onSubmitForm(state, action) {
      state.tableData = [...state.tableData, { ...action.payload }];
    },
  },
});

export const { toggleAddForm, onSubmitForm } = bottomLeftTableSlice.actions;
