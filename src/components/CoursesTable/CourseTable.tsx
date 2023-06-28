import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
//tanstack table
import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	ColumnDef,
	flexRender,
	getFilteredRowModel,
	getSortedRowModel,
	SortingState,
} from "@tanstack/react-table";
//types
import { Course } from "../../types";
//components
import GlobalFilter from "../GlobalFilter/GlobalFilter";

//styles
import styles from "./courseTable.module.scss";
// import ReadOnlyRow from "./ReadOnlyRow";
// import EditableRow from "./EditableRow";
import Card from "../Card/Card";

type CoursesTableProps = {
	columns: ColumnDef<Course>[];
	stateData: Course[];
	navigatesTo: string;
	onSelectCourseToEdit: (id: number) => void;
};

function CourseTable({
	columns,
	stateData,
	navigatesTo,
	onSelectCourseToEdit,
}: CoursesTableProps) {
	const [rowSelection, setRowSelection] = useState({});
	const [globalFilter, setGlobalFilter] = useState("");
	const [sorting, setSorting] = useState<SortingState>([]);
	const [isHovering, setIsHovering] = useState(false);
	const [editContactId, setEditContactId] = useState<null | number>(null);
	const columnsData = useMemo<ColumnDef<Course>[]>(() => columns, [columns]);
	const table = useReactTable({
		data: stateData,
		columns: columnsData,
		state: {
			rowSelection,
			globalFilter: globalFilter,
			sorting,
		},
		enableRowSelection: true,
		// enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true,
	});

	const navigate = useNavigate();

	//handlers
	const onMouseEnterHandler = (id: number) => {
		setIsHovering(true);
		setEditContactId(id);
		//receive id from row.original.id
	};
	const onMouseLeaveHandler = () => {
		setIsHovering(false);
	};

	const viewContactDetailsHandler = (
		headerId: string,
		rowInfo: Course
	): void => {
		//redirects to contact detail page when clicking anywhere on the row except the checkbox
		if (headerId !== "select") {
			navigate(`/${navigatesTo}/${rowInfo.id}`, { replace: true });
		}
	};

	const editCourseHandler = (id: number) => {
		onSelectCourseToEdit(id);
	};

	// console.log(table.getSelectedRowModel().flatRows.map(row => row.original))
	// console.log(table.getAllColumns().forEach(column => console.log(column)));

	return (
		<>
			{stateData.length === 0 ? (
				<h2 style={{ textAlign: "center", marginTop: "2rem" }}>
					No hay contáctos para mostrar
				</h2>
			) : (
				<>
					<GlobalFilter
						filter={globalFilter}
						setFilter={setGlobalFilter}
						label="Buscar Cursos"
					/>
					<Card className={styles.card}>
						<table className={styles.table}>
							<thead>
								{table.getHeaderGroups().map(headerGroup => (
									<tr key={headerGroup.id}>
										{headerGroup.headers.map(header => (
											<th key={header.id} colSpan={header.colSpan}>
												{header.isPlaceholder ? null : (
													<div
														{...{
															className:
																header.column.getCanSort()
																	? styles.isSortable
																	: "",
															onClick:
																header.column.getToggleSortingHandler(),
														}}
													>
														{flexRender(
															header.column.columnDef.header,
															header.getContext()
														)}
														{{
															asc: " 🔼",
															desc: " 🔽",
														}[
															header.column.getIsSorted() as string
														] ?? null}
													</div>
												)}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody>
								{table.getRowModel().rows.map(
									row => (
										<tr
											key={row.id}
											onMouseEnter={e => onMouseEnterHandler(45)}
											onMouseLeave={onMouseLeaveHandler}
											style={{ position: "relative" }}
										>
											{row.getVisibleCells().map(cell => (
												<td
													key={cell.id}
													onClick={() =>
														viewContactDetailsHandler(
															cell.column.id,
															row.original
														)
													}
												>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
													)}
												</td>
											))}
										</tr>
									)
									// row.original.id === editContactId && isHovering ? (
									// 	<EditableRow
									// 		key={row.id}
									// 		row={row}
									// 		onMouseLeave={onMouseLeaveHandler}
									// 		onViewContactHandler={
									// 			viewContactDetailsHandler
									// 		}
									// 		onEditContactHandler={editContactHandler}
									// 	/>
									// ) : (
									// 	<ReadOnlyRow
									// 		key={row.id}
									// 		row={row}
									// 		onMouseEnter={onMouseEnterHandler}
									// 		onMouseLeave={onMouseLeaveHandler}
									// 		onViewContactHandler={
									// 			viewContactDetailsHandler
									// 		}
									// 	/>
									// )
								)}
							</tbody>
						</table>
					</Card>
					<div className={styles.pagination}>
						<button
							className="border rounded p-1"
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}
						>
							<span className={`${styles.arrow} material-icons-sharp`}>
								keyboard_double_arrow_left
							</span>
						</button>
						<button
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							<span className={`${styles.arrow} material-icons-sharp`}>
								keyboard_arrow_left
							</span>
						</button>
						<button
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							<span className={`${styles.arrow} material-icons-sharp`}>
								keyboard_arrow_right
							</span>
						</button>
						<button
							onClick={() =>
								table.setPageIndex(table.getPageCount() - 1)
							}
							disabled={!table.getCanNextPage()}
						>
							<span className={`${styles.arrow} material-icons-sharp`}>
								keyboard_double_arrow_right
							</span>
						</button>
						<div style={{ display: "flex", gap: "0.5rem" }}>
							<p>Página</p>
							<span>
								{table.getState().pagination.pageIndex + 1} de{" "}
								{table.getPageCount()}
							</span>
						</div>
						<span style={{ display: "flex" }}>
							<p>| Ir a página:</p>
							<input
								style={{
									background: "none",
									border: "0",
									width: "50px",
									margin: "0 0 0 0.5rem",
								}}
								type="number"
								defaultValue={table.getState().pagination.pageIndex + 1}
								onChange={e => {
									const page = e.target.value
										? Number(e.target.value) - 1
										: 0;
									table.setPageIndex(page);
								}}
							/>
						</span>
						<select
							value={table.getState().pagination.pageSize}
							onChange={e => {
								table.setPageSize(Number(e.target.value));
							}}
							className={styles.selectPage}
						>
							{[10, 20, 30, 40, 50].map(pageSize => (
								<option key={pageSize} value={pageSize}>
									Mostrar {pageSize}
								</option>
							))}
						</select>
						<div>{table.getRowModel().rows.length} Filas</div>
					</div>
				</>
			)}
		</>
	);
}

export default CourseTable;
