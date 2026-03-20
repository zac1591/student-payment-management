import React, { useEffect, useState } from "react";
import {
	Form,
	InputNumber,
	Select,
	Switch,
	Button,
	Card,
	message,
	Divider,
} from "antd";
import {
	UserOutlined,
	BookOutlined,
	DollarOutlined,
	CalendarOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useAppSelector } from "../../hooks/storeHooks";
import { fetchGroups } from "../../store/groups/thunks-groups";

const { Option } = Select;

interface InscriptionFormProps {
	onSuccess?: () => void;
}

const InscriptionForm: React.FC<InscriptionFormProps> = ({ onSuccess }) => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState<any[]>([]);
	const [groups, setGroups] = useState<any[]>([]);

	// Cargar datos iniciales para los Selects
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [usersRes, groupsRes] = await Promise.all([
					axios.get("http://localhost:8000/api/v1/users/"), // Ajusta segun tu API
					axios.get("http://localhost:8000/api/v1/groups/"),
				]);
				setUsers(usersRes.data);
				setGroups(groupsRes.data);
				console.log(usersRes.data);
				console.log(groupsRes.data);
			} catch (err) {
				console.log(err);
				message.error("Error al cargar datos base");
			}
		};
		fetchData();
	}, []);

	const onFinish = async (values: any) => {
		setLoading(true);
		try {
			// El backend espera snake_case pero CamelCaseMiddleware lo traduce
			// Enviamos la peticion al endpoint que configuramos en el Router
			await axios.post("http://localhost:8000/api/v1/inscriptions/", values);

			message.success("Alumno inscrito y contrato generado correctamente");
			form.resetFields();
			if (onSuccess) onSuccess();
		} catch (error: any) {
			console.error(error);
			message.error("Hubo un error al procesar la inscripción");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card
			title="Nueva Inscripción de Alumno"
			variant="borderless"
			style={{ maxWidth: 600, margin: "0 auto" }}
		>
			<Form
				form={form}
				layout="horizontal"
				onFinish={onFinish}
				initialValues={{ billingDay: 1, scholarship: false }}
			>
				<Form.Item
					name="user"
					label="Seleccionar Alumno"
					rules={[
						{ required: true, message: "Por favor seleccione un alumno" },
					]}
				>
					<Select
						showSearch
						placeholder="Buscar alumno por nombre o email"
						suffixIcon={<UserOutlined />}
					>
						{users.map(u => (
							<Option key={u.id} value={u.id}>
								{u.firstName} {u.lastName} ({u.email})
							</Option>
						))}
					</Select>
				</Form.Item>

				<Form.Item
					name="group"
					label="Grupo / Curso"
					rules={[
						{ required: true, message: "Por favor seleccione un grupo" },
					]}
				>
					<Select
						placeholder="Seleccionar grupo disponible"
						suffixIcon={<BookOutlined />}
					>
						{groups.map(g => (
							<Option key={g.id} value={g.id}>
								{g.groupName} - {g.course}
							</Option>
						))}
					</Select>
				</Form.Item>
				<Divider orientation="horizontal">Condiciones de Pago</Divider>

				<div style={{ display: "flex", gap: "16px" }}>
					<Form.Item
						name="assigned_monthly_payment"
						label="Monto Mensual Asignado"
						style={{ flex: 1 }}
						rules={[{ required: true, message: "Defina el monto" }]}
					>
						<InputNumber
							prefix={<DollarOutlined />}
							style={{ width: "100%" }}
							min={0}
							placeholder="0.00"
						/>
					</Form.Item>

					<Form.Item
						name="billingDay"
						label="Día de Cobro"
						style={{ flex: 1 }}
						rules={[{ required: true, message: "Día del 1 al 28" }]}
					>
						<InputNumber
							prefix={<CalendarOutlined />}
							style={{ width: "100%" }}
							min={1}
							max={28}
							placeholder="Día"
						/>
					</Form.Item>
				</div>

				<Form.Item
					name="scholarship"
					label="¿Aplica Beca?"
					valuePropName="checked"
				>
					<Switch checkedChildren="SÍ" unCheckedChildren="NO" />
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						loading={loading}
						block
						size="large"
					>
						Finalizar Inscripción
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
};

export default InscriptionForm;
