import { Fragment } from "react";
import styles from "../RadioButton/radioButton.module.scss";

function RadioButton({ label, options, name, register, ...otherInputProps }) {
	return (
		<div className={styles.formControl}>
			<p>{label}</p>
			{Object.values(options).map(option => (
				<Fragment key={option}>
					<label htmlFor={otherInputProps.id}>{option}</label>
					<input
						type="radio"
						{...register(name, { required: "Este campo es requerido" })}
						{...otherInputProps}
						value={option}
					/>
				</Fragment>
			))}
		</div>
	);
}

export default RadioButton;
