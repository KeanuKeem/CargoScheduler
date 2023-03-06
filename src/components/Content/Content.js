//----------------------------------------------------------------------Main Contents Components---------------------//

import React, { useState } from "react";

import Calendar from "../Calendar/Calendar";
import CalendarControls from "../Calendar/CalendarControls";

import classes from "./Content.module.css";

const Content = () => {
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yearArray = [
    2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033,
  ];
  const thisMonth = monthArray[new Date().getMonth()];
  const thisYear = new Date().getFullYear();

  const [month, setMonth] = useState(thisMonth);
  const [year, setYear] = useState(thisYear);

  const monthHandler = (event) => {
    setMonth(event.target.value);
  };

  const yearHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className={classes["main-content"]}>
      <div className={classes["main-content__container"]}>
        <CalendarControls
          month={month}
          year={year}
          onChangeMonth={monthHandler}
          onChangeYear={yearHandler}
          monthArray={monthArray}
          yearArray={yearArray}
        />
      </div>
      <Calendar month={month} year={year} />
    </div>
  );
};

export default Content;
