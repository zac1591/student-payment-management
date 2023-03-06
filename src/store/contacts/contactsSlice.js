import { createSlice } from "@reduxjs/toolkit";
//mock data
import MOCK_DATA from "../../MOCK_DATA.json";

const INITIAL_STATE = {
  contacts: MOCK_DATA,
  currentSelectedFlatRows: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addLead(state, action) {
      state.contacts = [...state.contacts, action.payload]
    },
    onSelectFlatRows(state, action) {
      state.currentSelectedFlatRows =  [...action.payload]
    }
  }
})


export default contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
