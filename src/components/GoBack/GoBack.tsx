import styles from "./goBack.module.scss";

type GoBackPropsTypes = {
	onClick?: React.MouseEventHandler<HTMLSpanElement>,
	className: string,
};

function GoBack({ onClick, className }: GoBackPropsTypes) {
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
