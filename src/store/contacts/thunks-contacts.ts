import { Contact } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/utils";

const BASE_URL = 'http://localhost:8000/api/v1'
const CRUD = `${BASE_URL}/users`

//this thunk is being use to display students information but is intended to be used in the users component which is not built yet
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
   try {
      const response = await fetch(`${CRUD}/`, {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      });
      const contactsList = await response.json();
      return contactsList as Contact[];

   } catch (err: any) {
      return err.message;
   }
});


export const addNewContact = createAsyncThunk('contacts/addNewContact', async (newContact: Contact) => {
   const dataToSend = {
      first_name: newContact.firstName,
      last_name: newContact.lastName,
      personal_id: newContact.personalId,
      dob: formatDate(newContact.dob),
      gender: newContact.gender,
      phone_number: newContact.phoneNumber,
      email: newContact.email,
      address: newContact.address,
      department: newContact.department,
      country: newContact.country,
      access_level: newContact.accessLevel
   }
   const response = await fetch(`${CRUD}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend)
   });

   const ContactData = await response.json();

   return ContactData as Contact;
});


export const editContact = createAsyncThunk('contacts/editContact', async (contact: Contact) => {
   const updatedContact = {
      first_name: contact.firstName,
      last_name: contact.lastName,
      personal_id: contact.personalId,
      dob: formatDate(contact.dob),
      gender: contact.gender,
      phone_number: contact.phoneNumber,
      email: contact.email,
      address: contact.address,
      department: contact.department,
      country: contact.country,
      access_level: contact.accessLevel
   }
   const response = await fetch(`${CRUD}/${contact.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedContact)
   });

   const data = await response.json();
   console.log(data);
   return data;
})


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id: number) => {
   await fetch(`${CRUD}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id)
   });

   return id;
});
