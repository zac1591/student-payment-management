import React, { useEffect, useState } from "react";
import { Table, Tag, Card, message, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Definimos la interfaz basándonos en lo que envía Django (con camelCase)
interface InscriptionRecord {
	id: number;
	studentName: string;
	studentEmail: string;
	groupName: string;
	assignedMonthlyPayment: string;
	billingDay: number;
	status: string;
	scholarship: boolean;
}

const InscriptionTable: React.FC = () => {
	const [data, setData] = useState<InscriptionRecord[]>([]);
	const [loading, setLoading] = useState(false);

	// Cargar las inscripciones
	const fetchInscriptions = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				"http://localhost:8000/api/v1/inscriptions/",
			); // Ajusta a tu endpoint real
			setData(response.data);
		} catch (error) {
			message.error("Error al cargar las inscripciones");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchInscriptions();
	}, []);

	// Definición de las columnas de Ant Design
	const columns: ColumnsType<InscriptionRecord> = [
		{
			title: "Alumno",
			key: "student",
			render: (_, record) => (
				<div>
					<strong>{record.studentName || "Sin Nombre"}</strong>
					<br />
					<span style={{ fontSize: "12px", color: "gray" }}>
						{record.studentEmail}
					</span>
				</div>
			),
		},
		{
			title: "Grupo / Curso",
			dataIndex: "groupName",
			key: "groupName",
		},
		{
			title: "Día de Cobro",
			dataIndex: "billingDay",
			key: "billingDay",
			render: day => `Día ${day}`,
		},
		{
			title: "Mensualidad",
			dataIndex: "assignedMonthlyPayment",
			key: "assignedMonthlyPayment",
			render: (amount, record) => (
				<div>
					${amount}{" "}
					{record.scholarship && (
						<Tag color="blue" style={{ marginLeft: 8 }}>
							Beca
						</Tag>
					)}
				</div>
			),
		},
		{
			title: "Estado",
			dataIndex: "status",
			key: "status",
			render: status => {
				const color = status === "ACTIVE" ? "green" : "red";
				return <Tag color={color}>{status}</Tag>;
			},
		},
		{
			title: "Acciones",
			key: "actions",
			render: (_, record) => (
				<div style={{ display: "flex", gap: "8px" }}>
					<Button
						type="text"
						icon={<EditOutlined />}
						onClick={() => console.log("Editar", record.id)}
					/>
					<Button
						type="text"
						danger
						icon={<DeleteOutlined />}
						onClick={() => console.log("Borrar", record.id)}
					/>
				</div>
			),
		},
	];

	return (
		<Card title="Directorio de Inscripciones" bordered={false}>
			<Table
				columns={columns}
				dataSource={data}
				rowKey="id"
				loading={loading}
				pagination={{ pageSize: 10 }} // Paginación automática
			/>
		</Card>
	);
};

export default InscriptionTable;
