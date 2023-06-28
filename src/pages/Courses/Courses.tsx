import { useState } from "react";
//components
import CourseTable from "../../components/CoursesTable/CourseTable";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import AddEditCourse from "../../components/AddEditCourse/AddEditCourse";
//redux
import { useAppSelector } from "../../hooks/storeHooks";
//styles
import styles from "./courses.module.scss";
//react table
import { columns } from "../../table-columns/COURSES_COLUMNS";

function Courses() {
	const [createCourseModal, setCreateCourseModal] = useState(false);
	const coursesFromState = useAppSelector(({ courses }) => courses.courses);

	//handlers
	const showCreateCourseHandler = () => setCreateCourseModal(true);
	const hideCreateCourseHandler = () => setCreateCourseModal(false);
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
