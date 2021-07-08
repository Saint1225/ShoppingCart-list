import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from '../UI/ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilterdYear] = useState("")

    let expenseItems = props.items.map(item =>
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      )

    const yearHandler = (val) => {
      console.log(val)
      setFilterdYear(val)
    }

    return (
      <div>
        <ExpensesFilter onSelectedYear={yearHandler} />
        <Card className="expenses">
            {expenseItems}
        </Card>
      </div>

    )
}

export default Expenses;