import React, { useState, useContext, useEffect } from 'react';

import ExpenseContext from '../context/expense/ExpenseContext';

const ExpenseForm = (props) => {
	const expenseContext = useContext(ExpenseContext);

    const [formData, setFormData] = useState({
        purpose: '',
        location: '',
        amount: 0,
        date: ''
    });

	useEffect(() => {
		if (expenseContext.current) {
			const { purpose, location, amount, date } = expenseContext.current;
			setFormData({
				purpose,
				location,
				amount,
				date
			})
		}
	}, [expenseContext]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

		if (expenseContext.current) {
			formData.id = expenseContext.current.id;
			props.updateExpense(formData);
		} else {
			props.addExpense(formData);
		}
    }

    return (
        <form onSubmit={handleSubmit}>
			<div className="form-group m-3">
				<label>Purpose</label>
				<input
					name="purpose"
					type="text"
                    value={formData.purpose}
					className="form-control"
                    required
                    onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>Location</label>
				<input
					name="location"
					type="text"
                    value={formData.location}
					className="form-control"
                    required
                    onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>Amount</label>
				<input
					name="amount"
					type="number"
                    step="0.01"
                    value={formData.amount}
                    min={0}
					className="form-control"
                    required
                    onChange={handleChange}
				/>
			</div>
			<div className="form-group m-3">
				<label>Date</label>
				<input
					name="date"
					type="date"
                    value={formData.date}
					className="form-control"
                    required
                    onChange={handleChange}
				/>
			</div>
			<button type="submit" className="btn btn-dark">
				{expenseContext.current ? 'Update' : 'Add'}
			</button>
		</form>
    )
}

export default ExpenseForm
