import React from "react";
import Chart from "./components/showChart/Chart.js";
import MainPage from "./components/loansAndInvestment/MainPage.js";
import { TranactionHistroy } from "./components/transactionHistroy/TransactionHistroy";

function App() {
    return (
        <div>
            <Chart />
            <MainPage />
            <TranactionHistroy />
        </div>
    );
}

export default App;
