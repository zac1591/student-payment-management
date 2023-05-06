import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
//mock data
import MOCK_DATA from "../../MOCK_DATA.json";
import { contacts } from "../../mock_contacts";
import { Contact } from "../../types";

type ContactSliceType = {
  contacts: Contact[]
}

const INITIAL_STATE: ContactSliceType = {
  // contactsNew: contacts,
  contacts: contacts,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload]
      
    },
    editContact(state, action: PayloadAction<Contact>) {
      //comback to check this code and improve it
      const updatedContact = state.contacts.find(contact => contact.id === action.payload.id);
      state.contacts = state.contacts.filter(contact => contact.id !== updatedContact?.id)
      if(updatedContact) 
        state.contacts = [ ...state.contacts, updatedContact]

    },
    removeContact(state, action: PayloadAction<string>) {
      // state.contacts = state.contacts.filter((contact) => contact.id !== +action.payload)
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
     
    }
  }
})


export default contactsSlice.reducer;
export const { addContact, editContact, removeContact } = contactsSlice.actions;
