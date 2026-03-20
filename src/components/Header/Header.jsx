import { useState } from "react";

//routing
import { Link } from "react-router-dom";
//assets
import ProfilePic from "../../assets/profile-arina.jpg";
import Logo from "../../assets/entegrate-logo.png";
//components
import AccountDropdown from "../AccountDropdown/AccountDropdown";

//styles
import styles from "./header.module.scss";

/*Implement a logo changer handler.
User must ebe able to set their onw logo
1. Default: Brand of the application
2.Create an interface that allows to change the logo image and persist by saving it in the db
3. Create an optional field to set the name of the company in case the logo doesn't include the name
*/
function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const showMenuHandler = () =>
		setShowMenu(prevShowMenuState => !prevShowMenuState);
	return (
		<div className={styles.header}>
			<Link to="/">
				<img src={Logo} className={styles.logo} alt="" />
			</Link>
			<div className={styles.navActions}>
				<div className={styles.top}>
					<Link to="user-preferences/general-settings">
						<span className="material-icons-sharp active">settings</span>
					</Link>

					{/* <div className={styles["theme-toggler"]}>
						<span className="material-icons-sharp active">
							light_mode
						</span>
						<span className="material-icons-sharp"> dark_mode </span>
					</div> */}
					<div className={styles.profile}>
						<div className={styles.info}>
							<p>
								Hey, <b>Arina</b>
							</p>
							<small className={styles["text-muted"]}>Admin</small>
						</div>
						<div
							className={styles.accountMenuMainContainer}
							onClick={showMenuHandler}
						>
							<div className={styles["profile-photo"]}>
								<img src={ProfilePic} alt="" />
							</div>
							{showMenu && <AccountDropdown />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
