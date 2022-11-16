import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesStatistic from './ExpensesStatistic';
import { useState } from 'react';

const Expenses = (props) => {
    const data = props.array;
    const items = data.map( (item) =>  {
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
    })

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>  {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">  
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>    
            {items}
        </Card>
    )
}

export default Expenses;