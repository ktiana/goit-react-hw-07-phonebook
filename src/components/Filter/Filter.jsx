import { useDispatch } from 'react-redux';

import css from './Filter.module.css';

import { filterContact } from 'components/redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={event => {
          dispatch(filterContact(event.target.value));
        }}
        placeholder="Search contacts"
      />
    </div>
  );
};
