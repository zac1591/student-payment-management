import { createAsyncThunk } from "@reduxjs/toolkit";
import { Group } from "../../types";

//endpoints
const BASE_URL = 'http://localhost:8000/api/v1/';
const GROUP_LIST = `${BASE_URL}group/list/`;
const CRUD = `${BASE_URL}group/`;
//end


//fetch groups 
export const fetchGroups = createAsyncThunk('groups/fetchGroups', async () => {
   try {
      const response = await fetch(`${GROUP_LIST}`, {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' }
      });

      const groupList = await response.json();
      return groupList as Group[];

   } catch (err: any) {
      return err.message;
   }
});


//adding group
export const addNewGroup = createAsyncThunk('groups/addNewGroup', async (newGroup: Group) => {
   const dataToSend = {
      group_name: newGroup.groupName,
      description: newGroup.description,
      schedule: newGroup.schedule,
      professor: newGroup.professor,
      capacity: newGroup.capacity,
      duration: newGroup.duration,
      course: newGroup.course
   }

   const response = await fetch(CRUD, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(dataToSend)
   });

   const groupData = await response.json();
   return groupData as Group;
});


//update group
export const editGroup = createAsyncThunk('groups/editGroup', async (group: Group) => {
   const dataToSend = {
      group_name: group.groupName,
      description: group.description,
      schedule: group.schedule,
      professor: group.professor,
      capacity: group.capacity,
      duration: group.duration,
      course: group.course
   }

   const respose = await fetch(`${CRUD}${group.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(dataToSend)
   });

   const editedGroup = await respose.json();
   return editedGroup;
});

//delete group
export const deleteGroup = createAsyncThunk('groups/deleteGroup', async (id: number) => {
   await fetch(`${CRUD}${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(id)
   });

   return id;
});