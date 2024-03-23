import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connected: false, // Whether the wallet is connected or not
  accounts: [], // Array of connected wallet accounts
  error: null, // Error message, if any
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    connectWalletSuccess(state, action) {
      state.connected = true;
      state.accounts = action.payload;
      state.error = null;
    },
    connectWalletFailure(state, action) {
      state.connected = false;
      state.accounts = [];
      state.error = action.payload;
    },
    disconnectWallet(state) {
      state.connected = false;
      state.accounts = [];
      state.error = null;
    },
  },
});

export const { connectWalletSuccess, connectWalletFailure, disconnectWallet } = walletSlice.actions;

export default walletSlice.reducer;
