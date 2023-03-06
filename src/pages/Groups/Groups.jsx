import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import { COLUMNS } from "../../table-columns/GROUPS_COLUMNS";

//redux
import { useSelector } from "react-redux";

import styles from "./groups.module.scss";

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
	const groupsFromState = useSelector(({ groups }) => groups.groups);
	return (
		<section className={styles.groups}>
			<div className={styles.pageFlex}>
				<MenuDashboard />
				<div className={styles.groupsList}>
					<ActiveMenu
						createButtonLabel="Crear Grupo"
						currentPageTitle="Grupos"
					/>
					<ItemsTable
						COLUMNS={COLUMNS}
						stateData={groupsFromState}
						navigatesTo="groups"
					/>
				</div>
			</div>
		</section>
	);
}

export default Groups;
