import React from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.scss";

const Backdrop = props => {
	return <div className={styles.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = props => {
	return (
		<div className={`${styles.modal} ${props.className}`}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
	return (
		<>
			{createPortal(
				<Backdrop onHideCart={props.onHideCart} />,
				portalElement
			)}
			{createPortal(
				<ModalOverlay className={props.className}>
					{props.children}
				</ModalOverlay>,
				portalElement
			)}
		</>
	);
}

export default Modal;
