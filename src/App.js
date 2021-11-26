import React from "react";
import Chart from "./components/showChart/Chart.js";
import MainPage from "./components/loansAndInvestment/MainPage.js";
import ResponsiveDrawer from "./components/ResponsiveDrawer.js";
import AllGoals from "./components/goals/AllGoals.js";
import { TranactionHistroy } from "./components/transactionHistroy/TransactionHistroy.jsx";
import BillReminders from "./components/billReminder/BillReminders";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './AppStyles';
import "./App.css";

const FIREBASE_URL = "https://banking-dashboard-default-rtdb.firebaseio.com/";

function App() {

    const classes = useStyles();
    return (
        <>
            <ResponsiveDrawer />
            <div className="main-div">
                <Grid container>
                    <Grid item lg = {9} md = {9} sm = {9} xs = {12}> 
                        <Grid container>
                            <Grid item lg = {6} md = {6}  xs = {12}>
                                <Chart />
                            </Grid>
                            <Grid item lg = {6} md = {6} xs = {12}>
                                <AllGoals />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg = {3} md = {3} sm = {9} xs = {12}>
                        <div className = "main-div-2">
                            HELLO MF WASSUP MISSING ME
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg = {6}  md = {12} xs = {12}>
                       <MainPage />
                    </Grid>
                    <Grid item lg = {6} md = {12} xs = {12}>
                       <BillReminders />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
export default App;
