import { ReactNode } from "react";
import styles from "./card.module.scss";

type CardProps = {
	children: ReactNode,
	className: String,
};

function Card({ children, className, ...otherProps }: CardProps) {
	const classes = `${styles.card} ${className}`;

	return (
		<div className={classes} {...otherProps}>
			{children}
		</div>
	);
}

export default Card;
