import React, { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    // const date = props.date.toLocaleString('en-US', { day: "2-digit" })
    // const month = props.date.toLocaleString('en-US', { month: 'long'})
    // const year = props.date.getFullYear()

    const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        setTitle('Updated!!')
    }
    const [amount, setAmount] = useState(props.amount)
    const amountHandler = () => {
        setAmount(amount+1)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate
                date={props.date}>    
            </ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/* <button onClick={amountHandler}>Click</button> */}
        </Card>
    )
}

export default ExpenseItem;