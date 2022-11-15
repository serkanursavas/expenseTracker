import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesStatistic from './ExpensesStatistic';

const Expenses = (props) => {
    const data = props.array;
    const items = data.map( (item) =>  {
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
    })

    return (
        <Card className="expenses">  
            <ExpensesFilter/>
            <ExpensesStatistic/>      
            {items}
        </Card>
    )
}

export default Expenses;