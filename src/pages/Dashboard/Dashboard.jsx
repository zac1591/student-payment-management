import { Link } from "react-router-dom";

//components
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import InsightCard from "../../components/InsightCard/InsightCard";
import AnalyticsAlerts from "../../components/AnalyticsAlerts/AnalyticsAlerts";

//styles
import styles from "./dashboard.module.scss";
import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";

function Dashboard() {
	return (
		<section className={styles.container}>
			<MenuDashboard />
			<main>
				<h1>Dashboard</h1>
				<div className={styles.date}>
					<input type="date" name="datepicker" />
				</div>
				<div className={styles.insights}>
					<InsightCard
						icon="analytics"
						title="Total Clientes"
						amount="25,024"
						percentage="81"
						color="normal"
					/>
					<InsightCard
						icon="bar_chart"
						title="Total Deudas"
						amount="14,160"
						percentage="62"
						color="danger"
					/>
					<InsightCard
						icon="stacked_line_chart"
						title="Total Pagados"
						amount="25,024"
						percentage="44"
						color="success"
					/>
				</div>

				<section className={styles.recentEntries}>
					<h2>Recent Orders</h2>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Product Name</th>
								<th>Product Number</th>
								<th>Payments</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Foldable Mini Drone</td>
								<td>85631</td>
								<td>Due</td>
								<td className="warning">Pending</td>
								<td className="primary">Details</td>
							</tr>
							<tr>
								<td>Foldable Mini Drone</td>
								<td>85631</td>
								<td>Due</td>
								<td className="warning">Pending</td>
								<td className="primary">Details</td>
							</tr>
							<tr>
								<td>Foldable Mini Drone</td>
								<td>85631</td>
								<td>Due</td>
								<td className="warning">Pending</td>
								<td className="primary">Details</td>
							</tr>
						</tbody>
					</table>
					<Link to="">Show All</Link>
				</section>
			</main>
			<aside className={styles.rightSide}>
				<RecentUpdates title="Pagos Recientes" />
				<AnalyticsAlerts />
				<div className={styles["add-product"]}>
					<div>
						<span className="material-icons-sharp"> add </span>
						<h3>Add User</h3>
					</div>
				</div>
			</aside>
		</section>
	);
}

export default Dashboard;
