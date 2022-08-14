import React from "react";
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";

//components
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";

import styles from "./debts.module.scss";

function Debts() {
	return (
		<section className={styles.debts}>
			<div className={styles.flexPage}>
				<MenuDashboard />
				<div className={styles.mainContentPage}>
					<ActiveMenu
						createButtonLabel="Crear Deuda"
						currentPageTitle="Deudas"
					/>
				</div>
			</div>
		</section>
	);
}

export default Debts;
