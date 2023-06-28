import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from './contacts/contactsSlice';
import groupsReducer from './groups/groupsSlice';
import courseReducer from './courses/coursesSlice'

const middlewares = [logger]

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        groups: groupsReducer,
        courses: courseReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares)
})

//following example found in docs
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store