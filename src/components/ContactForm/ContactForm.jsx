import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from 'components/redux/api/api';
import { selectContacts } from 'components/redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const onSubmitForm = event => {
    event.preventDefault();

    const isInContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContact) {
      alert(`${name} has already exists`);
      return;
    }

    dispatch(
      addContact({
        name: name.trim(),
        number: number,
        id: nanoid(10),
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <div className={css.form}>
      <form onSubmit={onSubmitForm}>
        <h2>Phonebook</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, A"
            value={name}
            required
            onChange={onInputChange}
            className={css.input}
          />
        </label>
        <label>
          Telephone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
