import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const contacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.btnList}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
