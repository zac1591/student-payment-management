import { useAppSelector } from "../../hooks/storeHooks";
//components
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import Table from "../../components/Table/Table";

//table
import { debtColumns } from "../../table-columns/debts-columns";

import styles from "./debts.module.scss";

function Debts() {
	const debtsFromRedux = useAppSelector(({ debts }) => debts.debts);
	return (
		<section className={styles.container}>
			<MenuDashboard />

			<main>
				<ActiveMenu
					buttonLabel="Crear Deuda"
					onShowItem={() => console.log("show item")}
					currentPageTitle="Deudas"
				/>

				<Table
					columns={debtColumns}
					stateData={debtsFromRedux}
					onEditRow={() => {}}
					onDeleteRow={() => {}}
					globalFilterLabel="Buscar Deudas"
				/>
			</main>
		</section>
	);
}

export default Debts;
