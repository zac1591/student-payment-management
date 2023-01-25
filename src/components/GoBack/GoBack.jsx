import styles from "./goBack.module.scss";

function GoBack({ onClick, className }) {
	return (
		<span
			className={`material-icons-sharp ${styles.goBackArrow} ${className}`}
			onClick={onClick}
		>
			arrow_back
		</span>
	);
}

export default GoBack;
