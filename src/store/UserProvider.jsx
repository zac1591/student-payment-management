import { useState, useEffect } from "react";
import UserContext from "./user-context";
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

function UserProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsuscribe = onAuthStateChangedListener(user => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
		return unsuscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
