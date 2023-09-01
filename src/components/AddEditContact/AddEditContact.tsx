import { useEffect, useState } from "react";
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
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup";
import Select from "../UI/Select/Select";
//utils
import { strToDate } from "../../utils/utils";
//styles
import styles from "./addEditContact.module.scss";
import "react-datepicker/dist/react-datepicker.css";
//types
import { Contact, SelectOption } from "../../types";

type AddEditContactProps = {
	onHideCreateContact: () => void;
	editMode: boolean;
	contactId?: number;
};

const genderOptions = [
	{ label: "Male", name: "gender" },
	{ label: "Female", name: "gender" },
];

const accessLevelConfig = [
	{ label: "Usuario", value: "user" },
	{ label: "Cliente", value: "customer" },
	{ label: "Administrador", value: "admin" },
];

//mock data
const countryDepartmentsConfig = [
	{ label: "Ahuachapán", value: "ahuachapán" },
	{ label: "Cabañas", value: "cabañas" },
	{ label: "Chalatenango", value: "chalatenango" },
	{ label: "Cuscatlán", value: "cuscatlán" },
	{ label: "La Libertad", value: "la libertad" },
	{ label: "La Paz", value: "la paz" },
	{ label: "La Unión", value: "la unión" },
	{ label: "Morazán", value: "morazán" },
	{ label: "San Miguel", value: "san miguel" },
	{ label: "San Salvador", value: "san salvador" },
	{ label: "San Vicente", value: "san vicente" },
	{ label: "Santa Ana", value: "santa ana" },
	{ label: "Sonsonate", value: "sonsonate" },
	{ label: "Usulután", value: "usulután" },
];

const countriesConfig = [
	{ label: "El Salvador", value: "el salvador" },
	{ label: "Costa Rica", value: "costa rica" },
	{ label: "Guatemala", value: "guatemala" },
];

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
		formState: { errors, isValid },
	} = useForm<Contact>({ mode: "onChange" });

	const toEditContact = useAppSelector(({ contacts }) =>
		contactId
			? contacts.contacts.find(contact => contact.id === contactId)
			: null,
	);

	const [specimen, setSpecimen] = useState(genderOptions[0].label);
	const [accessLevel, setAccessLevel] = useState<SelectOption | undefined>(
		accessLevelConfig[0],
	);
	const [countryDept, setCountryDept] = useState<SelectOption | undefined>(
		countryDepartmentsConfig[9],
	);

	const [country, setCountry] = useState<SelectOption | undefined>(
		countriesConfig[0],
	);

	console.log(isValid);
	console.log(specimen);

	//handlers

	const radioButtonChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSpecimen(e.target.value);
	};

	const submitButtonHandler: SubmitHandler<Contact> = (
		data,
		event: React.BaseSyntheticEvent<object, any, any> | undefined,
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
				setValue(field, toEditContact[field]),
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

						<Controller
							name="country"
							control={control}
							render={field => (
								<Select
									{...field}
									options={countriesConfig}
									value={country}
									onChange={country => {
										setCountry(country);
										if (country?.value) {
											setValue("country", country.value.toString());
										}
									}}
								/>
							)}
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
						<Controller
							name="department"
							control={control}
							render={field => (
								<Select
									{...field}
									options={countryDepartmentsConfig}
									value={countryDept}
									onChange={department => {
										setCountryDept(department);
										if (department?.value) {
											setValue(
												"department",
												department.value.toString(),
											);
										}
									}}
								/>
							)}
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
							<small>{errors.dob?.message}</small>
						</div>

						<div className="radiobuttons">
							<RadioButtonGroup
								label="Género"
								options={genderOptions}
								onChange={radioButtonChangeHandler}
								register={register}
							/>
						</div>

						<Controller
							name="accessLevel"
							control={control}
							render={field => (
								<Select
									{...field}
									options={accessLevelConfig}
									value={accessLevel}
									onChange={access => {
										setAccessLevel(access);
										if (access?.value) {
											setValue(
												"accessLevel",
												access.value.toString(),
											);
										}
									}}
								/>
							)}
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
						disabled={!isValid}
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
