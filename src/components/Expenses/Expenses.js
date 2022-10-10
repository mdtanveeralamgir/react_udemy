import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  let items = props.items;

  const changeYear = (year) => {
    setYear(year);
  };

  const expenseItems = items.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={year} onSelectYear={changeYear}/>
      {expenseItems}
      </Card>;
    </div>
  );
}

export default Expenses;
