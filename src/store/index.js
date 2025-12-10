import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from './candidatesSlice.js';

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
  },
});
