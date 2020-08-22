import React, { useRedcer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
   ADD_CONTACT,
   DELETE_CONTACT,
   SET_CURRENT,
   CLEAR_CURRENT,
   UPDATE_CONTACT,
   FILTER_CONTACTS,
   CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
   const initionState = {
      contacts: [
         {
            type: 'personal',
            id: 1,
            name: 'Melissa Will',
            email: 'melisa@gmail.com',
            phone: '000-000-00',
         },
         {
            type: 'personal',
            id: 2,
            name: 'Sara Smith',
            email: 'sss@gmail.com',
            phone: '111-1222-333',
         },
         {
            type: 'personal',
            id: 3,
            name: 'Sara Smith',
            email: 'sss@gmail.com',
            phone: '111-1222-333',
         },
         {
            type: 'professional',
            id: 4,
            name: 'Sara Smith',
            email: 'sss@gmail.com',
            phone: '111-1222-333',
         },
      ],
   };

   const [state, dispatch] = useRedcer(contactReducer, initionState);

   // Add Contact
   // Delete Contact
   // Set Current Contact
   // Clear Current Contact
   // Update Contact
   // Filter Contacts
   // Clear Filter

   return (
      <ContactContext.Provider
         value={{
            contacts: state.contacts,
         }}
      >
         {props.children}
      </ContactContext.Provider>
   );
};

export default ContactState;
