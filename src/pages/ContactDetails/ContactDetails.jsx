import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//components
import Card from "../../components/Card/Card";
import GoBack from "../../components/GoBack/GoBack";
import ClosableTag from "../../components/ClosableTag/ClosableTag";
import MessageCard from "../../components/MessageCard/MessageCard";
import AddNote from "../../components/AddNote/AddNote";

import styles from "./contactDetails.module.scss";
import Tabs from "../../components/UI/Tabs/Tabs";

const today = new Date();
console.log(today.toLocaleString());
const f = new Intl.DateTimeFormat("en-us", {
	dateStyle: "full",
});

const MOCK_DATA = [
	{
		id: window.crypto.randomUUID(),
		title: "Pago pendiente de diciembre",
		message: "Cliente se compromete a pagar mensualidad el dia 27 de enero.",
		date: f.format(today),
		time: "12:35 pm",
		day: "Tuesday",
		finances: {
			payments: [
				{
					id: crypto.randomUUID(),
					description: "Some payment description",
					amount: "150",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "400",
				},
			],
			debts: [
				{
					id: crypto.randomUUID(),
					description: "Some debts description",
					amount: "200",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "300",
				},
			],
		},
	},
	{
		id: window.crypto.randomUUID(),
		title: "Reclamo curso TEM",
		message: "Cliente expresa que instructor luce como bolito de apopa",
		date: f.format(today),
		time: "9:50 am",
		day: "Today",
		finances: {
			payments: [
				{
					id: crypto.randomUUID(),
					description: "Some payment description",
					amount: "150",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "400",
				},
			],
			debts: [
				{
					id: crypto.randomUUID(),
					description: "Some debts description",
					amount: "200",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "300",
				},
			],
		},
	},
	{
		id: window.crypto.randomUUID(),
		title: "Cliente paga anticipado",
		message: "Cliente pagó 3 cuotas adelantadas",
		date: f.format(today),
		time: "11:20 am",
		day: "Monday",
		finances: {
			payments: [
				{
					id: crypto.randomUUID(),
					description: "Some payment description",
					amount: "150",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "400",
				},
			],
			debts: [
				{
					id: crypto.randomUUID(),
					description: "Some debts description",
					amount: "200",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "300",
				},
			],
		},
	},
	{
		id: window.crypto.randomUUID(),
		title: "Cliente paga anticipado",
		message: "Cliente pagó 3 cuotas adelantadas",
		date: f.format(today),
		time: "11:20 am",
		day: "today",
		finances: {
			payments: [
				{
					id: crypto.randomUUID(),
					description: "Some payment description",
					amount: "150",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "400",
				},
			],
			debts: [
				{
					id: crypto.randomUUID(),
					description: "Some debts description",
					amount: "200",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "300",
				},
			],
		},
	},
	{
		id: window.crypto.randomUUID(),
		title: "Cliente no contento con el servicio",
		message: "Some random complaint",
		date: f.format(today),
		time: "11:20 am",
		day: "today",
		finances: {
			payments: [
				{
					id: crypto.randomUUID(),
					description: "Some payment description",
					amount: "150",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "400",
				},
			],
			debts: [
				{
					id: crypto.randomUUID(),
					description: "Some debts description",
					amount: "220",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "305",
				},
			],
		},
	},

	{
		id: window.crypto.randomUUID(),
		title: "Cliente no contento con el servicio",
		message: "Some random complaint",
		date: f.format(today),
		time: "11:20 am",
		day: "today",
		finances: {
			payments: [
				{
					id: crypto.randomUUID(),
					description: "Some payment description",
					amount: "350",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "100",
				},
			],
			debts: [
				{
					id: crypto.randomUUID(),
					description: "Some debts description",
					amount: "230",
				},
				{
					id: crypto.randomUUID(),
					description: "Some other description",
					amount: "370",
				},
			],
		},
	},
];

const tabsConfig = [
	{
		id: crypto.randomUUID(),
		title: "Pagos",
		component: "nameOfThecomponent",
	},
	{
		id: crypto.randomUUID(),
		title: "Deudas",
	},
	{
		id: crypto.randomUUID(),
		title: "Todo",
	},
]; //an array of objects describing the name of each nav element

function ContactDetails() {
	const [showAddNewMessage, setIsShowAddNewMessage] = useState(false);
	const contacts = useSelector(({ contacts }) => contacts.contacts);
	const params = useParams();
	const navigate = useNavigate();

	//useParams returns a string
	const selectedContact = contacts.find(({ id }) => id === +params.userId);

	const { first_name, last_name, phone_number, email, personal_id } =
		selectedContact;

	const goBackHandler = () => navigate("/contacts", { replace: true });

	return (
		<section className={styles.gridContainer}>
			<GoBack className={styles.goBackArrow} onClick={goBackHandler} />
			<div
				style={{
					display: "flex",
					gridArea: "menu-section",
					justifyContent: "space-around",
				}}
			>
				<span>Información General</span>
				<span>Notas</span>
				<span>tercera opcion</span>
			</div>
			<Card className={`${styles.card} ${styles.generalData}`}>
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
			<Card className={`${styles.card} ${styles.courses}`}>
				<div className={styles.cardHeader}>
					<span className={`material-icons-sharp ${styles.iconCard}`}>
						school
					</span>
					<h2>Cursos</h2>
				</div>
				<div>nombreDelCursoPagoUnico</div>
			</Card>
			<Card className={`${styles.card} ${styles.subscriptions}`}>
				<div className={styles.cardHeader}>
					<span className={`material-icons-sharp ${styles.iconCard}`}>
						card_membership
					</span>
					<h2>subscripciones</h2>
				</div>
				<ClosableTag tagName="PEM Premium Anual" />
			</Card>
			<Card className={`${styles.card} ${styles.balances}`}>
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

			<Card className={`${styles.card} ${styles.history}`}>
				<div className={styles.cardHeader}>
					<span className={`material-icons-sharp ${styles.iconCard}`}>
						history
					</span>
					<h2>Historial</h2>
				</div>
				<Tabs
					className={styles.historyTabs}
					TabNavItemConfig={tabsConfig}
				/>
			</Card>
			<div className={styles.messagesArea}>
				<div className={styles.messagesGrid}>
					{MOCK_DATA.map(message => (
						<MessageCard
							key={message.id}
							messageTitle={message.title}
							message={message.message}
							date={message.date}
							time={message.time}
							day={message.day}
						/>
					))}

					<span
						className={`material-icons-sharp ${styles.iconCard} ${
							styles.addNoteButton
						} ${showAddNewMessage ? styles.rotate : ""}`}
						onClick={() =>
							setIsShowAddNewMessage(prevState => !prevState)
						}
					>
						add_circle
					</span>
				</div>

				{showAddNewMessage && <AddNote />}
			</div>

			{/* <p>{`Params ID ${params.userId}`}</p> */}
		</section>
	);
}

export default ContactDetails;
