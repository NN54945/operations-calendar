import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarState } from '../../types';
import { OperationEvent } from '../../types';

const now = new Date();

const initialState: CalendarState = {
  events: [],
  loading: false,
  error: null,
  viewYear: now.getFullYear(),
  viewMonth: now.getMonth(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<OperationEvent[]>) {
      state.events = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    prevMonth(state) {
      if (state.viewMonth === 0) {
        state.viewMonth = 11;
        state.viewYear -= 1;
      } else {
        state.viewMonth -= 1;
      }
    },
    nextMonth(state) {
      if (state.viewMonth === 11) {
        state.viewMonth = 0;
        state.viewYear += 1;
      } else {
        state.viewMonth += 1;
      }
    },
    goToToday(state) {
      const today = new Date();
      state.viewYear = today.getFullYear();
      state.viewMonth = today.getMonth();
    },
  },
});

export const { setEvents, setLoading, setError, prevMonth, nextMonth, goToToday } =
  calendarSlice.actions;

export default calendarSlice.reducer;
