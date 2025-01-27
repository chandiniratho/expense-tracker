import { useState } from "react";
import { Expense } from "../types/Expense";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  const editExpense = (id: string) => {
    // Placeholder logic for editing expense
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  return { expenses, addExpense, editExpense, deleteExpense };
};

export default useExpenses;
