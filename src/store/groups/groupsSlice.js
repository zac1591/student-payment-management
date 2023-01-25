import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA_GROUPS from '../../MOCK_DATA_COURSES.json'

const INITIAL_STATE = {
    groups: MOCK_DATA_GROUPS
}

const groupsSlice = createSlice({
    name: 'groups',
    initialState: INITIAL_STATE,
    reducers: {
        addGroup() {},
        removeGroup() {}
    }
})

export default groupsSlice.reducer