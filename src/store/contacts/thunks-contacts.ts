import { Contact } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/utils";


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
   try {
      const response = await fetch('http://localhost:8000/api/usuarios/list/', {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      })
      const contactsList = await response.json()
      return contactsList as Contact[]

   } catch (err: any) {
      return err.message
   }
});


export const addNewContact = createAsyncThunk('contacts/addNewContact', async (newContact: Contact) => {
   const dataToSend = {
      first_name: newContact.firstName,
      last_name: newContact.lastName,
      personal_id: newContact.personalId,
      dob: formatDate(newContact.DOB),
      gender: newContact.gender,
      scholarship: newContact.scholarship,
      phone_number: newContact.phoneNumber,
      email: newContact.email,
      address: newContact.address,
      department: newContact.department,
      country: newContact.country,
      access_level: newContact.accessLevel
   }
   const response = await fetch('http://localhost:8000/api/usuarios/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend)
   })

   const ContactData = await response.json()

   return ContactData
})