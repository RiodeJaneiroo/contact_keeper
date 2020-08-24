import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
      current: null,
   };

   const [state, dispatch] = useReducer(contactReducer, initionState);

   // Add Contact
   const addContact = (contact) => {
      dispatch({ type: ADD_CONTACT, payload: { ...contact, id: uuidv4() } });
   };

   // Delete Contact
   const deleteContact = (id) => {
      dispatch({ type: DELETE_CONTACT, payload: id });
   };

   // Set Current Contact
   const setCurrent = (contact) => {
      dispatch({ type: SET_CURRENT, payload: contact });
   };

   // Clear Current Contact
   const clearCurrent = (contact) => {
      dispatch({ type: CLEAR_CURRENT });
   };

   // Update Contact
   const updateContact = (contact) => {
      dispatch({ type: UPDATE_CONTACT, payload: contact });
   };

   // Filter Contacts

   // Clear Filter

   return (
      <ContactContext.Provider
         value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
         }}
      >
         {props.children}
      </ContactContext.Provider>
   );
};

export default ContactState;
