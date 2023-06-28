import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts, addNewContact, deleteContact, editContact } from "./thunks-contacts";
//mock data
// import { contacts } from "../../mock_contacts";
import { Contact } from "../../types";

type ContactSliceType = {
	contacts: Contact[]
	status: 'idle' | 'loading' | 'success' | 'failed'
	error: string | null | undefined
}

const INITIAL_STATE: ContactSliceType = {
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
		// editContact(state, action: PayloadAction<Contact>) {
		// 	//come back to check this code and improve it
		// 	const updatedContact = state.contacts.find(({ id }) => id === action.payload.id);
		// 	state.contacts = state.contacts.filter(({ id }) => id !== updatedContact?.id)
		// 	if (updatedContact)
		// 		state.contacts = [...state.contacts, updatedContact]

		// },
		// removeContact(state, action: PayloadAction<number>) {
		// 	// state.contacts = state.contacts.filter((contact) => contact.id !== +action.payload)
		// 	console.log(action.payload)
		// 	state.contacts = state.contacts.filter(contact => contact.id !== action.payload)

		// }
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
				state.status = 'success'
				state.contacts.push(action.payload)
			})
			.addCase(editContact.fulfilled, (state, action) => {
				//selecting contact to be edited
				const updatedContact = state.contacts.find(({ id }) => id === action.payload.id);
				//returning new array without the to be edited contact
				state.contacts = state.contacts.filter(({ id }) => id !== updatedContact?.id);
				//appending updated contact
				if (updatedContact)
					state.contacts = [...state.contacts, updatedContact];
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				console.log(action.payload)
				if (!action.payload) {
					console.log('Delete could not complete')
				}
				const updatedContacts = state.contacts.filter(({ id }) => id !== action.payload)
				state.contacts = updatedContacts
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})


export default contactsSlice.reducer;
