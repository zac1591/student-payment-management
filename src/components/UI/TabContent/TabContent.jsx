import styles from "./tabContent.module.scss";

const TabContent = ({ id, activeTab, children }) => {
	return activeTab === id ? (
		<div className={styles.TabContent}>{children}</div>
	) : null;
};

export default TabContent;
