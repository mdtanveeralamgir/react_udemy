import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState("2022");
  let items = props.items;

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  const changeYear = (newYear) => {
    setYear(newYear);
  };

  const expenseItems = filteredExpenses.map((item) => (
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
        <ExpenseFilter selected={year} onSelectYear={changeYear} />
        {filteredExpenses.length === 0 ? (
          <p>No expenses found!</p>
        ) : (
          expenseItems
        )}
      </Card>
      ;
    </div>
  );
}

export default Expenses;
