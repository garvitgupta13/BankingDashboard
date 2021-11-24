import React,{useState,useEffect} from 'react';
import './MainPage.css';
import Loan from './Loan';
import Investment from './Investment';
import {investments} from '../../services/getInvestments';
import {loans} from '../../services/getLoans';

const InvestmentLoan = () => {
    
    const [allLoans,setAllLoans] = useState([]);
    const [allInvestments,setAllInvestments] = useState([]);
    

    const getAllLoans = () =>{
        loans().then((data) => {
          if(data === undefined){
            console.log("undefined data");
          }
          else if(data.data.error){
            console.log("error on getting loans");
          }
          else{
            const item = data.data;
            const savedItems = Object.keys(item).map((key) => item[key]);         
            setAllLoans(savedItems);
          }
        })
     }

     const getAllInvestments = () =>{
        investments().then((data) => {
          if(data === undefined){
            console.log("undefined data");
          }
          else if(data.data.error){
            console.log("error on getting investments");
          }
          else{
            const item = data.data;
            const savedItems = Object.keys(item).map((key) => item[key]);         
            setAllInvestments(savedItems);
          }
        })
     }

    useEffect(() => {
        getAllLoans();
        getAllInvestments();
   },[])

    return (
        <div className>
            <Investment data = {allInvestments}/>
            <Loan data = {allLoans}/>
        </div>
    )

}

export default InvestmentLoan;