import {
   ADD_CONTACT,
   DELETE_CONTACT,
   SET_CURRENT,
   CLEAR_CURRENT,
   UPDATE_CONTACT,
   FILTER_CONTACTS,
   CLEAR_FILTER,
} from '../types';

export default (state, action) => {
   switch (action.type) {
      case ADD_CONTACT:
         return {
            ...state,
            contacts: [...state.contacts, action.payload],
         };
      case DELETE_CONTACT:
         const idx = state.contacts.findIndex((c) => c.id === action.payload);
         return {
            ...state,
            contacts: [
               ...state.contacts.slice(0, idx),
               ...state.contacts.slice(idx + 1),
            ],
         };
      case SET_CURRENT:
         return {
            ...state,
            current: action.payload,
         };
      case CLEAR_CURRENT:
         return {
            ...state,
            current: null,
         };
      default:
         return state;
   }
};
