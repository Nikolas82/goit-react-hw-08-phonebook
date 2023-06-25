import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/contactForm/ContactForm';

import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';

import { selectIsLoading, selectError } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: '40px',
        marginBottom: '40px',
      }}
    >
      <h1
        style={{
          fontSize: 25,
          fontWeight: 500,
          marginTop: '10px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2
        style={{
          fontSize: 30,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
