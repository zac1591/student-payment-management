import { useState, useEffect } from "react";
//components
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import AddEditContact from "../../components/AddEditContact/AddEditContact";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ContactOptions from "../../components/ContactOptions/ContactOptions";
import ContactsTable from "../../components/ContactsTable/ContactsTable";
import { Jelly } from "@uiball/loaders";

//mock data
import { newColumns } from "../../table-columns/CONTACTS_COLUMNS";
//styles
import styles from "./contacts.module.scss";

//redux
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { fetchContacts } from "../../store/contacts/thunks-contacts";
//types
import { Contact } from "../../types";

function Contacts() {
	const dispatch = useAppDispatch();
	const [createContact, setCreateContact] = useState(false);
	const [showContactsOption, setShowContactsOption] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [idContactToEdit, setIdContactToEdit] = useState<number | undefined>(
		undefined
	);

	const showCreateContactHandler = () => setCreateContact(true);
	const hideCreateContactHandler = () => setCreateContact(false);
	const showContactsOptionHandler = () =>
		setShowContactsOption(showContact => !showContact);

	const contactStatus = useAppSelector(state => state.contacts.status);
	const contactsFromRedux = useAppSelector(state => state.contacts.contacts);
	const contactsError = useAppSelector(state => state.contacts.error);
	//table
	// const columns = useMemo(() => newColumns, []);

	// const clickedContactHandler = (rowContact: Row<Contact>) => {
	// 	const headerData = rowContact._getAllCellsByColumnId();
	// 	navigate(`/contacts/${rowContact.original.id}`, { replace: true });
	// };

	//this code requires debugging and refactoring in order to make it work as intended

	const viewContactHandler = () => {
		// if(selectedFlatRows.length == 1) {
		// 	console.log(selectedFlatRows)
		// 	const idRow = selectedFlatRows[0].values.id;
		// 	navigate(`/contacts/${idRow}`, { replace: true });
		// }
		console.log("Viewwing contact");
	};

	// const getCellData = cell => {
	// 	const cellData = cell.row.values;
	// 	console.log(cellData);
	// 	setCellData(cellData);
	// };

	const editContactHandler = (id: number) => {
		console.log(`${id} being read from contacts component`);
		setIdContactToEdit(id);
		setShowEditModal(true);
	};

	const deleteContactHandler = () => {
		// const idRow = selectedFlatRows[0].values.id;
		// dispatch(removeContact(idRow))
		console.log("Deleting contact");
	};

	/*Bigin contact's options button*/

	type ButtonConfigTypes = {
		btnName: string;
		iconLabel: string;
		onClick: () => void;
	};

	let contactsButtonConfig: ButtonConfigTypes[] = [];
	contactsButtonConfig = [
		{ btnName: "Ver", iconLabel: "visibility", onClick: viewContactHandler },
		{
			btnName: "Editar",
			iconLabel: "edit_note",
			onClick: () => {},
		},
		{ btnName: "Borrar", iconLabel: "remove", onClick: deleteContactHandler },
	];

	/*Ends contact's options button*/

	useEffect(() => {
		if (contactStatus === "idle") {
			dispatch(fetchContacts());
		}
	}, [contactStatus, dispatch]);

	let loadingTableContent;

	if (contactStatus === "loading") {
		loadingTableContent = (
			<div
				style={{
					margin: "0 auto",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "40vh",
				}}
			>
				<p style={{ marginBottom: "1rem", color: "#7380ec" }}>
					Cargando tus contactos...
				</p>
				<Jelly size={35} speed={0.9} color="#7380ec" />
			</div>
		);
	} else if (contactStatus === "success") {
		loadingTableContent = (
			<ContactsTable
				columns={newColumns}
				stateData={contactsFromRedux}
				navigatesTo="contacts"
				onSelectContactToEdit={editContactHandler}
			/>
		);
	} else if (contactStatus === "failed") {
		loadingTableContent = (
			<span>
				Oops!! Esto no estaba previsto. Verifica el mensaje de error y
				vuelve a intentarloz: <br /> {contactsError}
			</span>
		);
	}

	return (
		<section className={styles.container}>
			{createContact && (
				<AddEditContact
					onHideCreateContact={hideCreateContactHandler}
					editMode={false}
				/>
			)}

			{showEditModal && (
				<AddEditContact
					onHideCreateContact={hideCreateContactHandler}
					editMode={true}
					contactId={idContactToEdit}
				/>
			)}

			<MenuDashboard />
			<main>
				<ActiveMenu
					buttonLabel="Crear Contacto"
					onShowItem={showCreateContactHandler}
					currentPageTitle="Contactos"
				/>
				{showContactsOption && (
					<ContactOptions buttonConfig={contactsButtonConfig} />
				)}
				{/* <ItemsTable
					COLUMNS={COLUMNS}
					stateData={leadsFromState}
					navigatesTo="contacts"
					onSelectCheckboxContact={selectContactHandler}
					onSelectedRow={selectedRowHandler}
				/> */}

				{loadingTableContent}
			</main>
		</section>
	);
}

export default Contacts;
