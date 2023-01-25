import { useState, useEffect } from "react";

//componets
import Card from "../Card/Card";
//assets
import AvatarImg from "../../assets/profile-3.jpg";

import styles from "./messageCard.module.scss";

function MessageCard({ messageTitle, message, date, time, day }) {
	const [isShowHeaderDate, setIsShowHeaderDate] = useState(true);

	useEffect(() => {
		if (day.includes("today")) {
			setIsShowHeaderDate(false);
		}
	}, [day]);

	let classesTopCard = !isShowHeaderDate ? styles.marginTopOneRem : "";

	return (
		<>
			{isShowHeaderDate && (
				<div className={styles.groupHeader}>
					<div className={styles.groupTitle}>{day}</div>
					<div className={styles.groupDate}>{date}</div>
				</div>
			)}
			<div className={styles.outterCard}>
				<div className={`${styles.avatar} ${classesTopCard}`}>
					<img className={styles.avatarImg} src={AvatarImg} alt="" />
				</div>
				<Card
					className={`${styles.card} ${styles.messageCard} ${classesTopCard}`}
				>
					<div className={styles.cardHeader}>
						<span
							className={`material-icons-sharp ${styles.iconCard} ${styles.messageIcon}`}
						>
							notes
						</span>
						<div className={styles.messagetitle}>{messageTitle}</div>
						<div className={styles.messegeTime}>{time}</div>
					</div>
					<div className="cardContent">
						<div className={styles.greyBox}>{message}</div>
					</div>
				</Card>
			</div>
		</>
	);
}

export default MessageCard;
