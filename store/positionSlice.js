import { createSlice } from '@reduxjs/toolkit';

export const positionSlice = createSlice({
  name: 'position',
  initialState: {
    screenSplits: [
      { id: 1, title: 'horizontal', distances: [] },
      { id: 2, title: 'topVertical', distances: [] },
      { id: 3, title: 'bottomVertical', distances: [] },
    ],
  },
  reducers: {
    onPositionChange: (state, action) => {
      state.screenSplits = state.screenSplits.map((split) => {
        if (split.id === action.payload.splitId) {
          return {
            ...split,
            distances: [...action.payload.positions],
          };
        }
        return split;
      });
    },
  },
});

export const onPositionChange = positionSlice.actions.onPositionChange;
