import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
//2020 é passado como default, ou seja, o primeiro valor mostrado em tela para que o usuario mude

//filtra o ano inserido na constante/função anterior e transforma em string
//se essa string for igual ao ano filtrado, entrará no map abaixo e certificará que apenas o array inserido será mostrado

//colocar o map para criar um array com os elementos presentes em Expense em ExpenseItem.
