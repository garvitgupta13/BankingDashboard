import React,{useState} from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Goal.css';




const Goal = (props) => {
 
    //console.log(props.title,props.total,props.collected);

    const value = (props.collected/props.total)*100;
    
    const [total,setTotal] = useState(props.total);
    const [collected,setCollected] = useState(props.collected);


    const goalChangeHandler = (newGoal) => {
      console.log(newGoal);
    }
     
    const totalChangeHandler = (newTotal) => {
      console.log(newTotal);
    }

    return(
      <Box className="goal-box-main" position="relative" display="inline-flex">
          <div className="goal-div">
             <h1>{props.title}</h1>
          </div>
          <CircularProgress variant="determinate" value={value} size={130}/>
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
            <Typography variant="h5" component="div" color="textSecondary">{`${Math.round(
              value,
            )}%`}</Typography>
            <div className = "show-figures">
                 <h2>Total</h2>
                 <p>{props.total}</p>
                 <h2>Achieved</h2>
                 <p>{props.collected}</p>
            </div>
          </Box>
      </Box>
    )

}

export default Goal;