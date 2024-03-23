import { configureStore } from '@reduxjs/toolkit';
import walletReducer from '../features/walletSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;