import { useState } from "react";

import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import ListElement from "../ListElement/ListElement";

import styles from "./tabs.module.scss";

/*
USAGE:

--> Create a parent div to wrap this component up, (this will allow more control to customize the look and feeling of the component itself)

--> Provide an array of objects, in which each object contains the necessary props to setup a given number of tabs and their respective informationç

-Generar tabs dinamicamente
-Calcular el numero de tabs a generar dependiendo de los elementos que se encuentren en el array
-Pasar componente a renderizar en cada tab mediante props.
<Tabs 

/>

*/

const Tabs = props => {
	const [activeTab, setActiveTab] = useState(props.TabNavItemConfig[0].id);

	const {
		className: customTabStyles,
		TabNavItemConfig,
		component: Component,
	} = props;

	return (
		<div className={`${styles.tabs} ${customTabStyles}`}>
			{/* Tab nav */}
			<ul className={styles.nav}>
				{/* <TabNavItem
					title={TabNavItemConfig.title}
					id={TabNavItemConfig.id}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/> */}

				{TabNavItemConfig.map(navEl => (
					<TabNavItem
						key={navEl.id}
						title={navEl.title}
						id={navEl.id}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				))}
				{/* <TabNavItem
					title="Pagos"
					id="tab1"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabNavItem
					title="Deudas"
					id="tab2"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabNavItem
					title="Todo"
					id="tab3"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/> */}
			</ul>
			<div className={styles.outlet}>
				<TabContent id={TabNavItemConfig[0].id} activeTab={activeTab}>
					{[].map(payment => (
						<ListElement
							key={payment.id}
							description={payment.description}
							amount={payment.amount}
						/>
					))}
				</TabContent>
				<TabContent id={TabNavItemConfig[1].id} activeTab={activeTab}>
					{[].map(debt => (
						<ListElement
							key={debt.id}
							description={debt.description}
							amount={debt.amount}
						/>
					))}
				</TabContent>
				<TabContent id={TabNavItemConfig[2].id} activeTab={activeTab}>
					{[].map(element => (
						<ListElement
							key={element.id}
							description={element.description}
							amount={element.amount}
						/>
					))}
				</TabContent>
			</div>
		</div>
	);
};
export default Tabs;
