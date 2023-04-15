import { configureStore } from '@reduxjs/toolkit';
import { positionSlice } from './positionSlice';
import { topLeftTableSlice } from './topLeftTableSlice';
import { bottomLeftTableSlice } from './bottomLeftTable';

const store = configureStore({
  reducer: {
    position: positionSlice.reducer,
    topLeftTable: topLeftTableSlice.reducer,
    bottomLeftTable: bottomLeftTableSlice.reducer,
  },
});

export default store;
