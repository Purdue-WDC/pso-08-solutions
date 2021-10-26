import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";

import Home from "./components/Home";
import ExpenseState from "./context/expense/ExpenseState";

function App() {
	return (
		<div className="App">
			<ExpenseState>
				<Navigation />
				<Home />
			</ExpenseState>
		</div>
	);
}

export default App;
