import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../index';
import { grupos } from "../../mock";
import {Group} from '../../types'


type GroupSliceType = {
    groups: Record<string, Group>, 
}

const INITIAL_STATE: GroupSliceType = {
    groups: grupos,
}

const groupsSlice = createSlice({
    name: 'groups',
    initialState: INITIAL_STATE,
    reducers: {
        addGroup(state, action: PayloadAction<Group>) {
            state.groups = { ...state.groups, [action.payload.id]: action.payload }
        },
        submitEditedData(state, action: PayloadAction<Group>) {
            console.log(action.payload)
            //Identify the right object to PUT new data into the existing object
            state.groups = { ...state.groups, [action.payload.id]: action.payload }
        },
        removeGroup(state, action: PayloadAction<string>) {
            /*group should not be removed if:
                1. outstanding balance is present in one or more students unless admin overrides this setting by providing a password
            */
            const id = state.groups[action.payload].id;
            delete(state.groups[id])
        }
    }
})

export default groupsSlice.reducer
export const { addGroup, removeGroup, submitEditedData } = groupsSlice.actions;