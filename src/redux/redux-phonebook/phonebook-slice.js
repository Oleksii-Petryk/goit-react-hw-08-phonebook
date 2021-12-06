import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  getContacts,
} from './phonebook-operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    isDeleting: false,
  },
  extraReducers: {
    [getContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },

    [addContacts.pending](state, action) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },

    [deleteContacts.pending](state, action) {
      state.isDeleting = true;
    },
    [deleteContacts.fulfilled]: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(({ id }) => id !== action.payload),
      isDeleting: false,
    }),
  },
});

export default contactSlice.reducer;
