import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  //my way
  //     const expensesList = props.expenses.length === 0 ? <p>No expense to display!</p> :
  //     props.expenses.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   ));
  //   return expensesList;

  //lecturer's way

  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expense to display!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
