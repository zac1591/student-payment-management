import React from "react";
import { useForm } from "react-hook-form";

import Card from "../Card/Card";
import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./addNote.module.scss";

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
						className={styles.inputColor}
					/>
					<Input
						label="Nota"
						id="note"
						name="Nota"
						register={register}
						required
						type="textarea"
						className={styles.inputColor}
					/>
					<div className="form actions">
						<Button type="submit" small>
							Agregar
						</Button>
					</div>
				</form>
			</div>
		</Card>
	);
}

export default AddNote;
