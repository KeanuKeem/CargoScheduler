import React from "react";

import classes from "./GenerateCalendar.module.css";

const CalendarLine = (props) => {
    return (
        <td>
            <h4 className={classes["calendar__no-data"]}>{props.date}</h4>
            <p>{props.schedule}</p>
        </td>
    );
    
};

export default CalendarLine;