import { useState, useEffect } from "react";
//react router
import { useNavigate } from "react-router-dom";
//components
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import AddEditContact from "../../components/AddEditContact/AddEditContact";
// import ItemsTable from "../../components/ItemsTable/ItemsTable";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ContactOptions from "../../components/ContactOptions/ContactOptions";
import { Jelly } from "@uiball/loaders";

//mock data
import { newColumns } from "../../table-columns/CONTACTS_COLUMNS";
//styles
import styles from "./contacts.module.scss";

//redux
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
// import { removeContact, editContact } from "../../store/contacts/contactsSlice";
import { fetchContacts } from "../../store/contacts/thunks-contacts";
import ContactsTable from "../../components/ContactsTable/ContactsTable";
//types
import { Contact } from "../../types";

function Contacts() {
	const dispatch = useAppDispatch();
	const [createContact, setCreateContact] = useState(false);
	const [showContactsOption, setShowContactsOption] = useState(false);

	const navigate = useNavigate();

	const showCreateContactHandler = () => setCreateContact(true);
	const hideCreateContactHandler = () => setCreateContact(false);
	const selectContactHandler = () =>
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

	const editContactHandler = () => {
		console.log("clicking editing button");
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
			onClick: editContactHandler,
		},
		{ btnName: "Borrar", iconLabel: "remove", onClick: deleteContactHandler },
	];

	/*Ends contact's options button*/

	//testing
	/*useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				"http://localhost:8000/api/usuarios/list/",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			const data = await response.json();
			// console.log(data.data);
			const contactsShapedData = data.data.map((contact: any) => {
				let normalizedData: Contact = {
					id: `00${contact.id}`,
					firstName: contact.attributes.first_name,
					lastName: contact.attributes.last_name,
					personalId: contact.attributes.personal_id,
					phoneNumber: contact.attributes.phone_number,
					email: contact.attributes.email,
					country: contact.attributes.country,
					address: contact.attributes.address,
					department: contact.attributes.department,
					scholarship: contact.attributes.scholarship,
					accessLevel: contact.attributes.access_level,
					assignedMonthlyPayment: "200",
					firstPaymentDate: "2023-5-4",
					lastPaymentDate: "2023-3/24",
				};

				return normalizedData;
			});

			setContactsList(contactsShapedData);
		};

		getData();
	}, []);*/

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
				onSelectContact={() => console.log("onSelectContact Fn prop")}
			/>
		);
	} else if (contactStatus === "failed") {
		loadingTableContent = (
			<span>
				Something went wrong! Please follow up error details: <br />{" "}
				{contactsError}
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
