import React, { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ExpenseContext from "../context/expense/ExpenseContext";

import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";

const Home = () => {
	const [showToast, setShowToast] = useState(false);
	const { expenses, current, addExpense, updateExpense, clearCurrent } = useContext(ExpenseContext);

	useEffect(() => {
		if (current) {
			setShowToast(true);
		} else {
			setShowToast(false);
		}
	}, [current])

	const handleAdd = (expense) => {
		expense.id = Math.random().toString();
		addExpense(expense);
        setShowToast(false);
	};

	const handleUpdate = (expense) => {
		updateExpense(expense);
		clearCurrent();
		setShowToast(false);
	}

	const handleClose = () => {
		clearCurrent();
		setShowToast(false);
	}

	return (
		<div className="text-center">
			<button className="btn btn-success m-3" onClick={() => setShowToast(true)}>ADD NEW EXPENSE</button>
			<ExpenseList expenses={expenses} />
			<Modal show={showToast} centered className="text-center">
				<Modal.Header>
					<Modal.Title>{current ? 'Update' : 'New'} Expense</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ExpenseForm addExpense={handleAdd} updateExpense={handleUpdate} />
				</Modal.Body>
				<Modal.Footer className="text-center">
					<Button className="btn-danger" onClick={handleClose}>Cancel</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Home;
