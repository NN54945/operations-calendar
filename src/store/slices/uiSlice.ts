import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from '../../types';

const initialState: UIState = {
  sidebarOpen: true,
  selectedEventId: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    selectEvent(state, action: PayloadAction<string | null>) {
      state.selectedEventId = action.payload;
    },
  },
});

export const { toggleSidebar, selectEvent } = uiSlice.actions;

export default uiSlice.reducer;
