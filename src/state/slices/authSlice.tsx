import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../../service/authService';

const initialState: any = {
  initializing: true,
  user: undefined,
  errorMessage: undefined,
  editProfileModalState: {
    open: false,
    data: undefined,
  },
};

export const login = createAsyncThunk('auth/login', async (payload: { email: string; password: string }, thunkAPI) => {
  const loginResult = await authService.login(payload.email, payload.password);
  if (loginResult.success || loginResult.data) return loginResult.data;
  return thunkAPI.rejectWithValue(loginResult.error);
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  const res = await authService.logout();
  if (!res.success) rejectWithValue(res.error);
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState: (state, action) => {
      const { user, initializing } = action.payload;
      state.user = user;
      state.initializing = initializing;
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.initializing = true;
        state.errorMessage = undefined;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.initializing = false;
        state.user = action.payload;
        state.errorMessage = undefined;
      })
      .addCase(login.rejected, (state, action) => {
        state.initializing = false;
        state.errorMessage = action.payload as string;
      });
    builder
      .addCase(logout.pending, (state) => {
        state.initializing = true;
        state.errorMessage = undefined;
      })
      .addCase(logout.fulfilled, (state) => {
        state.initializing = false;
        state.user = undefined;
        state.errorMessage = undefined;
      })
      .addCase(logout.rejected, (state, action) => {
        state.initializing = false;
        state.errorMessage = action.payload as string;
      });
  },
});

export const { updateAuthState } = authSlice.actions;

export default authSlice.reducer;