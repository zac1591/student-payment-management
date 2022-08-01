// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./customDatePicker.module.scss";

function CustomDatePicker({ label, field, selected, onChange }) {
	// const [startDate, setStartDate] = useState(new Date());
	return (
		<>
			<p className={styles.label}>{label}</p>
			<DatePicker
				{...field}
				selected={selected}
				onChange={onChange}
				className={styles.datePicker}
				peekNextMonth
				showMonthDropdown
				showYearDropdown
				dropdownMode="select"
			/>
		</>
	);
}

export default CustomDatePicker;
