import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default filter;
