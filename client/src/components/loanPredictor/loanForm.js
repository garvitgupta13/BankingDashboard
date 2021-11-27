import React,{useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoanForm = () => {

    const [amount,setAmount] = useState();
    const [year,setYear] = useState();
    const [type,setType] = useState();
    
    const predictHandler = () => {
        console.log("Hurrah !!!")
    }
    return (
     <div style={{margin:'10px',}}>
         <h2>Loan Predictor!!!</h2>
         <TextField
            autoFocus
            margin="dense"
            label="Type"
            type="text"
            value = {type}
            onChange = {((event) => setType(event.target.value))}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Amount"
            type="number"
            value = {amount}
            onChange = {((event) => setAmount(event.target.value))}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Years"
            type="number"
            value = {year}
            onChange = {((event) => setYear(event.target.value))}
            fullWidth
          />
          <Button onClick={predictHandler} color="primary" variant="contained">
             Predict
          </Button>
     </div>
    );
}

export default LoanForm;