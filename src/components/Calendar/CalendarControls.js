import React from "react";

import MonthSelector from "./MonthSelector";
import YearSelector from "./YearSelector";

import classes from "./CalendarControls.module.css";

const CalendarControls = (props) => {
    return (
        <div className={classes['container__selector']}>
            <MonthSelector onChange={props.onChangeMonth} monthArray={props.monthArray} month={props.month}/>
            <YearSelector onChange={props.onChangeYear} yearArray={props.yearArray} year={props.year} />
            <button onClick={props.onClick}>ADD</button>
        </div>
    );
};

export default CalendarControls;