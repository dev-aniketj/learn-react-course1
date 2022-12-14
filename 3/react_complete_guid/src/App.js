import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 11, 24) },
    { title: "Car Maintanice", amount: 310.53, date: new Date(2022, 12, 7) },
    { title: "Car Repiar", amount: 145.91, date: new Date(2022, 12, 11) },
    { title: "Car Paint", amount: 100.25, date: new Date(2022, 12, 14) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible.</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <ExpenseItem />
    </div>
  );
}

export default App;
