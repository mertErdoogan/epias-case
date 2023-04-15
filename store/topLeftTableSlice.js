import { createSlice } from '@reduxjs/toolkit';

export const topLeftTableSlice = createSlice({
  name: 'topLeftTable',
  initialState: {
    tableData: [],
    addModal: false,
    filteredKontrat: [],
    tHeads: ['id', 'kontrat', 'teklif', 'data'],
    filteredTheads: [],
    tHeadTolkit: false,
  },
  reducers: {
    toggleAddModal(state, _action) {
      state.addModal = !state.addModal;
    },
    addData(state, action) {
      const nextId = state.tableData.length
        ? state.tableData?.reduce((accumulator, current) => {
            return accumulator.id > current.id ? accumulator : current;
          })?.id + 1
        : 1;
      state.tableData = [...state.tableData, { ...action.payload, id: nextId }];
    },
    filterData(state, action) {
      state.filteredKontrat = state.tableData.filter(
        ({ kontrat }) => kontrat === Number(action.payload)
      );
    },
    filterTheads(state, action) {
      if (!action.payload.status) {
        state.filteredTheads = state.filteredTheads.filter(
          (item) => item !== action.payload.item
        );
      } else {
        state.filteredTheads = !state.filteredTheads.includes(
          action.payload.item
        ) && [...state.filteredTheads, action.payload.item];
      }
      console.log(state.filteredTheads);
    },
    toggleTolkit(state, _action) {
      state.tHeadTolkit = !state.tHeadTolkit;
    },
  },
});

export const {
  toggleAddModal,
  addData,
  filterData,
  filterTheads,
  toggleTolkit,
} = topLeftTableSlice.actions;
