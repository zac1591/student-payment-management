// import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import styles from "../RadioButton/radioButton.module.scss";

interface RadioButtonPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	name: string;
	error?: boolean;
	disabled?: boolean;
	register: any;
}

function RadioButton({
	id,
	name,
	label,
	register,
	disabled,
	...rest
}: RadioButtonPropsTypes) {
	const labelStyles = `${styles.label} ${disabled ? styles.disabled : ""}`;
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.radio}
				{...register(name)}
				type="radio"
				name={name}
				id={id}
				{...rest}
			/>
			<label htmlFor={id} className={labelStyles}>
				{label}
			</label>
		</div>
	);
}

export default RadioButton;
