import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashLoader } from 'react-spinners';

import { ContactsList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './Container/Container.module.css';

import { fetchContacts } from './redux/api/api';
import { getIsLoading, getError } from './redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      {(isLoading && !error && (
        <>
          <br />
          <HashLoader color="#36d7b7" size={201} />
        </>
      )) || <ContactsList />}
    </div>
  );
};
