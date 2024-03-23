import { configureStore } from '@reduxjs/toolkit';
import walletReducer from '../features/walletSlice';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export default store;
