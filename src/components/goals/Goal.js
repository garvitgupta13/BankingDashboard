import React,{useState,useEffect} from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import AlterGoal from "./AlterGoal";
import './Goal.css';




const Goal = (props) => {

    const [value,setValue] = useState((props.collected/props.total)*100);
    const [total,setTotal] = useState(props.total);
    const [collected,setCollected] = useState(props.collected);


    const goalChangeHandler = (newGoal) => {
      setCollected(newGoal);
     }
     
    const totalChangeHandler = (newTotal) => {
      setTotal(newTotal);
    }


    useEffect(()=>{
      setValue((collected/total)*100 > 100 ? 100 : (collected/total)*100);
    },[total,collected])



    console.log(total,value);

    return(
      <Box className="goal-box-main" position="relative">
          <div className="goal-div">
             <h1>{props.title}</h1>
          </div>
          <CircularProgress className="goal-circle" variant="determinate" value={value} size={130}/>
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className="goal-value" variant="h5" component="div" color="textSecondary">{`${Math.round(
              value,
            )}%`}</Typography>
            <div className = "show-figures">
                 <AlterGoal 
                 total = {total}
                 onChangeTotal = {totalChangeHandler}
                 onChangeGoal = {goalChangeHandler} 
                 collected = {collected}/>
            </div>
          </Box>
      </Box>
    )

}

export default Goal;