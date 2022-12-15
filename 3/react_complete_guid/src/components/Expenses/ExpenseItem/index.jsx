import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate";

function ExpenseItem(props) {

  let title = props.title;

  const clickHandler = () => {
    title = "Upadated!";
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate data={props} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
