import styles from "./closableTag.module.scss";

function ClosableTag(props) {
	const { tagName, onRemoveTag } = props;
	return (
		<div className={styles.closableTag}>
			<span
				className={`material-icons-sharp ${styles.iconTag}`}
				onClick={onRemoveTag}
			>
				cancel
			</span>
			<p>{tagName}</p>
		</div>
	);
}

export default ClosableTag;
