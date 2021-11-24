import React,{useState} from "react";
import './Goal.css';

const AlterGoal = (props) => {


    const [total,setTotal] = useState(props.total);
    
    console.log("total is ",total);
    const totalChangeHandler = (event) =>{
        setTotal(event.target.value);
    }



    return (
        <div className="alter-div">
             <input type = "number" name = "fname" value={total} onChange={totalChangeHandler}></input>
        </div>
    )
}

export default AlterGoal;