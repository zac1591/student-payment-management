//styles
import styles from "./recentUpdates.module.scss";

function RecentUpdates({ title, children }) {
	return (
		<div className={styles.recentUpdates}>
			<h2>{title}</h2>

			<div className={styles.updates}>{children}</div>
		</div>
	);
}

export default RecentUpdates;
