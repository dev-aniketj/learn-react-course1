import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // pre defined data which is already in the list.
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 11, 24),
    },
    {
      title: "Car Maintanice",
      amount: 310.53,
      date: new Date(2021, 0, 7),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In Apps.jsx");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
