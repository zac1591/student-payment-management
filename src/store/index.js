import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from './contacts/contactsSlice'
import groupsReducer from './groups/groupsSlice'

const middlewares = [logger]

const store = configureStore({
    reducer: { contacts: contactsReducer, groups: groupsReducer },
    middleware: middlewares
})

export default store