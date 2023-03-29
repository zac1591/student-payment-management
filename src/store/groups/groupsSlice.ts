import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../index';
// import MOCK_DATA_GROUPS from '../../MOCK_DATA_GROUPS.json'
import { grupos } from "../../mock";
import {Group} from '../../types'


type GroupSliceType = {
    groups: Group[]
}

const INITIAL_STATE: GroupSliceType = {
    groups: grupos
}

const groupsSlice = createSlice({
    name: 'groups',
    initialState: INITIAL_STATE,
    reducers: {
        addGroup(state, action: PayloadAction<Group>) {
            state.groups = [action.payload, ...state.groups]
        },
        editGroup(state, action: PayloadAction<Group>) {
            const id = state.groups.findIndex(item => action.payload.id === item.id)
            console.log(id)
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