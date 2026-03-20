import { useEffect } from "react";
import dayjs from "dayjs";
//redux
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { addNewCourse, editCourse } from "../../store/courses/thunks-courses";
//react hook form
import { useForm, Controller, SubmitHandler } from "react-hook-form";
//component
import Button from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
// import RadioButton from "../RadioButton/RadioButton";
//types
import { Course } from "../../types";
//utils
// import { strToDate } from "../../utils/utils";
import { DatePicker, Checkbox } from "antd";
//styles
import styles from "./addEditCourse.module.scss";

// import type { DatePickerProps } from "antd";

type courseProps = {
	onHideCreateCourse: () => void;
	editMode: boolean;
	courseId?: number;
};

function AddEditCourse({
	onHideCreateCourse,
	editMode,
	courseId,
}: courseProps) {
	const toEditCourse = useAppSelector(({ courses }) =>
		courseId ? courses.courses.find(course => course.id === courseId) : null,
	);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
		reset,
	} = useForm<Course>();

	const submitHandler: SubmitHandler<Course> = (
		data,
		event: React.BaseSyntheticEvent<object, any, any> | undefined,
	) => {
		event?.preventDefault();
		// const buttonName = event.target.getAttribute("id");

		return editMode ? updateCourseHandler(data) : createCourseHandler(data);
	};

	const createCourseHandler = (data: Course) => {
		console.log(data);
		dispatch(addNewCourse(data));
		reset();
		onHideCreateCourse();
	};

	const updateCourseHandler = (data: Course) => {
		dispatch(editCourse(data));
		reset();
		onHideCreateCourse();
	};

	//if form component is being used for editing an entry
	useEffect(() => {
		if (editMode && toEditCourse !== null && toEditCourse !== undefined) {
			//set state with the given object and make the form aware of it so we can populate the to be edited data.

			//geting data from store
			(Object.keys(toEditCourse) as Array<keyof Course>).forEach(field =>
				setValue(field, toEditCourse[field]),
			);
		}
		console.log("effect runnning");
	}, [setValue, editMode, toEditCourse]);

	return (
		<Modal className={styles.modal} onHideCart={onHideCreateCourse}>
			<div className={styles.header}>
				<h3>{editMode ? "Editar Curso" : "Nuevo Curso"}</h3>
			</div>
			<form onSubmit={handleSubmit(submitHandler)} noValidate>
				<div className={styles.flexContainer}>
					<div className={styles.splitForm}>
						<Input
							label="Nombre del Curso"
							name="courseName"
							id="courseName"
							register={register}
							required
							type="text"
						/>
						<small>{errors.courseName?.message}</small>
						<Input
							label="Precio"
							name="coursePrice"
							id="coursePrice"
							register={register}
							required
							type="number"
						/>
						<small>{errors.coursePrice?.message}</small>
						<Input
							label="Matricula"
							name="registrationFee"
							id="registrationFee"
							register={register}
							required={false}
							type="number"
						/>
						<small>{errors.registrationFee?.message}</small>
						<Input
							label="Descripción"
							name="courseDescription"
							id="courseDescription"
							register={register}
							required={false}
							type="text"
						/>
						<small>{errors.courseDescription?.message}</small>
					</div>
					<div className={styles.splitForm}>
						<div className={styles.formControl}>
							<p>Fecha de inicio</p>
							<Controller
								name="startDate"
								control={control}
								rules={{ required: true }}
								render={({ field: { value, onChange, ...rest } }) => (
									<DatePicker
										{...rest}
										value={value ? dayjs(value) : null}
										onChange={(date, dateString) =>
											onChange(
												date ? date.format("YYYY-MM-DD") : null,
											)
										}
									/>
								)}
							/>
							<small>{errors.startDate?.message}</small>
						</div>

						<div className={styles.formControl}>
							<p>Fecha de Finalización</p>
							<Controller
								name="endDate"
								control={control}
								rules={{ required: true }}
								render={({ field: { value, onChange, ...rest } }) => (
									<DatePicker
										{...rest}
										value={value ? dayjs(value) : null}
										onChange={(date, dateString) =>
											onChange(
												date ? date.format("YYYY-MM-DD") : null,
											)
										}
									/>
								)}
							/>
							<small>{errors.endDate?.message}</small>
						</div>
						{/* come back to refactor radio button component as it doesn not working when editing */}
						{/* <RadioButton
							label="Disponible"
							name="isAvailable"
							register={register}
							id="isAvailable"
							options={{ si: true, no: false }}
						/> */}
						<div className={styles.formControl}>
							<p>Disponibilidad del curso</p>
							<Controller
								name="isAvailable"
								control={control}
								render={({ field: { value, onChange, ...rest } }) => (
									<Checkbox
										{...rest}
										value={value}
										checked={value}
										onChange={e => onChange(e.target.checked)}
									>
										Disponible
									</Checkbox>
								)}
							/>
						</div>
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
						onClick={onHideCreateCourse}
					>
						Cancelar
					</Button>
				</div>
			</form>
		</Modal>
	);
}

export default AddEditCourse;
