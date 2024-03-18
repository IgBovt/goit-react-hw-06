import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: value => {
        return {
          payload: {
            id: Date.now(),
            ...value,
          },
        };
      },
    },
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
