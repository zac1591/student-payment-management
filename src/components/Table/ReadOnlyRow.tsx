import { Row, flexRender } from "@tanstack/react-table";

//event parameter type e: React.MouseEvent<HTMLTableRowElement, MouseEvent>

type ReadOnlyRowTypes<T> = {
	row: Row<T>;
	onMouseEnter: (number: number) => void;
	onMouseLeave: () => void;
	onViewRowHandler: (headerId: string, rowInfo: T) => void;
};

function ReadOnlyRow<T extends { id: number }>({
	row,
	onMouseEnter,
	onMouseLeave,
	onViewRowHandler,
}: ReadOnlyRowTypes<T>) {
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
					onClick={() => onViewRowHandler(cell.column.id, row.original)}
				>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</td>
			))}
		</tr>
	);
}

export default ReadOnlyRow;
