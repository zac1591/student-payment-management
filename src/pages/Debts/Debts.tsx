import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import InsightCard from "../../components/InsightCard/InsightCard";

//components
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";

import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";

import styles from "./debts.module.scss";

function Debts() {
	return (
		<section className={styles.container}>
			<MenuDashboard />
			
			<main>
				<ActiveMenu
					buttonLabel="Crear Deuda"
					currentPageTitle="Finanzas"
					onShowItem={() => {console.log('showing item')}}
				/>
				<div className={styles.insights}>
					<InsightCard 
						icon='account_balance'
						title='Ingresos'
						amount='12,879.38'
						percentage='25'
						color='success'
					/>

					<InsightCard 
						icon='balance'
						title='No vencido'
						amount='8,542'
						percentage='40'
						color="warning"
					/>

					<InsightCard 
						icon='local_atm'
						title='Vencido'
						amount='2,687.14'
						percentage='35'
						color='danger'
					/>
				</div>

			</main>
			<div className={styles.rightSide}>
				<RecentUpdates title='Deudas Por Mes' />
			</div>
		</section>
	);
}

export default Debts;
