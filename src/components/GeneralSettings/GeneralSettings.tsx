import styles from "./generalSettings.module.scss";

function GeneralSettings() {
	return (
		<section className={styles.container}>
			<div className="mainTitle">
				<h2>General</h2>
				<p>These preferences only apply to you.</p>
			</div>
			<hr />
		</section>
	);
}

export default GeneralSettings;
