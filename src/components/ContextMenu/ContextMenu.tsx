//components
import Card from "../Card/Card";
//styles
import styles from "./contextMenu.module.scss";

type ContextMenuItemTypes = {
	id: string;
	name: string;
	handler: () => void;
};

type ContextMenuPropsTypes = {
	options: ContextMenuItemTypes[];
};

function ContextMenu({ options }: ContextMenuPropsTypes) {
	return (
		<Card className={styles.card}>
			<ul className={styles.optionsList}>
				{options.map(option => (
					<li
						className={styles.optionsListItem}
						key={option.id}
						onClick={option.handler}
					>
						{option.name}
					</li>
				))}
			</ul>
		</Card>
	);
}

export default ContextMenu;
