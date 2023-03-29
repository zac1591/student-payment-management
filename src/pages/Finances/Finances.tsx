import { useForm, SubmitHandler } from "react-hook-form";
//components
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import InsightCard from "../../components/InsightCard/InsightCard";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";
import DebtUpdate from "../../components/DebtUpdate/DebtUpdate";

import styles from "./finances.module.scss";

function Finances() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
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
				<div className={styles.recentEntries}>
					<div className={styles.header}>
						<h2>Estado de Cuenta</h2>
						<span>Individual</span>
						<span>Masiva</span>
					</div>
					<form action="" style={{marginBottom: '1.4rem'}}>
						<Input 
							label="Nombre" 
							type="text" 
							id="name" 
							name="nombre" 
							register={register} 
							required 
						/>
						<Button btnStylesConf={{small: 'small'}}>
							<div style={{display: 'flex', gap: '0.5rem', padding: '0 0.5rem', alignItems: 'center'}}>
							Generar
							<span className="material-icons-sharp" style={{fontSize: '1.1rem'}}>
								leaderboard
							</span>
							</div>
						</Button>
					</form>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Cliente</th>
								<th>DUI</th>
								<th>Grupo</th>
								<th>Deudas</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>John Doe</td>
								<td>05459687-9</td>
								<td>PEM</td>
								<td className="warning">Al día</td>
								<td className="primary">Detalles</td>
							</tr>
							<tr>
								<td>Tiffany Jensen</td>
								<td>658796-8</td>
								<td>PEM</td>
								<td className="warning">2 Cuotas</td>
								<td className="primary">Detalles</td>
							</tr>
							<tr>
								<td>Ashley Smith</td>
								<td>569712-8</td>
								<td>Ultra</td>
								<td className="warning">5 Cuotas</td>
								<td className="primary">Detalles</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
			<div className={styles.rightSide}>
				<RecentUpdates title='Deudas Por Mes'>
					<div className={styles.scrollable}>
						<DebtUpdate date="Febrero 2023" due="$234.14" pastDue="$880.00" />
						<DebtUpdate date="Marzo 2023" due="$740.45" pastDue="$157.35" />
						<DebtUpdate date="Abril 2023" due="$1000.00" pastDue="$0.00" />
						<DebtUpdate date="Mayo 2023" due="$0.00" pastDue="$0.00" />
					</div>
				</RecentUpdates>
			</div>
		</section>
	);
}

export default Finances;
