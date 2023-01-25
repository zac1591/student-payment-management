import ReactDatePicker from "react-datepicker";

//redux
import { useDispatch } from "react-redux";
import { contactsActions } from "../../store/contacts/contactsSlice";
//react hook form
import { useForm, Controller } from "react-hook-form";

//component
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import RadioButton from "../RadioButton/RadioButton";
// import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
//styles
import styles from "./CreateContact.module.scss";
import "react-datepicker/dist/react-datepicker.css";

function CreateContact({ onHideCreateContact }) {
	// const [startDate, setStartDate] = useState({ fields: {} });

	// const dateChangeHandler = (datePickerName, dateValue) => {
	// 	setStartDate(prevState => {
	// 		return {
	// 			...prevState,
	// 			[datePickerName]: dateValue,
	// 		};
	// 	});
	// };

	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		resetField,
		control,
		formState: { errors },
	} = useForm();

	const submitButtonHandler = (data, event) => {
		event.preventDefault();
		// const buttonName = event.target.getAttribute("id");

		const leadData = {
			id: Math.random() * 100,
			first_name: data.firstName,
			last_name: data.lastName,
			email: data.email,
			phone_number: data.phone,
			scholarship: data.scholarship,
		};

		console.log(data);
		dispatch(contactsActions.addLead(leadData));
		event.target.reset();
		onHideCreateContact();
	};

	//onClick={handleSubmit(submitButtonHandler)}
	return (
		<Modal>
			<div className={styles.header}>
				<h3>Nuevo Alumno</h3>
			</div>
			<form onSubmit={handleSubmit(submitButtonHandler)}>
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
						<Input
							label="Apellido"
							name="lastName"
							id="lastName"
							register={register}
							required
							type="text"
						/>
						<Input
							label="DUI"
							name="personalId"
							id="personalId"
							register={register}
							required
							type="text"
						/>

						<Input
							label="Teléfono"
							name="phone"
							id="phone"
							register={register}
							required
							type="text"
						/>
						<Input
							label="Correo"
							name="email"
							id="email"
							register={register}
							required
							type="email"
						/>
						<Input
							label="País"
							name="country"
							id="country"
							register={register}
							required
							type="text"
						/>
						<Input
							label="Dirección"
							name="address"
							id="address"
							register={register}
							required
							type="text"
						/>
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

						<p>Fecha de Nacimiento</p>
						<Controller
							name="dateOfBirth"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<ReactDatePicker
									{...field}
									placeholderText="Seleccionar fecha"
									selected={field.value}
									onChange={e => field.onChange(e)}
									peekNextMonth
									showMonthDropdown
									showYearDropdown
									dropdownMode="select"
									className={styles.datePicker}
								/>
							)}
						/>

						<RadioButton
							label="Genero"
							name="gender"
							register={register}
							id="genero"
							options={{ masculino: "masculino", femenino: "femenino" }}
						/>
						<RadioButton
							label="Becado"
							name="scholarship"
							register={register}
							id="scholarship"
							options={{ si: "si", no: "no" }}
						/>

						<p>Fecha de Primera Cuota</p>
						<Controller
							name="firstPaymentDate"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<ReactDatePicker
									{...field}
									placeholderText="Seleccionar fecha"
									selected={field.value}
									onChange={e => field.onChange(e)}
									peekNextMonth
									showMonthDropdown
									showYearDropdown
									dropdownMode="select"
									className={styles.datePicker}
								/>
							)}
						/>
						<p>Fecha de la Última Cuota</p>
						<Controller
							name="lastPaymentDate"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<ReactDatePicker
									{...field}
									placeholderText="Seleccionar fecha"
									selected={field.value}
									onChange={e => field.onChange(e)}
									peekNextMonth
									showMonthDropdown
									showYearDropdown
									dropdownMode="select"
									className={styles.datePicker}
								/>
							)}
						/>

						<Input
							label="Cursos Suscrito"
							name="enrolledCourse"
							id="enrolledCourse"
							register={register}
							required
							type="text"
						/>
					</div>
				</div>

				<div className={styles.formActions}>
					<Button inverted small type="submit" id="create-contact">
						Crear contácto
					</Button>
					<Button small type="button" onClick={onHideCreateContact}>
						Cancelar
					</Button>
				</div>
			</form>
		</Modal>
	);
}

export default CreateContact;
