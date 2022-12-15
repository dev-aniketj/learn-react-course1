import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
