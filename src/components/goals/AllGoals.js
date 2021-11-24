import React,{useState} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Goal from "./Goal";
import {goals} from '../../services/getGoals';
import {useStyles} from './AllGoalsStyles';

const AllGoals = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [allGoals,setAllGoals] = useState([]);
    const maxSteps =  allGoals.length

    const getAllGoals = () =>{
       goals().then((data) => {
         if(data === undefined){
           console.log("undefined data");
         }
         else if(data.data.error){
           console.log("error on getting goals");
         }
         else{
           const item = data.data;
           const savedItems = Object.keys(item).map((key) => item[key]);         
           setAllGoals(savedItems);
         }
       })
    }

    useEffect(() => {
         getAllGoals();
    },[])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
       setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    if(allGoals.length === 0)
    {
      return (
        <div>
          NO GOALS
        </div>
      )
    }

    return (
       
        <div className={classes.root}>
          <Grid item >
             <Goal
                key = {allGoals[activeStep].id}
                title = {allGoals[activeStep].title}
                total = {allGoals[activeStep].total}
                collected = {allGoals[activeStep].collected}
                />
           </Grid>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick = {handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </div>
      );

export default AllGoals;

