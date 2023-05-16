import React from 'react';
import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './Filter/FilterContact';
import {Loader} from './Loader/Loader';
import { Section } from './Section/Section';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <FormContact />
      </Section>
      {isLoading && !error && <Loader />} 
      {contacts.length > 0 && (
        <Section title="Contacts">
          <FilterContact />
          <ContactList />
         
        </Section>
      )}
    </div>
  );
};

// return (
//   <div className={css.container}>
//     <Section title="Phonebook">
//       <FormContact  />
//     </Section>
//     {contacts.length > 0 &&
//     <Section title="Contacts">
//       <FilterContact  />
//         <ContactList />
//         {isLoading && !error && <b>Request in progress...</b>}
//     </Section>
//     }
//   </div>
// );