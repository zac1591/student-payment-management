//styles
import { ReactNode } from "react";
import styles from "./Button.module.scss";


type buttonClassesTypes = {
	google?: string,
	inverted?: string,
	small?: string
}


type propsTypes = {
	children: ReactNode,
	btnStylesConf: buttonClassesTypes,
	otherProps?: any,
	onClick?: () => {}
}

function Button({ children, btnStylesConf, ...otherProps }: propsTypes) {
	const { inverted, google, small} = btnStylesConf;
	const buttonStyles = `${inverted ? styles.inverted : ""} ${
		google ? styles["google-sign-in"] : ""
	} ${styles.button} ${small ? styles.small : ""}`;

	return (
		<button className={`${styles.button} ${buttonStyles}`} {...otherProps} >
			{children}
		</button>
	);
}

export default Button;
