import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {

  const saveExpenseDataHandler = (expenseData) => {
    props.onAddexpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
