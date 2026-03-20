import React, { useEffect, useState } from "react";
import { Card, Statistic, Row, Col, Skeleton, message } from "antd";
import {
	DollarOutlined,
	UserAddOutlined,
	LineChartOutlined,
	ArrowUpOutlined,
} from "@ant-design/icons";
import axios from "axios";

interface AnalyticsData {
	monthlyRevenue: number;
	totalDebt: number;
	newInscriptions: number;
}

const DashboardKPIs: React.FC = () => {
	const [data, setData] = useState<AnalyticsData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAnalytics = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8000/api/v1/inscriptions/analytics/dashboard/",
				);
				setData(response.data);
			} catch (error) {
				message.error("No se pudieron cargar las estadísticas reales.");
			} finally {
				setLoading(false);
			}
		};
		fetchAnalytics();
	}, []);

	if (loading) return <Skeleton active paragraph={{ rows: 1 }} />;

	return (
		<Row gutter={[16, 16]}>
			{/* Ingresos del Mes */}
			<Col xs={24} sm={12} lg={8}>
				<Card bordered={false} hoverable>
					<div
						style={{ display: "flex", alignItems: "center", gap: "16px" }}
					>
						<div
							style={{
								padding: "12px",
								backgroundColor: "#e6f7ff",
								borderRadius: "50%",
								display: "flex",
							}}
						>
							<LineChartOutlined
								style={{ fontSize: "24px", color: "#1890ff" }}
							/>
						</div>
						<Statistic
							title="Ingresos del Mes"
							value={data?.monthlyRevenue}
							precision={2}
							prefix="$"
							valueStyle={{ color: "#3f8600", fontWeight: "bold" }}
						/>
					</div>
				</Card>
			</Col>

			{/* Deuda Pendiente */}
			<Col xs={24} sm={12} lg={8}>
				<Card bordered={false} hoverable>
					<div
						style={{ display: "flex", alignItems: "center", gap: "16px" }}
					>
						<div
							style={{
								padding: "12px",
								backgroundColor: "#fff1f0",
								borderRadius: "50%",
								display: "flex",
							}}
						>
							<DollarOutlined
								style={{ fontSize: "24px", color: "#ff4d4f" }}
							/>
						</div>
						<Statistic
							title="Deuda Pendiente"
							value={data?.totalDebt}
							precision={2}
							prefix="$"
							valueStyle={{ color: "#cf1322", fontWeight: "bold" }}
						/>
					</div>
				</Card>
			</Col>

			{/* Nuevas Inscripciones */}
			<Col xs={24} sm={12} lg={8}>
				<Card bordered={false} hoverable>
					<div
						style={{ display: "flex", alignItems: "center", gap: "16px" }}
					>
						<div
							style={{
								padding: "12px",
								backgroundColor: "#f9f0ff",
								borderRadius: "50%",
								display: "flex",
							}}
						>
							<UserAddOutlined
								style={{ fontSize: "24px", color: "#722ed1" }}
							/>
						</div>
						<Statistic
							title="Inscripciones (Mes)"
							value={data?.newInscriptions}
							prefix={<ArrowUpOutlined />}
							valueStyle={{ color: "#722ed1", fontWeight: "bold" }}
						/>
					</div>
				</Card>
			</Col>
		</Row>
	);
};

export default DashboardKPIs;
