import { useState } from "react";

//react router
import { useNavigate } from "react-router-dom";
//components
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import CreateContact from "../../components/CreateContact/CreateContact";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ContactOptions from "../../components/ContactOptions/ContactOptions";

//mock data
import { COLUMNS } from "../../table-columns/CONTACTS_COLUMNS";
//styles
import styles from "./contacts.module.scss";
//redux
import { useAppSelector } from "../../hooks/storeHooks";

function Contacts() {
	const leadsFromState = useAppSelector(state => state.contacts.contacts);
	const [createContact, setCreateContact] = useState(false);
	const [showContactsOption, setShowContactsOption] = useState(false);
	const currentFlatRow = useAppSelector(
		state => state.contacts.currentSelectedFlatRows
	);

	const navigate = useNavigate();

	const showCreateContactHandler = () => setCreateContact(true);
	const hideCreateContactHandler = () => setCreateContact(false);

	const selectContactHandler = () => {
		setShowContactsOption(showContact => !showContact);
	};

	//this code requires debugging and refactoring in order to make it work as intended
	// const viewContactHandler = () => {
	// 	navigate(`/contacts/${currentFlatRow.id}`, { replace: true });
	// 	console.log(currentFlatRow.id);
	// 	console.log("Clicking view button");
	// };

	// const contactsButtonConfig = [
	// 	{ btnName: "Ver", iconLabel: "visibility", onClick: viewContactHandler },
	// 	{ btnName: "Editar", iconLabel: "edit_note" },
	// 	{ btnName: "Borrar", iconlabel: "remove" },
	// ];
	//ends

	return (
		<section className={styles.container}>
			{createContact && (
				<CreateContact onHideCreateContact={hideCreateContactHandler} />
			)}

			<MenuDashboard />
			<main>
				<ActiveMenu
					buttonLabel="Crear Contacto"
					onShowItem={showCreateContactHandler}
					currentPageTitle="Contactos"
				/>
				{showContactsOption && (
					<ContactOptions buttonConfig={() => {console.log('options button')}} />
				)}
				<ItemsTable
					COLUMNS={COLUMNS}
					stateData={leadsFromState}
					navigatesTo="contacts"
					onSelectContact={selectContactHandler}
				/>
			</main>
		</section>
	);
}

export default Contacts;
