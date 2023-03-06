//----------------------------------------------------------------------Main Calendar Components---------------------//

import React from "react";

import GenerateCalendar from "./GenerateCalendar";

const Calendar = (props) => {
  return (
    <div>
      <GenerateCalendar month={props.month} year={props.year} />
    </div>
  );
};

export default Calendar;
