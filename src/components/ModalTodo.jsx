import css from "../components/Modal.module.css";
import { createPortal } from "react-dom";
export const ModalTodo = ({ onModalClose, children }) => {
	const modalRoot = document.querySelector("#modalRoot");

	return createPortal(
		<div className={css.backdrop}>
			<div className={css.card}>
				<div>{children}</div>
				<button onClick={onModalClose}>Close</button>
			</div>
		</div>,
		modalRoot
	);
};
