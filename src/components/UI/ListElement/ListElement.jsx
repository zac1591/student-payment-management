import styles from "./listElement.module.scss";

function ListElement({ description, amount }) {
	return (
		<div className={styles.item}>
			<span>{description}</span>
			<span>{amount}</span>
		</div>
	);
}

export default ListElement;
