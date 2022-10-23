import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    const data = props.array;
    const items = data.map( (item) =>  {
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
    })

    return (
        <Card className="expenses">          
            {items}
        </Card>
    )
}

export default Expenses;