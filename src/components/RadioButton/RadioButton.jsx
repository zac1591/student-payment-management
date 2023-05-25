import { Fragment } from "react";
import styles from "../RadioButton/radioButton.module.scss";

function RadioButton({ label, options, name, register, ...otherInputProps }) {
	return (
		<div className={styles.formControl}>
			<p>{label}</p>
			{Object.values(options).map(option => {
				let optionStr;
				if (typeof option === "boolean") {
					optionStr = option === true ? "Si" : "No";
				} else {
					optionStr = option;
				}
				return (
					<Fragment key={optionStr}>
						<label htmlFor={otherInputProps.id}>{optionStr}</label>
						<input
							type="radio"
							{...register(name, {
								required: "Este campo es requerido",
							})}
							{...otherInputProps}
							value={option}
						/>
					</Fragment>
				);
			})}
		</div>
	);
}

export default RadioButton;
