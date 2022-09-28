import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    addContacts(state, { payload }) {
      state.items = [...state.items, payload];
    },
    removeContacts(state, { payload }) {
      state.items = state.items.filter(el => el.id !== payload);
    },
  },
});

export const { setFilter, addContacts, removeContacts } =
  myContactsSlice.actions;

export default myContactsSlice.reducer;
