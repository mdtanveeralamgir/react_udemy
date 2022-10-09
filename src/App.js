import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e1', title: "Toilet paper", amount: 40, date: new Date(2022, 9, 8) },
    { id: 'e2',title: "Car Inusrance", amount: 100, date: new Date(2022, 9, 7) },
    { id: 'e3', title: "Desk", amount: 350, date: new Date(2022, 9, 6) },
  ];
  return (
    <div>
      <h1>Let's get started</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
    </div>
  );
}

export default App;
