import styles from "./tabNavItem.module.scss";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<li
			onClick={handleClick}
			className={`${styles.tabNavItem} ${
				activeTab === id ? styles.active : ""
			}`}
			style={{ fontSize: "0.9rem" }}
		>
			{title}
		</li>
	);
};
export default TabNavItem;
