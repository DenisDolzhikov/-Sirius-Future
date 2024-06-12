import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  password: string;
}

interface AuthState {
  isLoggedIn: boolean,
  user: User | null,
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: () => initialState,
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
