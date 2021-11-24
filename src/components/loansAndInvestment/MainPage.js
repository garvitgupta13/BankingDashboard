import React from 'react';
import './MainPage.css';
import Loan from './Loan';
import Investment from './Investment';

const DUMMY_LOANS = [
    {
        type:'Car Loan',
        date:'12-07-2021',
        total_loan: 40000,
        tenure: 10, 
        interest: 12,
        payed: 2560,
        emi: 5000,
    },
    {
        type:'House Loan',
        date:'12-08-2021',
        total_loan: 512300,
        tenure: 72,
        interest: 10,
        payed: 2560,
        emi: 15000,
    },
]
const DUMMY_INVESTMENT = [
    {
       AccNo : '6724301068',
       type : 'Current',
       balance : 2500,
       rate : 8.5
    },
    {
        AccNo : '9722301068',
        type : 'Saving',
        balance : 2300,
        rate : 9.5
    },
    {   
       AccNo : '2324351068',
       type : 'Fixed(10 years)',
       balance : 10000,
       rate : 7.5,
    },
]

const InvestmentLoan = () => {
    
    return (
        <div className>
            <Investment data = {DUMMY_INVESTMENT}/>
            <Loan data = {DUMMY_LOANS}/>
        </div>
    )

}

export default InvestmentLoan;