import React from 'react';
import './FilterYear.css';

const FilterYear = (props) => {

    const yearChangeHandler = (event) =>{
        props.onSaveYear(event.target.value);
    }
     
    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.year} onChange = {yearChangeHandler} >
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    );
}

export default FilterYear;