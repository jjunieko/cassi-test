

import { configureStore } from '@reduxjs/toolkit';
import nipReducer from '@/redux/nipSlice';

export const store = configureStore({
  reducer: {
    nip: nipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

