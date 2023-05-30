import { Row, flexRender } from "@tanstack/react-table";
import { Contact } from "../../types";

type EditableRowTypes = {
	row: Row<Contact>;
	onMouseEnter: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
	onMouseLeave: () => void;
	onViewContactHandler: (headerId: string, rowInfo: Contact) => void;
};

function EditableRow({
	row,
	onMouseEnter,
	onMouseLeave,
	onViewContactHandler,
}: EditableRowTypes) {
	return (
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
			<td
				style={{
					position: "absolute",
					right: "10px",
					filter: "drop-shadow(0px 0px 1px #7380ec)",
					display: "flex",
					gap: "1rem",
				}}
			>
				{/* <span className="material-icons-sharp">visibility</span> */}
				<span className="material-icons-sharp">edit_note</span>
				<span className="material-icons-sharp">remove_circle</span>
			</td>
		</tr>
	);
}

export default EditableRow;
