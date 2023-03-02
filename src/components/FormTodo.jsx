import { Button } from "@mui/material";

import { useState } from "react";

export const FormTodo = ({ addingTodo }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [errorEmptyFieldTitle, setErrorOnEmptyField] = useState("");
	const [errorEmptyFieldDescription, setErrorOnEmptyFieldDescription] =
		useState("");

	const onHandleChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "title":
				setTitle(value);
				setErrorOnEmptyField("");
				break;
			case "description":
				setDescription(value);
				setErrorOnEmptyFieldDescription("");
				break;
			default:
				return;
		}
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (title === "") {
			return setErrorOnEmptyField("invalid");
		}
		if (description === "") {
			setErrorOnEmptyFieldDescription("invalid");
			return;
		}

		const newTodo = {
			id: Math.random(),
			title: title,
			description: description,
			status: false,
		};
		addingTodo(newTodo);
		resetForm();
	};
	const resetForm = () => {
		setTitle("");
		setDescription("");
	};
	return (
		<form onSubmit={onSubmitForm}>
			<label htmlFor="title">
				title
				{errorEmptyFieldTitle === "invalid" && (
					<span style={{ color: "red" }}>this field is empty</span>
				)}
				<input
					id="title"
					className={errorEmptyFieldTitle}
					onChange={onHandleChange}
					value={title}
					name="title"
					placeholder="Enter title"
				></input>
			</label>

			<label htmlFor="description">
				description
				{errorEmptyFieldDescription === "invalid" && (
					<span style={{ color: "red" }}>this field is empty</span>
				)}
				<input
					id="description"
					className={errorEmptyFieldDescription}
					onChange={onHandleChange}
					value={description}
					name="description"
					placeholder="Enter description"
				></input>
			</label>

			<Button variant="contained" type="submit">
				Add task
			</Button>
		</form>
	);
};
