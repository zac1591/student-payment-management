import Button from "../Button/Button";
import styles from "./ActiveMenu.module.scss";

function ActiveMenu({
	createButtonLabel,
	onShowCreateContact,
	currentPageTitle,
}) {
	return (
		<div className={styles.activeMenu}>
			<h1>{currentPageTitle}</h1>
			<div className={styles.activeMenuActions}>
				<Button type="button" small>
					Actions
				</Button>
				<Button type="button" small>
					Import
				</Button>
				<Button type="button" small inverted onClick={onShowCreateContact}>
					{createButtonLabel}
				</Button>
			</div>
		</div>
	);
}

export default ActiveMenu;
