import { useState } from "react";

//components
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import { COLUMNS } from "../../table-columns/GROUPS_COLUMNS";

//redux
import { useSelector } from "react-redux";
//styles
import styles from "./groups.module.scss";
import CreateGroup from "../../components/CreateGroup/CreateGroup";

/*
What do I need to create a new groups?

1. Name
2. Description
3. Cap
4. Members (Add and remove members), this members should be retrieved from CRM data base as each member must have a profile
6. bulk upload
7. Price
8. starting and end date
9. schedule


*/


function Groups() {
	const [isShowingModal, setIsShowingModal] = useState(false)
	const groupsFromState = useSelector(({ groups }) => groups.groups);

	const onShowModal: () => void =  () => setIsShowingModal(true)
	const onHideModal: () => void =  () => setIsShowingModal(false)
	return (
		<section className={styles.container}>
			{ isShowingModal && <CreateGroup onHideCreateContact={onHideModal} />}
			
				<MenuDashboard />
				<main>
					<ActiveMenu
						buttonLabel="Crear Grupo"
						currentPageTitle="Grupos"
						onShowItem={onShowModal}
					/>
					<ItemsTable
						COLUMNS={COLUMNS}
						stateData={groupsFromState}
						navigatesTo="groups"
					/>
				</main>

		</section>
	);
}

export default Groups;
