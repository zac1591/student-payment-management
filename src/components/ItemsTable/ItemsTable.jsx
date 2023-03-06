import { useMemo } from "react";
//react router
import { useNavigate } from "react-router-dom";

//react table
import {
	useTable,
	usePagination,
	useSortBy,
	useRowSelect,
	useGlobalFilter,
} from "react-table";
//components
import Checkbox from "../Checkbox/Checkbox";
import GlobalFilter from "../GlobalFilter/GlobalFilter";
//redux
import { useDispatch } from "react-redux";
import { contactsActions } from "../../store/contacts/contactsSlice";
//styles
import styles from "./itemsTable.module.scss";

function ItemsTable({ COLUMNS, stateData, navigatesTo, onSelectContact }) {
	const columns = useMemo(() => COLUMNS, [COLUMNS]);
	const data = useMemo(() => stateData, [stateData]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		state,
		setGlobalFilter,
		prepareRow,
		selectedFlatRows,
	} = useTable(
		{ columns, data },
		useGlobalFilter,
		useSortBy,
		usePagination,
		useRowSelect,
		hooks => {
			hooks.visibleColumns.push(columns => {
				return [
					{
						id: "selection",
						Header: ({ getToggleAllRowsSelectedProps }) => (
							<Checkbox {...getToggleAllRowsSelectedProps()} />
						),
						Cell: ({ row }) => (
							<Checkbox
								{...row.getToggleRowSelectedProps()}
								onClick={onSelectContact}
							/>
						),
					},
					...columns,
				];
			});
		}
	);

	// const selectedRowHandler = row => {
	// 	navigate(`/contacts/${row.values.id}`, { replace: true });
	// };

	// dispatch(contactsActions.onSelectFlatRows(selectedFlatRows));

	//getting cell value to enable first name and last name to be clickable and navigate to the contacts details component
	const getCellValue = cell => {
		// console.log(cell.row.values);
		const selectedRowId = cell.row.values.id;
		if (
			cell.column.Header === "Nombre" ||
			cell.column.Header === "Apellido"
		) {
			navigate(`/${navigatesTo}/${selectedRowId}`, { replace: true });
		}
	};

	/*
		if a row is selected:
			1. Show component with options to perform within current row
			2. Capture data from current row and pass it on to components that needs it
			3. More than one row selected? Show bulk options only such as delete all rows or export them out
	*/

	//initialState: { pageIndex: 2 } this line of code will allow us to render our page to the specified index, it goes inside the first argument where we pass in our columns and data

	const { pageIndex, pageSize, globalFilter } = state;

	console.log("running table");
	console.log(selectedFlatRows);

	return (
		<>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<table className={styles.table} {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
								>
									{column.render("Header")}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? " ↓"
												: " ↑"
											: column.id === "selection"
											? ""
											: " ⇵"}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell, j) => {
									return (
										<td
											{...cell.getCellProps()}
											onClick={() => getCellValue(cell)}
										>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className={styles.pagination}>
				<span>
					Page{" "}
					<strong>{`${pageIndex + 1} of ${pageOptions.length} `}</strong>
				</span>
				<span>
					| Go to page:
					<input
						type="number"
						defaultValue={pageIndex + 1}
						onChange={e => {
							const pageNumber = e.target.value
								? Number(e.target.value) - 1
								: 0;
							gotoPage(pageNumber);
						}}
						style={{ width: "50px" }}
					/>
				</span>
				<select
					value={pageSize}
					onChange={e => setPageSize(Number(e.target.value))}
				>
					{[10, 25, 50].map(pageSize => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
				<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					{"<<"}
				</button>
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					Previous
				</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					Next
				</button>
				<button
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				>
					{">>"}
				</button>
			</div>
		</>
	);
}

export default ItemsTable;
