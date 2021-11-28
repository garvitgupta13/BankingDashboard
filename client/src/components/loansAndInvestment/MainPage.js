import React,{useState,useEffect} from 'react';
import './MainPage.css';
import Loan from './Loan';
import {loans} from '../../services/getLoans';

const InvestmentLoan = () => {
    
    const [allLoans,setAllLoans] = useState([]);
    

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

    useEffect(() => {
        getAllLoans();
   },[])

    return (
        <div className = "loans-div">
            <h2>LOANS TAKEN</h2>
            <Loan data = {allLoans}/>
        </div>
    )

}

export default InvestmentLoan;