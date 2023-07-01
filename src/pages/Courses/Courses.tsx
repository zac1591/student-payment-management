import { useState, useEffect } from "react";
//components
import CourseTable from "../../components/CoursesTable/CourseTable";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import AddEditCourse from "../../components/AddEditCourse/AddEditCourse";
//redux
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { fetchCourses } from "../../store/courses/thunks-courses";
//styles
import styles from "./courses.module.scss";
//react table
import { columns } from "../../table-columns/COURSES_COLUMNS";

function Courses() {
	const [createCourseModal, setCreateCourseModal] = useState(false);
	const coursesFromState = useAppSelector(({ courses }) => courses.courses);
	const coursesStatus = useAppSelector(({ courses }) => courses.status);
	const dispatch = useAppDispatch();

	//handlers
	const showCreateCourseHandler = () => setCreateCourseModal(true);
	const hideCreateCourseHandler = () => setCreateCourseModal(false);

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
			<MenuDashboard />
			<main>
				<ActiveMenu
					buttonLabel="Crear Curso"
					currentPageTitle="Cursos"
					onShowItem={showCreateCourseHandler}
				/>
				<CourseTable
					columns={columns}
					navigatesTo="course"
					stateData={coursesFromState}
					onSelectCourseToEdit={() =>
						console.log("selecting course to edit")
					}
				/>
			</main>
		</section>
	);
}

export default Courses;
