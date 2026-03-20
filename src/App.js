import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

//components
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import GeneralSettings from "./components/GeneralSettings/GeneralSettings";
import Security from "./components/Security/Security";
//pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Contacts from "./pages/Contacts/Contacts";
import UserPreferences from "./pages/UserPreferences/UserPreferences";
import ContactDetails from "./pages/ContactDetails/ContactDetails";
import Authentication from "./pages/Authentication/Authentication";
import Finances from "./pages/Finances/Finances";
import Groups from "./pages/Groups/Groups";
import NothingToSee from "./pages/NothingToSee/NothingToSee";
import UsersAndGroups from "./pages/UsersAndGroups/UsersAndGroups";
import Courses from "./pages/Courses/Courses";
import Debts from "./pages/Debts/Debts";
import RecurringDebts from "./pages/RecurringDebts/RecurringDebts";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* RUTAS PÚBLICAS (Sin menú lateral) */}
				<Route path="/authentication" element={<Authentication />}>
					<Route path="sign-in" element={<SignIn />} />
					<Route path="sign-up" element={<SignUp />} />
				</Route>

				{/* RUTAS PRIVADAS (Envueltas en el MainLayout) */}
				<Route path="/" element={<MainLayout />}>
					{/* El index es la ruta por defecto al cargar el layout */}
					<Route index element={<Dashboard />} />

					<Route path="contacts" element={<Contacts />} />
					<Route path="contacts/:userId" element={<ContactDetails />} />
					<Route path="groups" element={<Groups />} />
					<Route path="courses" element={<Courses />} />
					<Route path="finances" element={<Finances />} />
					<Route path="debts" element={<Debts />} />
					<Route path="recurring-debts" element={<RecurringDebts />} />

					<Route path="user-preferences" element={<UserPreferences />}>
						<Route path="general-settings" element={<GeneralSettings />} />
						<Route path="security" element={<Security />} />
						<Route path="users-and-groups" element={<UsersAndGroups />} />
					</Route>
				</Route>

				{/* 404 fuera de todo layout o con su propio estilo */}
				<Route path="*" element={<NothingToSee />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
