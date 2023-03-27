import Card from "../Card/Card";
import styles from "./insightCard.module.scss";

const iconClasses = {
	success: styles.success,
	warning: styles.warning,
	danger: styles.danger,
	normal: ''
};

type PropsTypes = {
	icon: string;
	title: string;
	amount: string;
	percentage: string;
	color: 'normal'| 'success' | 'warning' | 'danger';
}

function InsightCard({ icon, title, amount, percentage, color }: PropsTypes) {
	const circleClasses = title.toLocaleLowerCase().includes("deudas")
		? styles.circleExpenses
		: title.toLocaleLowerCase().includes("pagados")
		? styles.circleIncome
		: styles.circleSales;
		
	return (
		<Card className={styles.cardInsight}>
			<span className={`material-icons-sharp ${iconClasses[color]}`}>
				{icon}
			</span>
			<div className={styles.middle}>
				<div className={styles.left}>
					<h3>{title}</h3>
					<h1>${amount}</h1>
				</div>
				<div className={styles.progress}>
					<svg>
						<circle
							className={circleClasses}
							cx="38"
							cy="38"
							r="36"
						></circle>
					</svg>
					<div className={styles.number}>
						<p>{percentage}%</p>
					</div>
				</div>
			</div>
			<small className={styles["text-muted"]}>Last 24 hours</small>
		</Card>
	);
}

export default InsightCard;
