import { configureStore } from '@reduxjs/toolkit';

import { phonebookReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: { 
    phonebook: phonebookReducer,
    filter: filterReducer,
  },
  
});

