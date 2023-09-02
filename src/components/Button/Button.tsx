//styles
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type buttonClassesTypes = {
	google?: string;
	inverted?: string;
	small?: string;
	success?: string;
};

type propsTypes = {
	children: ReactNode;
	btnStylesConf?: buttonClassesTypes;
	type?: ButtonHTMLAttributes<HTMLButtonElement> | string;
	required?: boolean;
	id?: string | number;
	onClick?: () => void;
	otherProps?: ButtonHTMLAttributes<HTMLButtonElement> | undefined;
	disabled?: boolean;
};

// const buttonOptionStyles: buttonClassesTypes = {
// 	inverted: styles.inverted,
// 	google: styles["google-sign-in"],
// 	small: styles.small,
// 	success: styles.success,
// };

function Button({ children, btnStylesConf, ...otherProps }: propsTypes) {
	if (!!btnStylesConf) {
		var { inverted, google, small, success } = btnStylesConf;
	}
	const buttonStyles = `${inverted ? styles.inverted : ""} ${
		google ? styles["google-sign-in"] : ""
	} ${small ? styles.small : ""} ${success ? styles.success : ""} ${
		styles.button
	}`;

	return (
		<button
			className={`${styles.button} ${buttonStyles}`}
			{...(otherProps as React.DetailedHTMLProps<
				ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>)}
		>
			{children}
		</button>
	);
}

export default Button;
