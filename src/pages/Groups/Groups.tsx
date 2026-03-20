import { useState, useEffect } from "react";

//components
import ActiveMenu from "../../components/ActiveMenu/ActiveMenu";
import MenuDashboard from "../../components/MenuDashboard/MenuDashboard";

//redux
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { fetchGroups } from "../../store/groups/thunks-groups";
//styles
import styles from "./groups.module.scss";
import AddEditGroup from "../../components/AddEditGroup/AddEditGroup";
import GroupCard from "../../components/GroupCard/GroupCard";

/*
What do I need to create a new groups?

1. Name
2. Description
3. Cap
4. Members (Add and remove members), this members should be retrieved from CRM data base as each member must have a profile
6. bulk upload
7. Price
8. starting and end date
9. schedule
*/

function Groups() {
	const [isShowingModal, setIsShowingModal] = useState(false);
	const groupsFromState = useAppSelector(({ groups }) => groups.groups);
	const groupsStatus = useAppSelector(({ groups }) => groups.status);
	const dispatch = useAppDispatch();

	const onShowModal: () => void = () => setIsShowingModal(true);
	const onHideModal: () => void = () => setIsShowingModal(false);

	useEffect(() => {
		if (groupsStatus === "idle") {
			dispatch(fetchGroups());
		}
	}, [groupsStatus, dispatch]);

	return (
		<section className={styles.container}>
			{isShowingModal && (
				<AddEditGroup onHideCreateGroup={onHideModal} editMode={false} />
			)}
			<MenuDashboard />
			<main>
				<ActiveMenu
					buttonLabel="Crear Grupo"
					currentPageTitle="Grupos"
					onShowItem={onShowModal}
				/>

				<div className={styles.kanvanContainer}>
					{Object.values(groupsFromState).map(group => (
						<GroupCard
							key={group.id}
							groupProps={{
								id: group.id,
								groupName: group.groupName,
								course: group.course,
								description: group.description,
								schedule: group.schedule,
								professor: group.professor,
								cap: group.cap,
								duration: group.duration,
							}}
						/>
					))}
				</div>
			</main>
		</section>
	);
}

export default Groups;
