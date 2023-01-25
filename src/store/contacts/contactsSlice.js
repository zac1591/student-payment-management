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
      state.currentSelectedFlatRows =  [action.payload]
    }
  }
})

//thunk, for some reason is not working as it should, Analyze this code later
export const processingSelectedFlatRows = (selectedFlatRow) => {
  return (dispatch) => {
    const selectedRows =  selectedFlatRow.map(row => row.values)
    dispatch(selectedRows)
  }
}

export default contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
