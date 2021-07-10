import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilterdYear] = useState("2019")

    const filterChangeHandler = (val) => {
      setFilterdYear(val)
    }

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear)

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onSelectedYear={filterChangeHandler} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>

    )
}

export default Expenses;