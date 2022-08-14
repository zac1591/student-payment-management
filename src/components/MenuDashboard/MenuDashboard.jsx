import { Link } from "react-router-dom";
import styles from "./menuDashboard.module.scss";

function MenuDashboard() {
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
				<Link to="/">
					<span className="material-icons-sharp">grid_view </span>
					<h3>Dashboard</h3>
				</Link>
				<Link to="/contacts" className="active">
					<span className="material-icons-sharp">person_outline</span>
					<h3>Personas</h3>
				</Link>
				<Link to="/groups">
					<span className="material-icons-sharp">groups</span>
					<h3>Grupos</h3>
				</Link>
				<Link to="/debts">
					<span className="material-icons-sharp">receipt_long</span>
					<h3>Deudas</h3>
				</Link>
				<Link to="">
					<span className="material-icons-sharp"> mail_outline </span>
					<h3>Messages</h3>
					<span className={styles["message-count"]}>26</span>
				</Link>
				<Link to="">
					<span className="material-icons-sharp">inventory</span>
					<h3>Products</h3>
				</Link>
				<Link to="">
					<span className="material-icons-sharp">
						report_gmailerrorred
					</span>
					<h3>Reports</h3>
				</Link>
				<Link to="/user-preferences">
					<span className="material-icons-sharp">settings</span>
					<h3>Settings</h3>
				</Link>
				<Link to="">
					<span className="material-icons-sharp">add</span>
					<h3>Agregar Usuario</h3>
				</Link>

				<Link to="/authentication/sign-in">
					<span className="material-icons-sharp"> logout </span>
					<h3>Logout</h3>
				</Link>
			</div>
		</aside>
	);
}

export default MenuDashboard;
