//--------------------------------------------------------------------Calendar Generating Components---------------------//

import React from "react";
import CalendarCalculator from "./CalendarCalculator";

import classes from "./GenerateCalendar.module.css";

const GenerateCalendar = (props) => {
  return (
    <table className={classes.calendar}>
      <thead>
        <tr className={classes["calendar__month"]}>
          <th colSpan={7}>{props.month}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className={classes["calendar__sun"]}>SUN</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th className={classes["calendar__sat"]}>SAT</th>
        </tr>
      </tbody>
        <CalendarCalculator month={props.month} year={props.year} />
    </table>
  );
};

export default GenerateCalendar;
