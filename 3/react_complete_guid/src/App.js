import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 11, 24).toDateString(),
    },
    {
      title: "Car Maintanice",
      amount: 310.53,
      date: new Date(2021, 0, 7).toDateString(),
    },
    {
      title: "Car Repiar",
      amount: 145.91,
      date: new Date(2021, 3, 11).toDateString(),
    },
    {
      title: "Car Paint",
      amount: 100.25,
      date: new Date(2021, 8, 14).toDateString(),
    },
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
      <ExpenseItem
        title={"Car Color"}
        amount={100}
        date={new Date(2022, 10, 32).toDateString()}
      />
    </div>
  );
}

export default App;
