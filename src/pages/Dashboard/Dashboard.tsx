import { Link } from "react-router-dom";
import { Row, Col, Card, Table, DatePicker, Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// components
import InsightCard from "../../components/InsightCard/InsightCard"; // Opcional: reemplazar por antd Statistic
import AnalyticsAlerts from "../../components/AnalyticsAlerts/AnalyticsAlerts";
import RecentUpdate from "../../components/RecentUpdate/RecentUpdate";
import RecentUpdates from "../../components/RecentUpdates/RecentUpdates";
import DashboardKPIs from "./DashboardKpi";

//assets
import ProfileUpdate2 from "../../assets/profile-2.jpg";
import ProfileUpdate3 from "../../assets/profile-3.jpg";
import ProfileUpdate4 from "../../assets/profile-4.jpg";

// styles
import styles from "./dashboard.module.scss";

const { Title } = Typography;

//mock data
const updateMessage = "Se ha actualizado el estado del pago.";

function Dashboard() {
	// Definición de columnas para la tabla (Ant Design Table)
	const columns = [
		{ title: "Curso / Producto", dataIndex: "name", key: "name" },
		{ title: "ID", dataIndex: "number", key: "number" },
		{ title: "Pago", dataIndex: "payment", key: "payment" },
		{
			title: "Estado",
			dataIndex: "status",
			key: "status",
			render: (status: string) => (
				<span
					className={
						status === "Pending" ? styles.warning : styles.primary
					}
				>
					{status}
				</span>
			),
		},
	];

	const data = [
		{
			key: "1",
			name: "Inglés Avanzado",
			number: "85631",
			payment: "Due",
			status: "Pending",
		},
		{
			key: "2",
			name: "Refuerzo Mate",
			number: "45231",
			payment: "Paid",
			status: "Success",
		},
	];

	return (
		<div className={styles.dashboardWrapper}>
			<header className={styles.header}>
				<Title level={2}>Dashboard Informativo</Title>
				<DatePicker picker="date" className={styles.datePicker} />
			</header>

			{/* Fila de Insights (Bento Top) */}
			{/* <Row gutter={[16, 16]} className={styles.insightsRow}>
				<Col xs={24} sm={12} lg={8}>
					<InsightCard
						icon="analytics"
						title="Ingresos del mes"
						amount="25,024"
						percentage="81"
						color="normal"
					/>
				</Col>
				<Col xs={24} sm={12} lg={8}>
					<InsightCard
						icon="bar_chart"
						title="Deuda Pendiente (Morosos)"
						amount="14,160"
						percentage="62"
						color="danger"
					/>
				</Col>
				<Col xs={24} sm={12} lg={8}>
					<InsightCard
						icon="stacked_line_chart"
						title="Nuevas Inscripciones"
						amount="9"
						percentage="44"
						color="success"
					/>
				</Col>
			</Row> */}
			<DashboardKPIs />

			{/* Contenido Principal + Aside (Bento Body) */}
			<Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
				<Col xs={24} lg={17}>
					<Card
						title="Inscripciones Recientes"
						extra={<Link to="/inscriptions">Ver todas</Link>}
						className={styles.bentoCard}
					>
						<Table
							columns={columns}
							dataSource={data}
							pagination={false}
							size="middle"
						/>
					</Card>
				</Col>

				<Col xs={24} lg={7}>
					<div className={styles.rightSide}>
						<RecentUpdates title="Próximos Cobros">
							<RecentUpdate
								imgUrl={ProfileUpdate2}
								userName="Mike Simons"
								message={updateMessage}
								updateTime="15"
							/>

							<RecentUpdate
								imgUrl={ProfileUpdate3}
								userName="Tiffany Jensen"
								message={updateMessage}
								updateTime="2"
							/>
						</RecentUpdates>

						<div style={{ marginTop: "24px" }}>
							<AnalyticsAlerts />
						</div>

						<Button
							type="dashed"
							block
							icon={<PlusOutlined />}
							className={styles.addBtn}
							style={{
								marginTop: "24px",
								height: "100px",
								borderRadius: "15px",
							}}
						>
							Nuevo Alumno
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default Dashboard;
