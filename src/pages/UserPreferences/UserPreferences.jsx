import { Outlet } from "react-router-dom";
//components
import Menu from "../../components/Menu/Menu";
//styles
import styles from "./userPreferences.module.scss";

function UserPreferences() {
	return (
		<section className={styles.container}>
			<Menu />
			<Outlet />
		</section>
	);
}

export default UserPreferences;
