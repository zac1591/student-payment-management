import ReactDatePicker from "react-datepicker";

//redux
import { useDispatch } from "react-redux";
import { groupsActions } from "../../store/groups/groupsSlice";
//react hook form
import { useForm, Controller, SubmitHandler } from "react-hook-form";

//component
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";

//types
import { Group } from "../../types";

// import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
//styles
import styles from "./createGroup.module.scss";
import "react-datepicker/dist/react-datepicker.css";


type groupProps = {
	onHideCreateContact: () => void
}

function CreateGroup({ onHideCreateContact }: groupProps) {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<Group>();

	const submitButtonHandler:SubmitHandler<Group>  = (data, event: React.BaseSyntheticEvent<object, any, any> | undefined) => {
		event?.preventDefault();
		// const buttonName = event.target.getAttribute("id");

		const groupData: Group = {
			id: crypto.randomUUID(),
			groupName: data.groupName,
			description: data.description,
			members: data.members,
			price: data.price,
			startDate: data.startDate,
			endDate: data.endDate,
			schedule: data.schedule
		};

		console.log(`El tipo de data es ${typeof groupData}`);
		console.log(groupData);
		// dispatch(groupsActions.addGroup(groupData));
		event?.target.reset();
		onHideCreateContact();
	}



	//onClick={handleSubmit(submitButtonHandler)}

	// const submitButtonHandler:SubmitHandler<newGroup>  = (data) => {
	// 	// const buttonName = event.target.getAttribute("id");

	// 	const groupData = {
	// 		id: crypto.randomUUID(),
	// 		groupName: data.groupName,
	// 		description: data.description,
	// 		members: data.members,
	// 		price: data.price,
	// 		startDate: data.startDate,
	// 		endDate: data.endDate,
	// 		schedule: data.schedule
	// 	};

	// 	console.log(`El tipo de data es ${typeof groupData}`);
	// 	console.log(groupData);
	// 	dispatch(groupsActions.addGroup(groupData));
	// 	reset();
	// 	onHideCreateContact();
	// }

	return (
		<Modal className={styles.modal} onHideCart={onHideCreateContact}>	
			<div className={styles.header}>
				<h3>Nuevo Grupo</h3>
			</div>
			<form onSubmit={handleSubmit(submitButtonHandler)}>
				<div className={styles.flexContainer}>
					<div className={styles.splitForm}>
						<Input
							label="Nombre del grupo"
							name="groupName"
							id="groupName"
							register={register}
							required='required'
							type="text"
						/>
						<Input
							label="Descripción"
							name="description"
							id="description"
							register={register}
							required='required'
							type="text"
						/>
						<Input
							label="Agregar miembros"
							name="members"
							id="members"
							register={register}
							required='required'
							type="text"
						/>

						<Input
							label="Precio"
							name="price"
							id="price"
							register={register}
							required='required'
							type="number"
						/>
					</div>
					<div className={styles.splitForm}>
						<div className={styles.formControl}>
							<p>Fecha de inicio</p>
							<Controller
								name="startDate"
								control={control}
								rules={{ required: true }}
								render={({ field: {value, onChange, ...rest} }) => (
									<ReactDatePicker
										{...rest}
										placeholderText="Seleccionar fecha"
										selected={value}
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
							<p>Fecha de finalizacion</p>
							<Controller
								name="endDate"
								control={control}
								rules={{ required: true }}
								render={({ field: {value, onChange, ...rest} }) => (
									<ReactDatePicker
										{...rest}
										placeholderText="Seleccionar fecha"
										selected={value}
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
						<Input
							label="Horario"
							name="schedule"
							id="schedule"
							register={register}
							required='required'
							type="text"
						/>
					</div>
				</div>

				<div className={styles.formActions}>
					<Button
						btnStylesConf={{ inverted: "inverted", small: "small", success: 'success' }}
						id='create-contact'
						type='submit'
					>
						Guardar
					</Button>
					<Button
						btnStylesConf={{ small: "small" }}
                        type='button'
						onClick={onHideCreateContact}
					>
						Cancelar
					</Button>
				</div>
			</form>
		</Modal>
	);
}

export default CreateGroup;
