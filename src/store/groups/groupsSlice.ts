import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../index';
import MOCK_DATA_GROUPS from '../../MOCK_DATA_GROUPS.json'
import {Group} from '../../types'


type GroupSliceType = {
    groups: Group[]
}


const INITIAL_STATE: GroupSliceType = {
    groups: MOCK_DATA_GROUPS
}

const groupsSlice = createSlice({
    name: 'groups',
    initialState: INITIAL_STATE,
    reducers: {
        addGroup(state, action: PayloadAction<Group>) {
            state.groups = [action.payload, ...state.groups]
        },
        removeGroup() {
            /*group should not be removed if:
                1. outstanding balance is present in one or more students unless admin overrides this setting by providing a password
            */
        }
    }
})

export default groupsSlice.reducer
export const groupsActions = groupsSlice.actions;