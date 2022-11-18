import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>  {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.array.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    

    return (
        <li>
            <Card className="expenses">  
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>    
                <ExpensesList items={filteredExpenses }/>
            </Card>
        </li>
    )
}

export default Expenses;