import styles from "./card.module.scss";

function Card({ children, className, ...otherProps }) {
	const classes = `${styles.card} ${className}`;

	return (
		<div className={classes} {...otherProps}>
			{children}
		</div>
	);
}

export default Card;
