import { set } from "date-fns";
import React,{useState} from "react";
import { Grid } from "@material-ui/core";
import Goal from "./Goal";

const DUMMY_GOALS = [
      { 
          id: 101,
          title:'Car',
          total:120000,
          collected:20000
      },
      { 
        id: 101,
        title:'Car',
        total:120000,
        collected:20000
    },
      {
          id:  102,
          title:'House',
          total:7500000,
          collected:500000,
      },
      {
          id: 103,
          title:'Furnitures',
          total:300000,
          collected:150000,
      }
];

const AllGoals = () => {

    const len = DUMMY_GOALS.length;


    return(
        <Grid container className="allGoals-grid">
        {DUMMY_GOALS.map((obj, index) => (
             <Grid item >
                     <Goal
                        key = {obj.id}
                        title = {obj.title}
                        total = {obj.total}
                        collected = {obj.collected}
                        />
              </Grid>
        
        ))}
        </Grid>
    )
}

export default AllGoals;
