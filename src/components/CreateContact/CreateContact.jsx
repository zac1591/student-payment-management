import { useState } from "react";
import ReactDatePicker from "react-datepicker";

//redux
import { useDispatch } from "react-redux";
import { addLead } from "../../redux/lead/lead.actions";
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
	//state for datepicker component
	/*temporal solution*/
	const [dob, setDob] = useState(new Date());
	const [initialPayment, setInitialPayment] = useState(new Date());
	const [lastPayment, setLastPayment] = useState(new Date());

	/*Ends temporal solution*/

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
			first_name: data.firstName,
			last_name: data.lastName,
			email: data.email,
			phone_number: data.phoneNumber,
		};

		console.log(data);
		// dispatch(addLead(leadData));
		// event.target.reset();
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
							name="nombre"
							id="nombre"
							register={register}
							required
							type="text"
						/>
						<Input
							label="Apellido"
							name="Apellido"
							id="apellido"
							register={register}
							required
							type="text"
						/>
						<Input
							label="DUI"
							name="dui"
							id="dui"
							register={register}
							required
							type="text"
						/>

						<Input
							label="Teléfono"
							name="telefono"
							id="telefono"
							register={register}
							required
							type="text"
						/>
						<Input
							label="Correo"
							name="correo"
							id="correo"
							register={register}
							required
							type="email"
						/>
						<Input
							label="País"
							name="pais"
							id="pais"
							register={register}
							required
							type="text"
						/>
						<Input
							label="Dirección"
							name="direccion"
							id="direccion"
							register={register}
							required
							type="text"
						/>
					</div>
					<div className={styles.splitForm}>
						<Input
							label="Departamento"
							name="departamento"
							id="departamento"
							register={register}
							required
							type="text"
						/>

						<p>Fecha de Nacimiento</p>
						<Controller
							name="fechaNacimiento"
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
							name="genero"
							register={register}
							id="genero"
							options={{ masculino: "masculino", femenino: "femenino" }}
						/>
						<RadioButton
							label="Becado"
							name="becado"
							register={register}
							id="becado"
							options={{ si: "si", no: "no" }}
						/>

						<p>Fecha de Primera Cuota</p>
						<Controller
							name="fechaPrimeraCuota"
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
							name="fechaUltimaCuota"
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
							name="cursoSuscrito"
							id="cursoSuscrito"
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
