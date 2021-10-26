import {
	ADD_EXPENSE,
	UPDATE_EXPENSE,
	DELETE_EXPENSE,
	SET_CURRENT,
	CLEAR_CURRENT,
} from "../types";

const ExpenseReducer = (state, action) => {
	switch (action.type) {
		case ADD_EXPENSE:
			return {
				...state,
				expenses: [action.payload, ...state.expenses],
			};
		case UPDATE_EXPENSE:
			const expList = state.expenses.map((exp) => {
				if (exp.id === action.payload.id) {
					return action.payload;
				} else {
                    return exp;
                }
			});
			return {
				...state,
				expenses: expList,
			};
		case DELETE_EXPENSE:
			return {
				...state,
				expenses: state.expenses.filter((exp) => exp.id !== action.payload),
			};
		case SET_CURRENT:
			return {
				...state,
				current: state.expenses.find((exp) => exp.id === action.payload),
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		default:
			return state;
	}
};

export default ExpenseReducer;
