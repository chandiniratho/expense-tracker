export interface Expense {
    id: string;
    description: string;
    amount: number;
    type: "income" | "expense";
    date: string;
  }
  