import { useState, useEffect } from "react";
// import { useAsyncDebounce } from "react-table";
import useDebounce from "../../hooks/use-debounce";
import { useForm } from "react-hook-form";
//components
import Input from "../Input/Input";

import styles from "./globalFilter.module.scss";

function GlobalFilter({ filter, setFilter, label }) {
	const [value, setValue] = useState(filter);
	const { register } = useForm();
	const debounced = useDebounce(value, 300);

	// const onChangeHandler = useAsyncDebounce(
	// 	value => setFilter(value || undefined),
	// 	1000
	// );
	useEffect(() => {
		setFilter(debounced);
	}, [debounced, setFilter]);

	const inputHandler = e => {
		setValue(e.target.value);
		// onChangeHandler(e.target.value);
	};

	return (
		<div className={styles.globalFilter}>
			<span
				className="material-icons-sharp"
				style={{ position: "relative", top: "0.8rem" }}
			>
				search
			</span>
			<Input
				label={label}
				id="searchBar"
				name="searchBar"
				register={register}
				required
				type="text"
				value={value || ""}
				className={styles.searchInput}
				onChange={inputHandler}
			/>
		</div>
	);
}

export default GlobalFilter;
