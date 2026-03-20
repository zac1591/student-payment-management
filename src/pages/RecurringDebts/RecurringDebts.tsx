import styles from "./recurringDebts.module.scss";
import InscriptionForm from "../../components/Inscription/InscriptionForm";
import InscriptionTable from "../../components/InscriptionTable";

function RecurringDebts() {
	return (
		<div className={styles.recurringDebts}>
			<h1>Agregar Inscripción</h1>
			<InscriptionForm />
			<InscriptionTable />
		</div>
	);
}

export default RecurringDebts;
