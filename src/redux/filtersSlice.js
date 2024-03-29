import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.trim();
    },
  },
});

export const { changeFilter } = slice.actions;
export const selectNameFilter = state => state.filters.name;
export default slice.reducer;
