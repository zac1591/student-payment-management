import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'http://localhost:8000/api/v1/';

export const fetchGroups = createAsyncThunk('groups/fetchGroups', async () => {
   try {
      const response = await fetch(`${BASE_URL}group/list/`, {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      });

      const groupList = await response.json();
      return groupList;

   } catch (err: any) {
      return err.message;
   }
});