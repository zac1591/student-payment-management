import { useState, useEffect } from "react";
//components

import Table from "../../components/Table/Table";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import AddEditCourse from "../../components/AddEditCourse/AddEditCourse";
//redux
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { fetchCourses, deleteCourse } from "../../store/courses/thunks-courses";
//styles
import styles from "./courses.module.scss";
//react table
import { columns } from "../../table-columns/COURSES_COLUMNS";

function Courses() {
	const [createCourseModal, setCreateCourseModal] = useState(false);
	const [showEditCourseModal, setShowEditCourseModal] = useState(false);
	const [idCourseToEdit, setIdCourseToEdit] = useState<number | undefined>(
		undefined
	);
	const coursesFromState = useAppSelector(({ courses }) => courses.courses);
	const coursesStatus = useAppSelector(({ courses }) => courses.status);
	const dispatch = useAppDispatch();

	//handlers
	const showCreateCourseHandler = () => setCreateCourseModal(true);
	const hideCreateCourseHandler = () => setCreateCourseModal(false);

	const showEditCourseHandler = () => setShowEditCourseModal(true);
	const hideEditCourseHandler = () => setShowEditCourseModal(false);

	const editCourseHandler = (id: number) => {
		setIdCourseToEdit(id);
		showEditCourseHandler();
	};

	const deleteContactHandler = (id: number) => {
		dispatch(deleteCourse(id));
	};

	useEffect(() => {
		if (coursesStatus === "idle") {
			dispatch(fetchCourses());
		}
	}, [coursesStatus, dispatch]);

	return (
		<section className={styles.container}>
			{createCourseModal && (
				<AddEditCourse
					onHideCreateCourse={hideCreateCourseHandler}
					editMode={false}
				/>
			)}

			{showEditCourseModal && (
				<AddEditCourse
					onHideCreateCourse={hideEditCourseHandler}
					editMode={true}
					courseId={idCourseToEdit}
				/>
			)}
			<MenuDashboard />
			<main>
				<ActiveMenu
					buttonLabel="Crear Curso"
					currentPageTitle="Cursos"
					onShowItem={showCreateCourseHandler}
				/>
				{/* <CourseTable
					columns={columns}
					navigatesTo="course"
					stateData={coursesFromState}
					onEditRow={editCourseHandler}
					onDeleteRow={deleteContactHandler}
				/> */}
				<Table
					columns={columns}
					stateData={coursesFromState}
					onEditRow={editCourseHandler}
					onDeleteRow={deleteContactHandler}
					globalFilterLabel="Burcar Cursos"
				/>
			</main>
		</section>
	);
}

export default Courses;
