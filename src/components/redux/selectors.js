import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const filterContacts = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, filterContacts],
  (contacts, filter) => {
    if (!contacts) return;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
