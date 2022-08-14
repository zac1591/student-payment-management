import React from "react";
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";

import styles from "./groups.module.scss";

function Groups() {
	return (
		<section className={styles.groups}>
			<div className={styles.pageFlex}>
				<MenuDashboard />
				<div className={styles.groupsList}>
					<ActiveMenu
						createButtonLabel="Crear Grupo"
						currentPageTitle="Grupos"
					/>
					<ItemsTable COLUMNS={[]} />
				</div>
			</div>
		</section>
	);
}

export default Groups;
