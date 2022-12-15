/* eslint-disable react/jsx-no-undef */
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenses = props.items;

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
    </div>
  );
}

export default Expenses;
