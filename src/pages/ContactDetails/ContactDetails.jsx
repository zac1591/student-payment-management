import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

import styles from "./contactDetails.module.scss";

function ContactDetails() {
	const contacts = useSelector(({ lead }) => lead.leads);
	const params = useParams();
	//useParams returns a string
	const selectedContact = contacts.find(({ id }) => id == params.userId);

	const { first_name, last_name, phone_number, email, personal_id } =
		selectedContact;

	return (
		<section className={styles.gridContainer}>
			<Card className={styles.card}>
				<div className={styles.cardHeader}>
					<span className={`material-icons-sharp ${styles.iconCard}`}>
						face
					</span>
					<h2>{`${first_name} ${last_name}`}</h2>
				</div>
				<p>Teléfono: {phone_number}</p>
				<p>Email: {email}</p>
				<p>DUI {personal_id || "05709686-8"}</p>
			</Card>
			<Card className={styles.card}>
				<div className={styles.cardHeader}>
					<span className={`material-icons-sharp ${styles.iconCard}`}>
						school
					</span>
					<h2>Cursos Activos</h2>
				</div>
				<ul>
					<li>PHTLS</li>
					<li>ACLS</li>
				</ul>
			</Card>
			<Card className={styles.card}>
				<div className={styles.cardHeader}>
					<span className={`material-icons-sharp ${styles.iconCard}`}>
						paid
					</span>
					<h2>Balances</h2>
				</div>
				<div className={styles.totalsFlexContainer}>
					<div className={styles.totals}>
						<h4>Adeudado</h4>
						<p className={styles.due}>$100.00</p>
					</div>
					<div className={styles.totals}>
						<h4>Actualizado</h4>
						<p>$100.00</p>
					</div>
				</div>
			</Card>
			{/* End of basic info */}
			<div className={styles.recurringDebts}>
				<h3>Deudas Recurrentes</h3>
				<Card className={styles.card}>
					<ul>
						<li>Pago mensualidad TEM</li>
					</ul>
				</Card>
			</div>
			<div className={styles.personTags}>
				<h3>Etiquetas</h3>
				<Card className={styles.card}>
					<ul>
						<li>Alumno</li>
					</ul>
				</Card>
			</div>
			<div className={styles.debts}>
				<div className={styles.debtsFlexContainer}>
					<h3>Deudas</h3>
					<div className={styles.debts__control}>
						<button>Crear Pago</button>
						<button>Crear Deuda</button>
					</div>
				</div>
				<Card>Deudas</Card>
			</div>
			<p>{params.userId}</p>
		</section>
	);
}

export default ContactDetails;
