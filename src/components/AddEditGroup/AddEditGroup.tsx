import { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
//redux
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { addGroup, submitEditedData } from "../../store/groups/groupsSlice";
//react hook form
import { useForm, Controller, SubmitHandler } from "react-hook-form";
//component
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
//types
import { Group } from "../../types";
//utils
import { strToDate } from "../../utils/utils";
//styles
import styles from "./addEditGroup.module.scss";
import "react-datepicker/dist/react-datepicker.css";


type groupProps = {
	onHideCreateGroup: () => void,
	editMode: boolean,
	groupId?: string
}

function AddEditGroup({ onHideCreateGroup, editMode, groupId }: groupProps) {
	const toEditGroup = useAppSelector(({ groups }) => groupId ? groups.groups[groupId] : null)
	const dispatch = useAppDispatch();
	// const toEditGroup = useAppSelector(({ groups }) => groups.isEditing)
	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
		reset,
	} = useForm<Group>();

	const submitHandler:SubmitHandler<Group>  = (data, event: React.BaseSyntheticEvent<object, any, any> | undefined) => {
		event?.preventDefault();
		// const buttonName = event.target.getAttribute("id");

		return editMode ? updateGroup(data) : createGroup(data)
	}

	const createGroup = (data: Group) => {
		const groupData = {
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
		dispatch(addGroup(groupData));
		reset()
		onHideCreateGroup();
	}

	const updateGroup = (data: Group) => {
		// console.log(data)
		dispatch(submitEditedData(data))
		reset()
		onHideCreateGroup();
	}

	//if form component is being used for editing an entry
	useEffect(() => {
		if(editMode && toEditGroup !== null) {
			//set state with the given object and make the form aware of it so we can populate the to be edited data.
	
			//geting data from store
			(Object.keys(toEditGroup) as Array<keyof Group>).forEach(field => setValue(field, toEditGroup[field]));
		}
	}, [])

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
		<Modal className={styles.modal} onHideCart={onHideCreateGroup}>	
			<div className={styles.header}>
				<h3>{editMode ? 'Editar Grupo': 'Nuevo Grupo'}</h3>
			</div>
			<form onSubmit={handleSubmit(submitHandler)}>
				<div className={styles.flexContainer}>
					<div className={styles.splitForm}>
						<Input
							label="Nombre del grupo"
							name="groupName"
							id="groupName"
							register={register}
							required
							type="text"
						/>
						<small>{errors.groupName?.message}</small>
						<Input
							label="Descripción"
							name="description"
							id="description"
							register={register}
							required
							type="text"
						/>
						<small>{errors.description?.message}</small>
						<Input
							label="Agregar miembros"
							name="members"
							id="members"
							register={register}
							required
							type="text"
						/>
						<small>{errors.members?.message}</small>
						<Input
							label="Precio"
							name="price"
							id="price"
							register={register}
							required
							type="number"
						/>
						<small>{errors.price?.message}</small>
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
							<p>Fecha de finalizacion</p>
							<Controller
								name="endDate"
								control={control}
								rules={{ required: true }}
								render={({ field: {value, onChange, ...rest} }) => (
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
						<Input
							label="Horario"
							name="schedule"
							id="schedule"
							register={register}
							required
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
						onClick={onHideCreateGroup}
					>
						Cancelar
					</Button>
				</div>
			</form>
		</Modal>
	);
}

export default AddEditGroup;
