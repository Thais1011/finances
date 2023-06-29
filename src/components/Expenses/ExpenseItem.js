import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

//function or const is the same, both are functions
//listeners start with ON
//Handler is about what the user does

function ExpenseItem(props) {
  //function clickHandler (){

  const [title, setTitle] = useState(props.title);

  //  const clickHandler = () => {
  //    setTitle("Updated!");
  //    console.log(title);
  //  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
  // <button onClick={clickHandler}>Change Title</button>
}

export default ExpenseItem;
