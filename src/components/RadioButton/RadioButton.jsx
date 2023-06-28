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
					<label
						htmlFor={optionStr}
						className={styles.radiobuttonLabel}
						key={optionStr}
					>
						{optionStr}
						<input
							type="radio"
							{...register(name, {
								required: "Este campo es requerido",
							})}
							{...otherInputProps}
							value={option}
							id={optionStr}
							className={styles.radiobuttonInput}
						/>
						<span className={styles.customRadiobutton}></span>
					</label>
				);
			})}
		</div>
	);
}

export default RadioButton;
