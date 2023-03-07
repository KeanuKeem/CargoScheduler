//----------------------------------------------------------------------Main Calendar Components---------------------//

import React from "react";

import GenerateCalendar from "./GenerateCalendar";

import classes from "./Calendar.module.css";

const Calendar = (props) => {
  return (
    <div className={classes["main-container__calendar"]}>
      <GenerateCalendar month={props.month} year={props.year} />
    </div>
  );
};

export default Calendar;
