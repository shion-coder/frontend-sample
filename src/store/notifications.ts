import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ReturnGetNotificationsProps, Errors } from 'types';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

/**
 * Handle async with thunk
 */

export const fetchNotifications = createAsyncThunk('notification/fetch', async () => {
  try {
    const endpoint = '/notifications/0';
    const { data } = await http.get<ReturnGetNotificationsProps>(endpoint);

    return data;
  } catch (error) {
    const exception: AxiosError<Errors> = error;

    if (!exception.response) {
      throw exception;
    }
  }
});

/**
 * Initial State type and values
 */

const initialState: ReturnGetNotificationsProps = {
  notifications: [],
  unread: 0,
  next: 0,
};

/**
 * Auth slice
 */

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, { payload }) => {
      if (payload) {
        state.notifications.unshift(payload);
        state.unread = state.unread + 1;
        state.next = state.next + 1;
      }
    },
    clearNotification: (state) => {
      state.notifications = [];
      state.unread = 0;
    },
    readNotification: (state) => {
      state.unread = 0;
    },
    clearUnreadNotification: (state) => {
      state.notifications.map((notification) => (notification.read = true));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, { payload }) => {
      if (payload) {
        state.notifications = payload.notifications;
        state.unread = payload.unread;
        state.next = payload.next;
      }
    });
  },
});

export const {
  addNotification,
  clearNotification,
  readNotification,
  clearUnreadNotification,
} = notificationSlice.actions;

export const notificationsReducer = notificationSlice.reducer;