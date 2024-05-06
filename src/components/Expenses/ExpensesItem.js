import Card from '../Core/Card';
import './ExpensesItem.css';

export default function ExpenseItem() {
  return (
    <Card className='expense-item'>
      <div>march 8th 2020</div>
      <div className='expense-item__description'>
        <h2>
          food
        </h2>
        <div className='expense-item__Price'>300$</div>
      </div>
    </Card>
  )
}
