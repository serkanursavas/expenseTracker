import './ExpensesStatistic.css'
import React from 'react'
import Card from '../UI/Card'

const ExpensesStatistic = () => {

    return(
       
        <Card className="expenses_statistic">
            <div className="container">
                <div className="months">
                    <div className="months_bar"></div>
                    <h5>January</h5>
                </div>
                <div className="months">
                    <div className="months_bar"></div>
                    <h5>February</h5>
                </div>
                <div className="months">
                    <div className="months_bar"></div>
                    <h5>March</h5>
                </div>
                <div className="months">
                    <div className="months_bar"></div>
                    <h5>April</h5>
                </div>
            
            </div>
        </Card>
        
    )
}

export default ExpensesStatistic;