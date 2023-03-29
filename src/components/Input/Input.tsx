
import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from 'react-hook-form'

import styles from "./Input.module.scss";

type propTypes = {
	label: string,
	type: string,
	register: any,
	required: boolean,
	name: string,
	id: string,
	className?: string,
	onChange?: (e: ChangeEvent<HTMLInputElement> | null) => void,
};

const Input = ({
	label,
	type,
	register,
	required,
	name,
	id,
	className,
	onChange,
	...otherProps
}: propTypes) => {
	const customClass = className ? className : "";
	return (
		<div className={`${styles.formControl} ${customClass}`}>
			<input
				{...register(name, {
					required: "Este campo es requerido",
					minLength: {
						value: 1,
						message: "Mínimo de caractéres es 1",
					},
				})}
				type={type}
				id={id}
				required
				onChange={onChange}
				{...otherProps}
			/>
			<label htmlFor={id as string} className={styles.labelTag}>
				<span className={styles.contentTag}>{label}</span>
			</label>
		</div>
	);
};

export default Input;
