## PSO 08 - Working with React Context

To get started on this PSO, you'll want to do the following:
- Clone this repo to an empty folder using the `git clone` command
- Once you've cloned the folder, open it in VS Code and run `npm i` to install the required packages and dependencies
- You may face vulnerability issues: simply run `npm audit fix --force` once or twice to deal with these
- While this happens in VS Code, read on through the instructions:

There's a simple app given here which is lacking some functionality.
The app allows the user to keep track of their expenses by adding them, updating 
them, and deleting them manually.

You need to make some additions to the context files to enable the app to do this.
Make changes to the following files: `ExpenseState.js` and `ExpenseReducer.js`

`ExpenseState.js` contains the exported provider as well as the functions that are 
used across the app. `ExpressReducer.js` contains the reducer function for the 
state that is maintained by the context object.

Here are the functions and what they do:

`addExpense (expense)`
- takes in an *expense object* as argument
- adds this object to the expense list in the state

`updateExpense (expense)`
- takes in an *expense object* as argument
- finds the expense with the same id in the expense list 
- replaces this with the expense object passed as an argument

`deleteExpense (id)`
- takes in an *id* as argument
- removes the expense corresponding to this id

`setCurrent (id)`
- takes in an *id* as argument
- sets the current value in the state to the expense with this id

`clearCurrent ()`
- resets the current value to `null`

In `ExpenseState.js`, all you'll need to do is execute `dispatch()` in every function, 
passing in the correct action type and payload.
The action types are already specified and present in both files. You simply need to 
pick the right one and dispatch it with the correct payload.

In `ExpenseReducer.js`, you should implement the logic for what the functions do. 
Essentially, they will return an updated state object after doing what is required.

Here's an example for the `UPDATE_EXPENSE` case to help get you started:

In `ExpenseState.js`, you just need to dispatch the correct action type and payload:
```
const updateExpense = (expense) => {
  dispatch({
    type: UPDATE_EXPENSE,
    payload: expense
  });
}
```

In `ExpenseReducer.js`, you need to implement to logic to update the expense object 
with the id of the argument.
```
case UPDATE_EXPENSE:
    const expList = state.expenses.map((exp) => {
      if (exp.id === action.payload.id) {
          return action.payload;
      } else {
          return exp;
      }
    });
    return {
      current: state.current,
      expenses: expList
    };
```
