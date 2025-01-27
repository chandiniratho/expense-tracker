import React from "react";
import { Expense } from "../types/Expense";

interface ChartProps {
  expenses: Expense[];
}

const Chart: React.FC<ChartProps> = ({ expenses }) => {
  // Implement your chart logic here, using `expenses` data
  return (
    <div className="chart">
      <h3>Chart Section</h3>
      {/* Placeholder content for chart */}
      <p>Total Expenses: ${expenses.reduce((sum, exp) => sum + exp.amount, 0)}</p>
    </div>
  );
};

export default Chart;
