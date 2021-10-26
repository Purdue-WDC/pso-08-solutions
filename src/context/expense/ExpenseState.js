import React, { useReducer } from "react";

import ExpenseReducer from "./ExpenseReducer";
import ExpenseContext from "./ExpenseContext";

import {
	ADD_EXPENSE,
	UPDATE_EXPENSE,
	DELETE_EXPENSE,
	SET_CURRENT,
	CLEAR_CURRENT,
} from "../types";

const initialState = {
	expenses: [],
	current: null,
};

const ExpenseState = (props) => {
	const [state, dispatch] = useReducer(ExpenseReducer, initialState);

	// Add new expense
	const addExpense = (expense) => {
		dispatch({
			type: ADD_EXPENSE,
			payload: expense,
		});
	};

	// Update expense
	const updateExpense = (expense) => {
		dispatch({
			type: UPDATE_EXPENSE,
			payload: expense,
		});
	};

	// Delete expense
	const deleteExpense = (id) => {
		dispatch({
			type: DELETE_EXPENSE,
			payload: id,
		});
	};

	// Set current expense
	const setCurrent = (id) => {
		dispatch({
			type: SET_CURRENT,
			payload: id,
		});
	};

	// Clear current expense
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT,
		});
	};

	return (
		<ExpenseContext.Provider
			value={{
				expenses: state.expenses,
				current: state.current,
				addExpense,
				updateExpense,
				deleteExpense,
				setCurrent,
				clearCurrent,
			}}
		>
			{props.children}
		</ExpenseContext.Provider>
	);
};

export default ExpenseState;
