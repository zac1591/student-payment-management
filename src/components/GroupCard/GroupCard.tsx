import { useState } from "react";
//redux
import { useAppDispatch } from "../../hooks/storeHooks";
import { deleteGroup } from "../../store/groups/thunks-groups";
//types
import { Group } from "../../types";
//components
import Card from "../Card/Card";
import ContextMenu from "../../components/ContextMenu/ContextMenu";
//utils
// import { formatter } from "../../utils/utils";
//styles
import styles from "./groupCard.module.scss";
import AddEditGroup from "../AddEditGroup/AddEditGroup";

type groupCardPropsType = {
	groupProps: Group;
};

function GroupCard({ groupProps }: groupCardPropsType) {
	const [showContextMenu, setContextMenu] = useState(false);
	const [isShowingEditForm, setIsShowingEditForm] = useState(false);
	const dispatch = useAppDispatch();

	const editHandler = (): void => {
		setIsShowingEditForm(true);
	};

	const deleteHandler = (): void => {
		dispatch(deleteGroup(groupProps.id));
	};

	const GroupContextMenu = [
		{
			id: "groupAddID",
			name: "Agregar Miembro",
			handler: () => console.log("boton agregar"),
		},
		{ id: "groupEditID", name: "Editar", handler: editHandler },
		{ id: "groupDeleteID", name: "Borrar", handler: deleteHandler },
	];

	// const _startDate = formatter.format(new Date(groupProps.startDate));
	// const _endDate = formatter.format(new Date(groupProps.endDate));

	//handlers
	const onShowOptionsContextHandler = () =>
		setContextMenu(prevState => !prevState);

	const onHideEditModal = () => {
		setIsShowingEditForm(false);
		onShowOptionsContextHandler();
	};

	return (
		<>
			{isShowingEditForm && (
				<AddEditGroup
					onHideCreateGroup={onHideEditModal}
					editMode={true}
					groupId={groupProps.id}
				/>
			)}
			<Card className={styles.card}>
				{showContextMenu && (
					<ContextMenu key={groupProps.id} options={GroupContextMenu} />
				)}
				<div className={styles.header}>
					<div className={styles.groupName}>
						<span className={`material-icons-sharp ${styles.groupIcon}`}>
							group
						</span>
						<h3>{groupProps.groupName}</h3>
					</div>
					<span
						tabIndex={0}
						className={`material-icons-sharp ${styles.optionsIcon}`}
						onClick={onShowOptionsContextHandler}
						onBlur={() => setContextMenu(false)}
					>
						more_horiz
					</span>
				</div>
				<div className={styles.body}>
					{/* <p>
						<span>Curso:</span> {groupProps.course}
					</p> */}
					<p>
						<span>Instructor:</span> {groupProps.professor}
					</p>
					<hr />
					<p
						onClick={() =>
							alert(
								"A list of members and some action will be displayed here"
							)
						}
						style={{ cursor: "pointer" }}
					>
						<span>Miembros Activos:</span> 45
					</p>
					<p>
						<span>Capacidad:</span> {groupProps.capacity}
					</p>
					<hr />
					<p>
						<span>Duración:</span> {groupProps.duration} meses
					</p>
					<p>
						<span>Horario:</span> {groupProps.schedule}
					</p>
				</div>
			</Card>
		</>
	);
}

export default GroupCard;
