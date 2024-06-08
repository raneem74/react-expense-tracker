import { useState } from 'react';
import Card from '../Core/Card';
import ExpenseDate from './ExpenseDate';
import './ExpensesItem.css';

export default function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  const [testState, setTestState] = useState(true);

  const changeTitleHandler = () => {
    setTitle("updated");
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>
          {title}
        </h2>
        <div className='expense-item__Price'>{props.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>change title</button>
      <div>{testState ? "fav" : "not fav"} </div>
      <button onClick={() => {
        setTestState(false);
      }}>change fav</button>
    </Card>
  )
}
