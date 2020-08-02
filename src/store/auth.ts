import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { RegisterDataProps, LoginDataProps, AuthResultProps, AuthErrors } from 'types';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

/**
 * Handle async with thunk
 */

export const register = createAsyncThunk('auth/register', async (user: RegisterDataProps, { rejectWithValue }) => {
  try {
    const endpoint = '/auth/register';
    const { data } = await http.post<AuthResultProps>(endpoint, user);

    return data;
  } catch (error) {
    const exception: AxiosError<AuthErrors> = error;

    if (exception.response && exception.response.status === 400) {
      return rejectWithValue(exception.response.data.errors);
    }

    return rejectWithValue(null);
  }
});

export const login = createAsyncThunk('auth/login', async (user: LoginDataProps, { rejectWithValue }) => {
  try {
    const endpoint = '/auth/login';
    const { data } = await http.post<AuthResultProps>(endpoint, user);

    return data;
  } catch (error) {
    const exception: AxiosError<AuthErrors> = error;

    if (exception.response && exception.response.status === 400) {
      return rejectWithValue(exception.response.data.errors);
    }
  }
});

/**
 * Initial State type and values
 */

type StateProps = {
  user: Record<string, unknown>;
  token: string | null;
};

const initialState: StateProps = {
  user: {},
  token: null,
};

/**
 * Auth slice
 */

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, { payload }) => {
      if (payload) {
        state.user = payload.user;
        state.token = payload.token;
      }
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload) {
        state.user = payload.user;
        state.token = payload.token;
      }
    });
  },
});

export const authReducer = authSlice.reducer;