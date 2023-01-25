import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import css from './ContactList.module.css';
import { deleteContact } from 'components/redux/api/api';
import { selectVisibleContacts } from 'components/redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(el => {
        return (
          <li key={el.id} className={css.list_item}>
            {el.name}: <span>{el.number}</span>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(el.id));
              }}
              className={css.list_button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
