import React from 'react';
import FilterYear from './FilterYear';
import { Card } from '@material-ui/core';
import { useState  } from 'react';
import LineChart from './LineChart';

const DUMMY_TRANSACTION = [
    {
        id: '101',
        amount: 1500,
        date: '21-10-2021',
        category: 'shopping',
        payed: true,
        stmt: 'went to walmart',
    },
    {
        id: '102',
        amount: 75000,
        date: '25-09-2021',
        category: 'shopping',
        payed: true,
        stmt: 'baught a new bike',

    },
    {
        id: '103',
        amount: 20000,
        date: '25-09-2021',
        category: 'shopping',
        payed: false,
        stmt: 'sold old bike',
    },
    {
        id: '104',
        amount: 800,
        date: '21-11-2021',
        category: 'bill',
        payed: true,
        stmt: 'payed electricity bill',
    },
    {
        id: '105',
        amount: 65000,
        date: '21-01-2021',
        category: 'fee',
        payed: true,
        stmt: 'payed college fee',
    },
    {
        id: '106',
        amount: 5000,
        date: '21-05-2021',
        category: 'fee',
        payed: true,
        stmt: 'payed tution fee for Compuuter Science',
    },
    {
        id: '107',
        amount: 500,
        date: '21-06-2021',
        category: 'rent',
        payed: false,
        stmt: 'received monthly rent',
    },
    {
        id: '108',
        amount: 800,
        date: '21-08-2021',
        category: 'bill',
        payed: true,
        stmt: 'payed electricity bill',
    },
    {
        id: '109',
        amount: 1000,
        date: '21-08-2020',
        category: 'bill',
        payed: true,
        stmt: 'payed electricity bill',
    },
    {
        id: '110',
        amount: 800,
        date: '21-01-2019',
        category: 'bill',
        payed: true,
        stmt: 'payed electricity bill',
    },
]



const Chart = () => {

    const [year,setYear] = useState("2021");
    
    var expenses = [];
    var income = [];
    
    var income_dpoints = [];
    var expenses_dpoints = [];

    
    const changeYearHandler = (newYear) => {
         setYear(newYear);
    }

    for(var i = 0 ; i <= 12; i++)
    {
          expenses.push([]);
          income.push([]);
          if(i!=12)
          {
            income_dpoints.push(0);
            expenses_dpoints.push(0);
          }
    }


    for(var i = 0 ; i < DUMMY_TRANSACTION.length ;i++)
    {
        if(DUMMY_TRANSACTION[i].date.split('-')[2] === year)
        {
            if(DUMMY_TRANSACTION[i].payed)
            {
                if(DUMMY_TRANSACTION[i].date.split('-')[1][0] === '0')
                {
                 expenses[parseInt(DUMMY_TRANSACTION[i].date.split('-')[1][1])].push(DUMMY_TRANSACTION[i]);
                 expenses_dpoints[parseInt(DUMMY_TRANSACTION[i].date.split('-')[1][1])-1]+=DUMMY_TRANSACTION[i].amount;
                }
                else 
                {
                  expenses[parseInt(DUMMY_TRANSACTION[i].date.split('-')[1])].push(DUMMY_TRANSACTION[i]);
                  expenses_dpoints[parseInt(DUMMY_TRANSACTION[i].date.split('-')[1])-1]+=DUMMY_TRANSACTION[i].amount;
                }
            }
            else 
            {
                if(DUMMY_TRANSACTION[i].date.split('-')[1][0] === '0')
                {
                  income[parseInt(DUMMY_TRANSACTION[i].date.split('-')[1][1])].push(DUMMY_TRANSACTION[i]);
                  income_dpoints[parseInt(DUMMY_TRANSACTION[i].date.split('-')[1][1])-1]+=DUMMY_TRANSACTION[i].amount;
                }
                else 
                {
                  income[parseInt(DUMMY_TRANSACTION[i].date.split('-')[1])].push(DUMMY_TRANSACTION[i]);
                  income_dpoints[parseInt(DUMMY_TRANSACTION[i].date.split('-')[1])-1]+=DUMMY_TRANSACTION[i].amount;   
                }
            }
        }
    }

    // for(var i = 0 ;  i < 12; i++)
    // {
    //     if(expenses_dpoints[i] === 0)
    //         expenses_dpoints[i] = null;
        
    //     if(income_dpoints[i] === 0)
    //         income_dpoints[i] = null;
    // }

 

    // console.log(income_dpoints);
    // console.log(expenses_dpoints);
 
    return (
         <div>
              <FilterYear year={year} onSaveYear = {changeYearHandler}/>
              <LineChart 
              expenses = {expenses} 
              expenses_dpoints = {expenses_dpoints} 
              income = {income}
              income_dpoints = {income_dpoints}
              />
         </div >

    )
}

export default Chart;