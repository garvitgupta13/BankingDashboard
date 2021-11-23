import React from 'react';
import Chart from './components/showChart/Chart.js';
import MainPage from './components/loansAndInvestment/MainPage.js';
import ResponsiveDrawer from './components/ResponsiveDrawer.js';
import AllGoals from './components/goals/AllGoals.js';
import './App.css';

function App() {
  return (
    <>
    <ResponsiveDrawer/>
    <div className="main-div">
      <Chart/>
      <MainPage/>
      <AllGoals/>
    </div>
   </>
  );
}

export default App;
