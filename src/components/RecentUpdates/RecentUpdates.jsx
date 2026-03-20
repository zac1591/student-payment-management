//styles
import styles from "./recentUpdates.module.scss";

function RecentUpdates({ title, children, ...rest }) {
	return (
		<div className={styles.recentUpdates} {...rest}>
			<h2>{title}</h2>

			<div className={styles.updates}>{children}</div>
		</div>
	);
}

export default RecentUpdates;
