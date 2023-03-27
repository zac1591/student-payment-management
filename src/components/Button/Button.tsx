//styles
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";


type buttonClassesTypes = {
	google?: string,
	inverted?: string,
	small?: string
	success?: string
}


type propsTypes = {
	children: ReactNode,
	btnStylesConf: buttonClassesTypes | null,
	type?: ButtonHTMLAttributes<HTMLButtonElement> | string,
	required?: boolean,
	small?: boolean,
	inverted?: boolean,
	google?: boolean,
	success?: boolean
	id?: string | number
	onClick?: () => void
}

function Button({ children, btnStylesConf, ...otherProps }: propsTypes ) {
	if(btnStylesConf) {
		var { inverted, google, small, success} = btnStylesConf;
	}
	const buttonStyles = `${inverted ? styles.inverted : ""} ${
		google ? styles["google-sign-in"] : ""
	} ${styles.button} ${small ? styles.small : ""} ${success ? styles.success : ''}`;

	return (
		<button className={`${styles.button} ${buttonStyles}`} {...otherProps as React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>} >
			{children}
		</button>
	);
}

export default Button;
