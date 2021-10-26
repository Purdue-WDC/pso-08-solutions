import React from 'react';
import ExpenseItem from './ExpenseItem';

import "bootstrap/dist/css/bootstrap.min.css";

const ExpenseList = (props) => {
    return (
        <div className="d-flex flex-column justify-content-center">
            {props.expenses.map(expenseItem => (
                <ExpenseItem item={expenseItem} />
            ))}
        </div>
    )
}

export default ExpenseList
