import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

//components
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
//pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Contacts from "./pages/Contacts/Contacts";
import UserPreferences from "./pages/UserPreferences/UserPreferences";
import ContactDetails from "./pages/ContactDetails/ContactDetails";
import Authentication from "./pages/Authentication/Authentication";

//temporal context
import UserProvider from "./store/UserProvider";
import NothingToSee from "./pages/NothingToSee/NothingToSee";


function App() {

	// useEffect(() => {
	// 	const unsuscribe = onAuthStateChangedListener(user => {
	// 		if (user) {
	// 			createUserDocumentFromAuth(user);
	// 		}
	// 	});
	// }, []);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Dashboard />} />

				<Route path="/authentication" element={<Authentication />}>
					<Route path="sign-in" element={<SignIn />} />
					<Route path="sign-up" element={<SignUp />} />
				</Route>

				<Route path="/contacts" element={<Contacts />} />
				<Route path="/contacts/:userId" element={<ContactDetails />} />
				<Route path="/user-preferences" element={<UserPreferences />} />
				<Route path="*" element={<NothingToSee />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
