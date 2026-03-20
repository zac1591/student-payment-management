import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//components
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import AddEditContact from "../../components/AddEditContact/AddEditContact";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import Table from "../../components/Table/Table";
import { Jelly } from "@uiball/loaders";
//table columns
import { newColumns } from "../../table-columns/CONTACTS_COLUMNS";
//styles
import styles from "./contacts.module.scss";
//redux
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import {
	fetchContacts,
	deleteContact,
} from "../../store/contacts/thunks-contacts";
//types
import { Contact } from "../../types";

function Contacts() {
	const dispatch = useAppDispatch();
	const [showAddContactModal, setShowAddContactModal] = useState(false);
	const [showEditContactModal, setShowEditContactModal] = useState(false);
	const [idContactToEdit, setIdContactToEdit] = useState<number | undefined>(
		undefined,
	);

	const contactStatus = useAppSelector(state => state.contacts.status);
	const contactsFromRedux = useAppSelector(state => state.contacts.contacts);
	const contactsError = useAppSelector(state => state.contacts.error);
	const navigate = useNavigate();

	//show/hide create modal contact handlers
	const showAddContactHandler = () => setShowAddContactModal(true);
	const hideAddContactHandler = () => setShowAddContactModal(false);
	//show/hide edit modal contact handlers
	const showEditContactHandler = () => setShowEditContactModal(true);
	const hideEditContactHandler = () => setShowEditContactModal(false);

	//table
	// const columns = useMemo(() => newColumns, []);

	// const clickedContactHandler = (rowContact: Row<Contact>) => {
	// 	const headerData = rowContact._getAllCellsByColumnId();
	// 	navigate(`/contacts/${rowContact.original.id}`, { replace: true });
	// };

	//Handlers

	const viewContactHandler = (headerId: string, rowInfo: Contact) => {
		//redirects to contact detail page when clicking anywhere on the row except the checkbox
		if (headerId !== "select") {
			navigate(`/contacts/${rowInfo.id}`, { replace: true });
		}
	};

	// const getCellData = cell => {
	// 	const cellData = cell.row.values;
	// 	console.log(cellData);
	// 	setCellData(cellData);
	// };

	const editContactHandler = (id: number) => {
		setIdContactToEdit(id);
		showEditContactHandler();
	};

	const deleteContactHandler = (id: number) => {
		dispatch(deleteContact(id));
	};

	// testing endpoint
	useEffect(() => {
		async function getStudentDetails() {
			let response = await fetch(
				"http://localhost:8000/api/v1/inscriptions/user-inscriptions",
			);
			let data = await response.json();
			console.log(data);
		}

		getStudentDetails();
	}, []);

	useEffect(() => {
		if (contactStatus === "idle") {
			dispatch(fetchContacts());
		}
	}, [contactStatus, dispatch]);

	//Handling UI state
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
			<Table
				columns={newColumns}
				stateData={contactsFromRedux}
				onViewRow={viewContactHandler}
				onEditRow={editContactHandler}
				onDeleteRow={deleteContactHandler}
				globalFilterLabel="Buscar Contactos"
			/>
		);
	} else if (contactStatus === "failed") {
		loadingTableContent = (
			<span>
				Oops!! Esto no estaba previsto. Verifica el mensaje de error y
				vuelve a intentarlo: <br /> {contactsError}
			</span>
		);
	}

	return (
		<section className={styles.container}>
			{showAddContactModal && (
				<AddEditContact
					onHideCreateContact={hideAddContactHandler}
					editMode={false}
				/>
			)}

			{showEditContactModal && (
				<AddEditContact
					onHideCreateContact={hideEditContactHandler}
					editMode={true}
					contactId={idContactToEdit}
				/>
			)}

			{/* <MenuDashboard /> */}
			<main>
				<ActiveMenu
					buttonLabel="Crear Contacto"
					onShowItem={showAddContactHandler}
					currentPageTitle="Contactos"
				/>

				{loadingTableContent}
			</main>
		</section>
	);
}

export default Contacts;
