import styles from "./contactOptions.module.scss";

function ContactOptions({ buttonConfig }) {
	return (
		<div className={styles.contactOptions}>
			{buttonConfig.map(button => (
				<button onClick={button.onClick} key={button.btnName}>
					<span className="material-icons-sharp">{button.iconLabel}</span>
					{button.btnName}
				</button>
			))}
		</div>
	);
}

export default ContactOptions;
