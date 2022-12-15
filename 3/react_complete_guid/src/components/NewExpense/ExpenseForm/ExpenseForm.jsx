import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [entertedDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChagenHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // we don't want to go on the another activity,
    // because we are using form then it will definitely send it to the new page(screen).
    event.preventDefault();

    // get all the data from the variables and
    // make a package of expenseData Object
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(entertedDate),
    };

    // get all the data from the expenseData and
    // added ID in it form the Parent component using props. 
    props.onSaveExpenseData(expenseData);
    
    // clear all the input fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type={"text"}
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type={"number"}
            value={enteredAmount}
            min={0.01}
            step={0.01}
            onChange={amountChagenHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type={"date"}
            value={entertedDate}
            min={"2019-01-01"}
            max={"2022-12-31"}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
