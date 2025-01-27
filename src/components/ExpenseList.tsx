import React from "react";
import { Expense } from "../types/Expense";

interface Props {
  expenses: Expense[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ExpenseList: React.FC<Props> = ({ expenses, onEdit, onDelete }) => {
  return (
    <ul className="expense-list">
      {expenses.map((exp) => (
        <li key={exp.id}>
          <span>
            {exp.description} - {exp.amount} ({exp.type})
          </span>
          <button onClick={() => onEdit(exp.id)}>Edit</button>
          <button onClick={() => onDelete(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
