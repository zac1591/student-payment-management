import { Link, NavLink } from "react-router-dom";
import styles from "./menuDashboard.module.scss";

function MenuDashboard() {
	const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : null);
	return (
		<aside className={styles.aside}>
			{/* <div className={styles.top}>
				<div className={styles.logo}>
					<img src="images/logo.png" alt="Logo" />
					<h2>Bubbly</h2>
				</div>
				<div className={styles.close} id="close-btn">
					<span className="material-icons-sharp">close </span>
				</div>
			</div> */}

			<div className={styles.sidebar}>
				<NavLink to="/" className={activeLink}>
					<span className="material-icons-sharp">dashboard </span>
					<h3>Dashboard</h3>
				</NavLink>
				<NavLink to="/contacts" className={activeLink}>
					<span className="material-icons-sharp">people_alt</span>
					<h3>Personas</h3>
				</NavLink>
				<NavLink to="/courses" className={activeLink}>
					<span className="material-icons-sharp">school</span>
					<h3>Cursos</h3>
				</NavLink>
				<NavLink to="/groups" className={activeLink}>
					<span className="material-icons-sharp">groups</span>
					<h3>Grupos</h3>
				</NavLink>

				<NavLink to="/finances" className={activeLink}>
					<span className="material-icons-sharp">line_axis</span>
					<h3>Finanzas</h3>
					{/* <span className="material-icons-sharp">expand_more</span> */}
				</NavLink>
				{/* <NavLink to="/debts" className={activeLink}>
					<span className="material-icons-sharp"> receipt </span>
					<h3>Deudas</h3>
					<span className={styles["message-count"]}>26</span>
				</NavLink> */}
				<NavLink to="/recurring-debts">
					<span className="material-icons-sharp">inventory</span>
					<h3>Inscripciones</h3>
				</NavLink>
				<NavLink to="/payments" className={activeLink}>
					<span className="material-icons-sharp">payment</span>
					<h3>Pagos</h3>
				</NavLink>
				<Link to="">
					<span className="material-icons-sharp">add</span>
					<h3>Agregar Usuario</h3>
				</Link>

				<Link to="/authentication/sign-in">
					<span className="material-icons-sharp"> logout </span>
					<h3>Cerrar Sesión</h3>
				</Link>
			</div>
		</aside>
	);
}

export default MenuDashboard;
