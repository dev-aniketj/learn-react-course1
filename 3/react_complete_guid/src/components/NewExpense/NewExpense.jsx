import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  // const [enteredExpenseData, setEnteredExpenseData] = React.useState("");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // we are insert the first data in object of expenseData,
    // as th child component data(ExpenseForm)
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // add new item in it(ID)
    };

    // get the previous data from the App.jsx
    // and modify the data
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
