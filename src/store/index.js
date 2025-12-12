import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from './candidatesSlice.js';
import profileReducer from './profileSlice.js';

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    profile: profileReducer,
  },
});
