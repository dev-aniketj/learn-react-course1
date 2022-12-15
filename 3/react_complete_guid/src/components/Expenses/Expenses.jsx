/* eslint-disable react/jsx-no-undef */
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
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
    {
      title: "Car Repiar",
      amount: 145.91,
      date: new Date(2021, 3, 11),
    },
    {
      title: "Car Paint",
      amount: 100.25,
      date: new Date(2021, 8, 14),
    },
  ];

  return (
    <div className="expenses">
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
        amount={120.35}
        date={new Date(2022, 10, 32)}
      />
    </div>
  );
}

export default Expenses;
