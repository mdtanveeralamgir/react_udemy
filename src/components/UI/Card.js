// Common styling between ExpenseItem and Expenses
//Acts as a shell around expenseitem and expenses

import "./Card.css";

function Card(props) {
  //Adding classes passed from expenseItem and expenses
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
