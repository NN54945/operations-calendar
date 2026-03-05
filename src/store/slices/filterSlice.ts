import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState, EventType, EventStatus } from '../../types';

const initialState: FilterState = {
  types: [],
  statuses: [],
  owners: [],
  searchText: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleType(state, action: PayloadAction<EventType>) {
      const idx = state.types.indexOf(action.payload);
      if (idx >= 0) {
        state.types.splice(idx, 1);
      } else {
        state.types.push(action.payload);
      }
    },
    toggleStatus(state, action: PayloadAction<EventStatus>) {
      const idx = state.statuses.indexOf(action.payload);
      if (idx >= 0) {
        state.statuses.splice(idx, 1);
      } else {
        state.statuses.push(action.payload);
      }
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { toggleType, toggleStatus, setSearchText, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
