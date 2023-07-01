import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../index';
import { fetchGroups, addNewGroup, editGroup, deleteGroup } from "./thunks-groups";
// import { grupos } from "../../mock";
import { Group } from '../../types'


type GroupSliceType = {
	groups: Record<number, Group>,
	status: 'idle' | 'loading' | 'success' | 'failed',
	error: string | null | undefined
}

const INITIAL_STATE: GroupSliceType = {
	groups: {},
	status: 'idle',
	error: null
}

const groupsSlice = createSlice({
	name: 'groups',
	initialState: INITIAL_STATE,
	reducers: {
		/*addGroup(state, action: PayloadAction<Group>) {
			state.groups = { ...state.groups, [action.payload.id]: action.payload }
		},*/
		/*submitEditedData(state, action: PayloadAction<Group>) {
			console.log(action.payload)
			//Identify the right object to PUT new data into the existing object
			state.groups = { ...state.groups, [action.payload.id]: action.payload }
		},*/
		/*removeGroup(state, action: PayloadAction<number>) {
			//group should not be removed if:
				 //1. outstanding balance is present in one or more students unless admin overrides this setting by providing a password
			
			const id = state.groups[action.payload].id;
			delete (state.groups[id])
		}*/
	},
	extraReducers(builder) {
		builder
			.addCase(fetchGroups.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchGroups.fulfilled, (state, action) => {
				state.status = 'success';
				const groupCollection = [...action.payload].reduce((collection, currentGroup) => {
					collection[currentGroup.id] = currentGroup;
					return collection;
				}, {} as Record<number, Group>);
				state.groups = groupCollection;
			})
			.addCase(fetchGroups.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(addNewGroup.fulfilled, (state, action) => {
				state.status = 'success';
				state.groups = { ...state.groups, [action.payload.id]: action.payload }
			})
			.addCase(addNewGroup.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(editGroup.fulfilled, (state, action) => {
				state.status = 'success';
				state.groups = { ...state.groups, [action.payload.id]: action.payload }
			})
			.addCase(editGroup.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(deleteGroup.fulfilled, (state, action) => {
				const id = state.groups[action.payload].id;
				delete state.groups[id];
			})
			.addCase(deleteGroup.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
	},
})

export default groupsSlice.reducer
// export const { addGroup, removeGroup, submitEditedData } = groupsSlice.actions;