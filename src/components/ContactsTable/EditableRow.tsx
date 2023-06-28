//tanstack
import { Row, flexRender } from "@tanstack/react-table";
//types
import { Contact } from "../../types";
//redux
import { useAppDispatch } from "../../hooks/storeHooks";
import { deleteContact } from "../../store/contacts/thunks-contacts";
//styles
import styles from "./contactsTable.module.scss";

type EditableRowTypes = {
	row: Row<Contact>;
	onMouseLeave: () => void;
	onViewContactHandler: (headerId: string, rowInfo: Contact) => void;
	onEditContactHandler: (id: number) => void;
};

function EditableRow({
	row,
	onMouseLeave,
	onViewContactHandler,
	onEditContactHandler,
}: EditableRowTypes) {
	const dispatch = useAppDispatch();

	//handlers

	const deleteContactHandler = (id: number) => {
		dispatch(deleteContact(id));
	};
	return (
		<>
			<tr
				key={row.id}
				style={{ position: "relative" }}
				onMouseLeave={onMouseLeave}
			>
				{row.getVisibleCells().map(cell => (
					<td
						key={cell.id}
						onClick={() =>
							onViewContactHandler(cell.column.id, row.original)
						}
					>
						{flexRender(cell.column.columnDef.cell, cell.getContext())}
					</td>
				))}
				<td className={styles.contactActions}>
					{/* <span className="material-icons-sharp">visibility</span> */}
					<span
						className="material-icons-sharp"
						onClick={() => onEditContactHandler(row.original.id)}
					>
						edit_note
					</span>
					<span
						className="material-icons-sharp"
						onClick={() => deleteContactHandler(row.original.id)}
					>
						remove_circle
					</span>
				</td>
			</tr>
		</>
	);
}

export default EditableRow;
