import { useForm } from "react-hook-form";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";

import Card from "../Card/Card";
import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./addNote.module.scss";

const onChangeDatePicker: DatePickerProps["onChange"] = (date, dateString) => {
	console.log(dateString);
};

function AddNote() {
	const { register } = useForm();
	return (
		<Card className={styles.card}>
			<div className={styles.cardHeader}>
				<p>Agregar Nota</p>
			</div>
			<div className={styles.cardBody}>
				<form encType="">
					<Input
						label="Título"
						id="title"
						name="Titulo"
						register={register}
						required
						type="text"
					/>
					<Input
						label="Nota"
						id="note"
						name="Nota"
						register={register}
						required
						type="textarea"
					/>
					<p>Agendar pago</p>
					<DatePicker onChange={onChangeDatePicker} />
					<div className="form actions">
						<Button btnStylesConf={{ small: "small" }} type="submit">
							Agregar
						</Button>
					</div>
				</form>
			</div>
		</Card>
	);
}

export default AddNote;
