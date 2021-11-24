import React from "react";
import Chart from "./components/showChart/Chart.js";
import MainPage from "./components/loansAndInvestment/MainPage.js";
import { TranactionHistroy } from "./components/transactionHistroy/TransactionHistroy";
import BillReminders from "./components/billReminder/BillReminders";

function App() {
    return (
        <div>
            <Chart />
            <MainPage />
            <TranactionHistroy />
            <BillReminders />
        </div>
    );
}

export default App;
