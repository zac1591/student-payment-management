import { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
//redux
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
	addNewContact,
	editContact,
} from "../../store/contacts/thunks-contacts";
//react hook form
import { useForm, Controller, SubmitHandler } from "react-hook-form";
//component
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import RadioButton from "../RadioButton/RadioButton";
//utils
import { strToDate } from "../../utils/utils";
//styles
import styles from "./addEditContact.module.scss";
import "react-datepicker/dist/react-datepicker.css";
//types
import { Contact } from "../../types";

type AddEditContactProps = {
	onHideCreateContact: () => void;
	editMode: boolean;
	contactId?: number;
};

function AddEditContact({
	onHideCreateContact,
	editMode,
	contactId,
}: AddEditContactProps) {
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		control,
		formState: { errors },
	} = useForm<Contact>();

	const toEditContact = useAppSelector(({ contacts }) =>
		contactId
			? contacts.contacts.find(contact => contact.id === contactId)
			: null
	);

	const submitButtonHandler: SubmitHandler<Contact> = (
		data,
		event: React.BaseSyntheticEvent<object, any, any> | undefined
	) => {
		event?.preventDefault();
		// const buttonName = event.target.getAttribute("id");
		return editMode ? updateContact(data) : createContact(data);
	};

	const createContact = (data: Contact) => {
		console.log(data);
		dispatch(addNewContact(data));
		reset();
		onHideCreateContact();
	};

	const updateContact = (data: Contact) => {
		dispatch(editContact(data));
		reset();
		onHideCreateContact();
	};

	useEffect(() => {
		if (editMode && toEditContact !== null && toEditContact !== undefined) {
			(Object.keys(toEditContact) as Array<keyof Contact>).forEach(field =>
				setValue(field, toEditContact[field])
			);
		}
	}, [editMode, toEditContact, setValue]);

	return (
		<Modal
			className={`${styles.modal} ${styles.scrollable}`}
			onHideCart={onHideCreateContact}
		>
			<div className={styles.header}>
				<h3>Nuevo Contácto</h3>
			</div>
			<form onSubmit={handleSubmit(submitButtonHandler)} noValidate>
				<div className={styles.flexContainer}>
					<div className={styles.splitForm}>
						<Input
							label="Nombre"
							name="firstName"
							id="firstName"
							register={register}
							required
							type="text"
						/>
						<small>{errors.firstName?.message}</small>
						<Input
							label="Apellido"
							name="lastName"
							id="lastName"
							register={register}
							required
							type="text"
						/>
						<small>{errors.lastName?.message}</small>
						<Input
							label="DUI"
							name="personalId"
							id="personalId"
							register={register}
							required
							type="text"
						/>
						<small>{errors.personalId?.message}</small>
						<Input
							label="Teléfono"
							name="phoneNumber"
							id="phoneNumber"
							register={register}
							required
							type="text"
						/>
						<small>{errors.phoneNumber?.message}</small>
						<Input
							label="Correo"
							name="email"
							id="email"
							register={register}
							required
							type="email"
						/>
						<small>{errors.email?.message}</small>
						<Input
							label="País"
							name="country"
							id="country"
							register={register}
							required
							type="text"
						/>
						<small>{errors.country?.message}</small>
						<Input
							label="Dirección"
							name="address"
							id="address"
							register={register}
							required
							type="text"
						/>
						<small>{errors.address?.message}</small>
					</div>
					<div className={styles.splitForm}>
						<Input
							label="Departamento"
							name="department"
							id="department"
							register={register}
							required
							type="text"
						/>
						<small>{errors.department?.message}</small>
						<div className={styles.formControl}>
							<p>Fecha de Nacimiento</p>
							<Controller
								name="dob"
								control={control}
								rules={{ required: true }}
								render={({ field: { value, onChange, ...rest } }) => (
									<ReactDatePicker
										{...rest}
										placeholderText="Seleccionar fecha"
										selected={value ? strToDate(value) : undefined}
										onChange={e => onChange(e)}
										peekNextMonth
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										className={styles.datePicker}
									/>
								)}
							/>
						</div>

						{/* come back to refactor radio button component */}
						<RadioButton
							label="Genero"
							name="gender"
							register={register}
							id="genero"
							options={{ masculino: "Masculino", femenino: "Femenino" }}
						/>
						{/* <RadioButton
							label="Becado"
							name="scholarship"
							register={register}
							id="scholarship"
							options={{ si: true, no: false }}
						/> */}

						{/* <div className={styles.formControl}>
							<p>Fecha de Primera Cuota</p>
							<Controller
								name="firstPaymentDate"
								control={control}
								rules={{ required: true }}
								render={({ field: { value, onChange, ...rest } }) => (
									<ReactDatePicker
										{...rest}
										placeholderText="Seleccionar fecha"
										selected={strToDate(value)}
										onChange={e => onChange(e)}
										peekNextMonth
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										className={styles.datePicker}
									/>
								)}
							/>
						</div>
						<div className={styles.formControl}>
							<p>Fecha de la Última Cuota</p>
							<Controller
								name="lastPaymentDate"
								control={control}
								rules={{ required: true }}
								render={({ field: { value, onChange, ...rest } }) => (
									<ReactDatePicker
										{...rest}
										placeholderText="Seleccionar fecha"
										selected={strToDate(value)}
										onChange={e => onChange(e)}
										peekNextMonth
										showMonthDropdown
										showYearDropdown
										dropdownMode="select"
										className={styles.datePicker}
									/>
								)}
							/>
						</div> */}

						<Input
							label="Nivel de acceso"
							name="accessLevel"
							id="accessLevel"
							register={register}
							required
							type="select"
						/>
					</div>
				</div>

				<div className={styles.formActions}>
					<Button
						btnStylesConf={{
							inverted: "inverted",
							small: "small",
							success: "success",
						}}
						type="submit"
						id="create-contact"
					>
						Guardar
					</Button>
					<Button
						btnStylesConf={{ small: "small" }}
						type="button"
						onClick={onHideCreateContact}
					>
						Cancelar
					</Button>
				</div>
			</form>
		</Modal>
	);
}

export default AddEditContact;
