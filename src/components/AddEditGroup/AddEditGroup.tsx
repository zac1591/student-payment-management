import { useEffect } from "react";
// import ReactDatePicker from "react-datepicker";
//redux
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
// import { addGroup, submitEditedData } from "../../store/groups/groupsSlice";
import { addNewGroup, editGroup } from "../../store/groups/thunks-groups";
//react hook form
import { useForm, Controller, SubmitHandler } from "react-hook-form";
//component
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
//types
import { Group } from "../../types";
//utils
// import { strToDate } from "../../utils/utils";
//styles
import styles from "./addEditGroup.module.scss";
import "react-datepicker/dist/react-datepicker.css";

type groupProps = {
	onHideCreateGroup: () => void;
	editMode: boolean;
	groupId?: number;
};

function AddEditGroup({ onHideCreateGroup, editMode, groupId }: groupProps) {
	const toEditGroup = useAppSelector(({ groups }) =>
		groupId ? groups.groups[groupId] : null
	);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
		reset,
	} = useForm<Group>();

	const submitHandler: SubmitHandler<Group> = (
		data,
		event: React.BaseSyntheticEvent<object, any, any> | undefined
	) => {
		event?.preventDefault();
		// const buttonName = event.target.getAttribute("id");

		return editMode ? updateGroup(data) : createGroup(data);
	};

	const createGroup = (data: Group) => {
		// const groupData = {
		// 	id: crypto.randomUUID(),
		// 	groupName: data.groupName,
		// 	course: data.course,
		// 	description: data.description,
		// 	schedule: data.schedule,
		// 	professor: data.professor,
		// 	capacity: data.capacity,
		// 	duration: data.duration,
		// };

		console.log(data);
		dispatch(addNewGroup(data));
		reset();
		onHideCreateGroup();
	};

	const updateGroup = (data: Group) => {
		// console.log(data)
		dispatch(editGroup(data));
		reset();
		onHideCreateGroup();
	};

	//if form component is being used for editing an entry
	useEffect(() => {
		if (editMode && toEditGroup !== null) {
			//set state with the given object and make the form aware of it so we can populate the to be edited data.

			//geting data from store
			(Object.keys(toEditGroup) as Array<keyof Group>).forEach(field =>
				setValue(field, toEditGroup[field])
			);
		}
		console.log("effect runnning");
	}, [setValue, editMode, toEditGroup]);

	return (
		<Modal className={styles.modal} onHideCart={onHideCreateGroup}>
			<div className={styles.header}>
				<h3>{editMode ? "Editar Grupo" : "Nuevo Grupo"}</h3>
			</div>
			<form onSubmit={handleSubmit(submitHandler)} noValidate>
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
							label="Curso"
							name="course"
							id="course"
							register={register}
							required
							type="text"
						/>
						<small>{errors.course?.message}</small>
						<Input
							label="Descripción"
							name="description"
							id="description"
							register={register}
							required
							type="text"
						/>
						<small>{errors.description?.message}</small>
						{/* <Input
							label="Agregar miembros"
							name="members"
							id="members"
							register={register}
							required
							type="text"
						/>
						<small>{errors.members?.message}</small> */}
					</div>
					<div className={styles.splitForm}>
						{/* <div className={styles.formControl}>
							<p>Fecha de inicio</p>
							<Controller
								name="startDate"
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
							<small>{errors.startDate?.message}</small>
						</div> */}

						<Input
							label="Horario"
							name="schedule"
							id="schedule"
							register={register}
							required
							type="text"
						/>
						<small>{errors.schedule?.message}</small>
						<Input
							label="Profesor"
							name="professor"
							id="professor"
							register={register}
							required
							type="text"
						/>
						<small>{errors.professor?.message}</small>
						<Input
							label="Duración"
							name="duration"
							id="duration"
							register={register}
							required
							type="text"
						/>
						<small>{errors.duration?.message}</small>
						<Input
							label="Capacidad"
							name="capacity"
							id="capacity"
							register={register}
							required
							type="text"
						/>
						<small>{errors.capacity?.message}</small>
					</div>
				</div>

				<div className={styles.formActions}>
					<Button
						btnStylesConf={{
							inverted: "inverted",
							small: "small",
							success: "success",
						}}
						id="create-contact"
						type="submit"
					>
						Guardar
					</Button>
					<Button
						btnStylesConf={{ small: "small" }}
						type="button"
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
