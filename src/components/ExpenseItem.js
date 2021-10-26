import React, { useContext } from "react";
import ExpenseContext from "../context/expense/ExpenseContext";

const ExpenseItem = (props) => {
	const { id, purpose, location, amount, date } = props.item;
	const expenseContext = useContext(ExpenseContext);

	const handleEdit = () => {
		expenseContext.setCurrent(id);
	}

	const handleDelete = () => {
		expenseContext.deleteExpense(id);
	}

	return (
		<div id={id} className="card p-3 m-3">
			<div className="d-flex justify-content-between">
				<div className="d-flex align-items-center">
					<div
						className="card p-2 d-flex justify-content-center align-items-center"
						style={{
							width: "80px",
							height: "80px",
							border: "2px solid black",
						}}
					>
						$ {amount}
					</div>
					<div className="d-flex flex-column m-2">
						<strong>{purpose}</strong>
						<small>{location}</small>
						<small>{date}</small>
					</div>
				</div>
				<div className="d-flex flex-column">
					<button className="btn btn-warning m-2" onClick={handleEdit}>Edit</button>
					<button className="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
