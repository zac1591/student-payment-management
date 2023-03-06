import Button from "../Button/Button";
import styles from "./ActiveMenu.module.scss";

type propsTypes = {
	buttonLabel: string,
	onShowItem: () => {},
	currentPageTitle: string
}

function ActiveMenu({ buttonLabel, onShowItem, currentPageTitle }: propsTypes) {
	return (
		<div className={styles.activeMenu}>
			<h1>{currentPageTitle}</h1>
			<div className={styles.activeMenuActions}>
				<Button btnStylesConf={{small: 'small'}} otherProps={{type: 'button'}}>
					Actions
				</Button>
				<Button  btnStylesConf={{small: 'small'}} otherProps={{type: 'button'}}>
					Import
				</Button>
				<Button btnStylesConf={{small: 'small', inverted: 'inverted'}} otherProps={{type: 'button'}} onClick={onShowItem}>
					{buttonLabel}
				</Button>
			</div>
		</div>
	);
}

export default ActiveMenu;
