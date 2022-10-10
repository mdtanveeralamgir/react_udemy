
import Expenses from "./components/Expenses/Expenses";

function App() {
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
  return (
    <div>
      <Expenses
        items = {expenses}
      />
    </div>
  );
}

export default App;
