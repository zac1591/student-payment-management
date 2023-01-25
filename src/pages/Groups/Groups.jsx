import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import { COLUMNS } from "../../table-columns/GROUPS_COLUMNS";

//redux
import { useSelector } from "react-redux";

import styles from "./groups.module.scss";

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
