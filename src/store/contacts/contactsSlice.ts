import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts, addNewContact } from "./thunks-contacts";
//mock data
import { contacts } from "../../mock_contacts";
import { Contact } from "../../types";

type ContactSliceType = {
	contacts: Contact[]
	status: 'idle' | 'loading' | 'success' | 'failed'
	error: string | null | undefined
}

const INITIAL_STATE: ContactSliceType = {
	// contactsNew: contacts,
	contacts: [],
	status: 'idle',
	error: null
};



const contactsSlice = createSlice({
	name: 'contacts',
	initialState: INITIAL_STATE,
	reducers: {
		// addContact(state, action) {
		// 	state.contacts = [...state.contacts, action.payload]

		// },
		editContact(state, action: PayloadAction<Contact>) {
			//come back to check this code and improve it
			const updatedContact = state.contacts.find(contact => contact.id === action.payload.id);
			state.contacts = state.contacts.filter(contact => contact.id !== updatedContact?.id)
			if (updatedContact)
				state.contacts = [...state.contacts, updatedContact]

		},
		removeContact(state, action: PayloadAction<number>) {
			// state.contacts = state.contacts.filter((contact) => contact.id !== +action.payload)
			console.log(action.payload)
			state.contacts = state.contacts.filter(contact => contact.id !== action.payload)

		}
	},
	extraReducers(builder) {
		builder
			.addCase(fetchContacts.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.status = 'success'
				//Add any fetched contacts to the array
				state.contacts = action.payload

			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
			.addCase(addNewContact.fulfilled, (state, action) => {
				console.log(action.payload)
				state.contacts.push(action.payload)
			})
	}
})


export default contactsSlice.reducer;
export const { editContact, removeContact } = contactsSlice.actions;
