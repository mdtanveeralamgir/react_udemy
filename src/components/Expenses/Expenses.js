import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";


function Expenses(props) {
  const [year, setYear] = useState("2022");
  let items = props.items;

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  const changeYear = (newYear) => {
    setYear(newYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onSelectYear={changeYear} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
      ;
    </div>
  );
}

export default Expenses;
