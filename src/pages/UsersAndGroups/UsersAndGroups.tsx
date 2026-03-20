import { useEffect, useState } from "react";
//components
import { Jelly } from "@uiball/loaders";
import Table from "../../components/Table/Table";
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import AddEditContact from "../../components/AddEditContact/AddEditContact";
//table setup
import { newColumns } from "../../table-columns/CONTACTS_COLUMNS";
//redux
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { fetchContacts } from "../../store/contacts/thunks-contacts";
import { deleteContact } from "../../store/contacts/thunks-contacts";

import styles from "./usersAndGroups.module.scss";

function UsersAndGroups() {
	const [showAddContactModal, setShowAddContactModal] = useState(false);
	const [showEditContactModal, setShowEditContactModal] = useState(false);
	const [idContactToEdit, setIdContactToEdit] = useState<number | undefined>(
		undefined,
	);

	const contactStatus = useAppSelector(state => state.contacts.status);
	const contactsFromRedux = useAppSelector(state => state.contacts.contacts);
	const contactsError = useAppSelector(state => state.contacts.error);
	const dispatch = useAppDispatch();

	//handlers
	//show/hide create modal contact handlers
	const showAddContactHandler = () => setShowAddContactModal(true);
	const hideAddContactHandler = () => setShowAddContactModal(false);
	//show/hide edit modal contact handlers
	const showEditContactHandler = () => setShowEditContactModal(true);
	const hideEditContactHandler = () => setShowEditContactModal(false);

	const editContactHandler = (id: number) => {
		setIdContactToEdit(id);
		showEditContactHandler();
	};

	const deleteContactHandler = (id: number) => {
		dispatch(deleteContact(id));
	};

	//Handling UI state
	let loadingTableContent;

	useEffect(() => {
		if (contactStatus === "idle") {
			dispatch(fetchContacts());
		}
	}, [contactStatus, dispatch]);

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
				globalFilterLabel="Buscar Usuarios"
				onEditRow={editContactHandler}
				onDeleteRow={deleteContactHandler}
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
			<main>
				<ActiveMenu
					buttonLabel="Crear Contacto"
					onShowItem={showAddContactHandler}
					currentPageTitle="Contactos"
				/>

				<p>
					Create new users, customize user permissions, and remove users
					from your account.
				</p>
				{loadingTableContent}
			</main>
		</section>
	);
}

export default UsersAndGroups;
