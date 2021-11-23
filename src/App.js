
import React from 'react';
import Chart from './components/showChart/Chart.js';
import MainPage from './components/loansAndInvestment/MainPage.js';
import ResponsiveDrawer from './components/ResponsiveDrawer.js';
import AllGoals from './components/goals/AllGoals.js';
import { TranactionHistroy } from './components/transactionHistroy/TransactionHistroy.jsx';
import './App.css';

const FIREBASE_URL = "https://banking-dashboard-default-rtdb.firebaseio.com/";

function App() {


  return (
    <>
    <ResponsiveDrawer/>
    <div className="main-div">
      <Chart/>
      <MainPage/>
      <AllGoals/>
      <TranactionHistroy />
    </div>
   </>
  );
}
export default App;
