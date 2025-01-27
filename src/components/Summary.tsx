import React from "react";
import { Expense } from "../types/Expense";

interface Props {
  expenses: Expense[];
}

const Summary: React.FC<Props> = ({ expenses }) => {
  const totalIncome = expenses
    .filter((exp) => exp.type === "income")
    .reduce((sum, exp) => sum + exp.amount, 0);
  const totalExpense = expenses
    .filter((exp) => exp.type === "expense")
    .reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="summary">
      <h3>Total Income: ${totalIncome}</h3>
      <h3>Total Expenses: ${totalExpense}</h3>
      <h3>Balance: ${totalIncome - totalExpense}</h3>
    </div>
  );
};

export default Summary;
