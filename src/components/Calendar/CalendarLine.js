import React from "react";

import classes from "./GenerateCalendar.module.css";

const CalendarLine = (props) => {
    return (
        <td>
            <h4 key={props.id + "H"} className={classes["calendar__no-data"]}>{props.date}</h4>
            <p key={props.id}>{props.schedule}</p>
        </td>
    );
    
};

export default CalendarLine;