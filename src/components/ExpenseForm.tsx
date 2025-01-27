import React from "react";
import { useForm } from "react-hook-form";
import { Expense } from "../types/Expense";

interface Props {
  onSubmit: (expense: Expense) => void;
}

const ExpenseForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<Expense>();

  const handleFormSubmit = (data: Expense) => {
    onSubmit({ ...data, id: Date.now().toString(), date: new Date().toISOString() });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="expense-form">
      <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          {...register("description", { required: "Description is required" })}
          placeholder="Description"
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          {...register("amount", { required: "Amount is required", valueAsNumber: true })}
          placeholder="Amount"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <select id="type" {...register("type", { required: "Type is required" })}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
