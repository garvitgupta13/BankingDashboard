import React,{useEffect} from "react";
import Chart from "./components/showChart/Chart.js";
import MainPage from "./components/loansAndInvestment/MainPage.js";
import ResponsiveDrawer from "./components/ResponsiveDrawer.js";
import AllGoals from "./components/goals/AllGoals.js";
import { TranactionHistroy } from "./components/transactionHistroy/TransactionHistroy.jsx";
import BillReminders from "./components/billReminder/BillReminders";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountInfo from "./components/accountInfo/AccountInfo.js";
import {useStyles} from './AppStyles';
import "./App.css";

const FIREBASE_URL = "https://banking-dashboard-default-rtdb.firebaseio.com/";

function App() {


    useEffect(() =>{
        window.watsonAssistantChatOptions = {
            integrationID: "e608934d-ee59-4b7f-9c8d-1f243989b1e2", // The ID of this integration.
            region: "eu-gb", // The region your integration is hosted in.
            serviceInstanceID: "ef1a1c87-2a70-4073-9c69-9358921615c3", // The ID of your service instance.
            onLoad: function(instance) { instance.render(); }
          };
        setTimeout(function(){
          const t=document.createElement('script');
          t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
          document.head.appendChild(t);
        });
    },[])

    const classes = useStyles();
    return (
        <>
            <ResponsiveDrawer />
            <div className="main-div">
                <Grid container>
                    <Grid item lg = {9} md = {12} sm = {12} xs = {12}> 
                        <Grid container>
                            <Grid item lg = {6} md = {6} sm={12}  xs = {12}>
                                <Chart />
                            </Grid>
                            <Grid item lg = {6} md = {6} sm={12} xs = {12}>
                                <AllGoals />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg = {3} md = {12} sm = {12} xs = {12}>
                        <AccountInfo/>
                    </Grid>
                    <Grid item lg = {12} md = {12} sm = {12} xs = {12}>
                        <TranactionHistroy/>
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
