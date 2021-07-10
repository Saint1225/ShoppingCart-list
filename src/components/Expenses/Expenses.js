import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilterdYear] = useState("2019")

    const filterChangeHandler = (val) => {
      setFilterdYear(val)
      console.log(typeof val)
    }

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear)
    .map(item =>
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    )
    console.log(filteredExpenses)

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onSelectedYear={filterChangeHandler} />
          {filteredExpenses}
        </Card>
      </div>

    )
}

export default Expenses;