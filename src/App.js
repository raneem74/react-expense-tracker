import ExpenseItem from "./components/Expenses/ExpensesItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={new Date()} />
    </div>
  );
}

export default App;
