import { Row, flexRender } from "@tanstack/react-table";
import { Contact } from "../../types";

//event parameter type e: React.MouseEvent<HTMLTableRowElement, MouseEvent>

type ReadOnlyRowTypes = {
	row: Row<Contact>;
	onMouseEnter: (number: number) => void;
	onMouseLeave: () => void;
	onViewContactHandler: (headerId: string, rowInfo: Contact) => void;
};

function ReadOnlyRow({
	row,
	onMouseEnter,
	onMouseLeave,
	onViewContactHandler,
}: ReadOnlyRowTypes) {
	return (
		<tr
			key={row.id}
			onMouseEnter={() => onMouseEnter(row.original.id)}
			onMouseLeave={onMouseLeave}
			style={{ position: "relative" }}
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
		</tr>
	);
}

export default ReadOnlyRow;
