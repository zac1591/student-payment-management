import { useState } from "react";

//routing
import { Link } from "react-router-dom";
//assets
import ProfilePic from "../../assets/profile-arina.jpg";
//components
import AccountDropdown from "../AccountDropdown/AccountDropdown";

//styles
import styles from "./header.module.scss";

function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const showMenuHandler = () =>
		setShowMenu(prevShowMenuState => !prevShowMenuState);
	return (
		<div className={styles.header}>
			<h1>Bubbly</h1>
			<div className={styles.navActions}>
				<div className={styles.top}>
					<Link to="user-preferences">
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
