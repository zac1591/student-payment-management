
import { ChangeEvent } from "react";
import { UseFormRegister } from 'react-hook-form'
//types
import { Group } from "../../types";
import styles from "./Input.module.scss";

type propTypes = {
	label: string,
	type: string,
	register: UseFormRegister<Group>,
	required: string,
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
					required: "This field is required",
					minLength: {
						value: 1,
						message: "Minimum length is 1 character",
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
