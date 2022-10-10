import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const expenses = [
  { id: "e1", title: "Toilet paper", amount: 40, date: new Date(2022, 9, 8) },
  {
    id: "e2",
    title: "Car Inusrance",
    amount: 100,
    date: new Date(2022, 9, 7),
  },
  { id: "e3", title: "Desk", amount: 350, date: new Date(2022, 9, 6) },
];


function App() {

  const [expenseItems, setExpenseItems] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpenseItems((prev) => {
      return [expense, ...prev];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
