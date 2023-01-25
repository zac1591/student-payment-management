import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
import Debts from "./pages/Debts/Debts";
import Groups from "./pages/Groups/Groups";

import NothingToSee from "./pages/NothingToSee/NothingToSee";


function App() {
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
				<Route path="/groups" element={<Groups />} />
				<Route path="/debts" element={<Debts />} />
				<Route path="/user-preferences" element={<UserPreferences />} />
				<Route path="*" element={<NothingToSee />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
