import React from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
	DashboardOutlined,
	UserOutlined,
	TeamOutlined,
	BookOutlined,
	DollarOutlined,
	AlertOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import Header from "./Header/Header";

const { Content, Sider } = Layout;

const MainLayout: React.FC = () => {
	const location = useLocation();

	const menuItems = [
		{
			key: "/",
			icon: <DashboardOutlined />,
			label: <Link to="/">Dashboard</Link>,
		},
		{
			key: "/contacts",
			icon: <UserOutlined />,
			label: <Link to="/contacts">Contactos</Link>,
		},
		{
			key: "/groups",
			icon: <TeamOutlined />,
			label: <Link to="/groups">Grupos</Link>,
		},
		{
			key: "/courses",
			icon: <BookOutlined />,
			label: <Link to="/courses">Cursos</Link>,
		},
		{
			key: "/finances",
			icon: <DollarOutlined />,
			label: <Link to="/finances">Finanzas</Link>,
		},
		{
			key: "/debts",
			icon: <AlertOutlined />,
			label: <Link to="/debts">Deudas</Link>,
		},
		{
			key: "/user-preferences",
			icon: <SettingOutlined />,
			label: (
				<Link to="/user-preferences/general-settings">Configuración</Link>
			),
		},
	];

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider breakpoint="lg" collapsedWidth="0">
				<div
					className="logo"
					style={{
						height: 32,
						margin: 16,
						background: "rgba(255, 255, 255, 0.2)",
					}}
				/>
				<Menu
					theme="dark"
					mode="inline"
					selectedKeys={[location.pathname]}
					items={menuItems}
				/>
			</Sider>
			<Layout>
				{/* Aquí puedes mover tu componente Header actual */}
				{/* <Header style={{ background: "#fff", padding: 0 }} /> */}
				<Header />
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						background: "#fff",
						minHeight: 280,
					}}
				>
					{/* AQUÍ es donde se renderizarán tus páginas (Dashboard, Contacts, etc.) */}
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
