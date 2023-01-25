import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { useForm } from "react-hook-form";
//components
import Input from "../Input/Input";

import styles from "./globalFilter.module.scss";

function GlobalFilter({ filter, setFilter }) {
	const [value, setValue] = useState(filter);

	const { register } = useForm();

	const onChangeHandler = useAsyncDebounce(
		value => setFilter(value || undefined),
		1000
	);

	const inputHandler = e => {
		setValue(e.target.value);
		onChangeHandler(e.target.value);
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
				label="Buscar Nombres, Apellidos..."
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
