import RadioButton from "../RadioButton/RadioButton";

import { RadioButtonOptions } from "../../types";

import styles from "./radioButtonGroup.module.scss";

type RadioButtonGroupProps = {
	label: string;
	options: RadioButtonOptions[];
	hasFullWidth?: boolean;
	register: any;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function RadioButtonGroup({
	label,
	options,
	onChange,
	register,
}: RadioButtonGroupProps) {
	const renderOptions = () => {
		return options.map(
			({ label, name, disabled }: RadioButtonOptions, index) => {
				const shortenedOptionLabel = label.replace(/\s+/g, "");
				const optionId = `radio-option-${shortenedOptionLabel}`;

				return (
					<RadioButton
						value={label}
						label={label}
						key={optionId}
						name={name}
						id={optionId}
						disabled={disabled}
						defaultChecked={index === 0}
						onChange={onChange}
						register={register}
					/>
				);
			}
		);
	};
	return (
		<fieldset className={styles.fieldset}>
			<span className={styles.legend}>{label}</span>
			<div className={styles.wrapper}>{renderOptions()}</div>
		</fieldset>
	);
}

export default RadioButtonGroup;
