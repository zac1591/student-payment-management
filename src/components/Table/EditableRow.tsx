//tanstack
import { Row, flexRender } from "@tanstack/react-table";
//styles
import styles from "./table.module.scss";

type EditableRowTypes<T> = {
	row: Row<T>;
	onMouseLeave: () => void;
	onViewRowHandler: (headerId: string, rowInfo: T) => void;
	onEditRowHandler: (id: number) => void;
	onDeleteRowHandler: (id: number) => void;
};

function EditableRow<T extends { id: number }>({
	row,
	onMouseLeave,
	onViewRowHandler,
	onEditRowHandler,
	onDeleteRowHandler,
}: EditableRowTypes<T>) {
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
						onClick={() => onViewRowHandler(cell.column.id, row.original)}
					>
						{flexRender(cell.column.columnDef.cell, cell.getContext())}
					</td>
				))}
				<td className={styles.contactActions}>
					{/* <span className="material-icons-sharp">visibility</span> */}
					<span
						className="material-icons-sharp"
						onClick={() => onEditRowHandler(row.original.id)}
					>
						edit_note
					</span>
					<span
						className="material-icons-sharp"
						onClick={() => onDeleteRowHandler(row.original.id)}
					>
						remove_circle
					</span>
				</td>
			</tr>
		</>
	);
}

export default EditableRow;
