import React from "react";
import "./styles.css"; // Import your styles

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import Chart from "./components/Chart";
import useExpenses from "./hooks/useExpenses";

const App: React.FC = () => {
  const { expenses, addExpense, editExpense, deleteExpense } = useExpenses();

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onSubmit={addExpense} />
      <Summary expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        onEdit={id => alert(`Edit feature not implemented for ${id}`)}
        onDelete={deleteExpense}
      />
      <Chart expenses={expenses} />
    </div>
  );
};

export default App;
