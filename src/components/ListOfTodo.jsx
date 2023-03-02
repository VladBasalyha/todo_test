import {
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import { flexbox } from "@mui/system";
import { useState } from "react";
import { FormTodo } from "./FormTodo";
import { ModalTodo } from "./ModalTodo";
export const ListOfTodo = () => {
	const [todos, setTodo] = useState([]);

	const [modalDescription, setModalDescription] = useState("");

	const [modalTitle, setModalTitle] = useState("");

	const [isModalCheckboxChecked, setCheckboxState] = useState();

	const [isModalOpen, setModalStatus] = useState(false);

	const [todoId, setTodoId] = useState();
	const addingTodo = (newTodo) =>
		setTodo((prevstate) => [...prevstate, newTodo]);

	const keys = ["id", "title", "description", "status"];

	const changeModalStatus = (e) => {
		const { type } = e.target;

		todos.find((todo) => {
			if (todo.id == e.currentTarget.dataset.id) {
				setModalDescription(todo.description);
				setModalTitle(todo.title);
				setTodoId(todo.id);
				setCheckboxState(todo.status);
			}
		});

		if (type === "checkbox") {
			return;
		}
		setModalStatus((prev) => !prev);
	};

	const toggleTodoCompleted = (e) => {
		const { dataset } = e.target;

		let mapped = todos.map((todo) => {
			return todo.id === Number(dataset.name)
				? { ...todo, status: !todo.status }
				: { ...todo };
		});
		setTodo(mapped);
	};
	return (
		<>
			{isModalOpen && (
				<ModalTodo onModalClose={changeModalStatus}>
					<h2 style={{ display: flexbox }}>{modalDescription}</h2>
					<p>Description:</p>
					<p>{modalTitle}</p>
					{todos.map((todo) => {
						{
							return (
								todo.id == todoId && (
									<label htmlFor="status">
										status
										<input
											checked={todo.status}
											onChange={toggleTodoCompleted}
											data-name={todo.id}
											type="checkbox"
											id="status"
										></input>
									</label>
								)
							);
						}
					})}
				</ModalTodo>
			)}
			<FormTodo addingTodo={addingTodo}></FormTodo>
			<Table>
				<TableHead>
					<TableRow>
						{keys.map((key) => (
							<TableCell key={Math.random()}>{key}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{todos.map((todo) => {
						return (
							<TableRow data-id={`${todo.id}`} onClick={changeModalStatus}>
								<TableCell>{todo.id}</TableCell>
								<TableCell>{todo.description}</TableCell>
								<TableCell>{todo.title}</TableCell>
								<TableCell>
									<input
										checked={todo.status}
										onChange={toggleTodoCompleted}
										data-name={todo.id}
										type="checkbox"
									></input>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</>
	);
};
