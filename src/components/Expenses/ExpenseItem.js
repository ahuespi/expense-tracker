import React, { useState } from 'react';


import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// const ExpenseItem = ({title, amount, date, id}) => {
const ExpenseItem = (props) => {


    const [title, setTitle] = useState(props.title)

    /* useState es un react Hook, es uno de los mas importantes
        todos los hooks de react son reconocidos por usar el 'use' Delante

        Todos los Hooks tienen que estar llamados dentro de un componente react.
    */

    const clickHandler = () => {
        setTitle('Nuevo elemento')
        console.log(title)
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler} >Change title</button>
        </Card>
    )
}

export default ExpenseItem 