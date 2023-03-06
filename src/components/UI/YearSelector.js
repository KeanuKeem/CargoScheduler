import React from "react";

import classes from "./YearSelector.module.css";

const YearSelector = (props) => {
  return (
    <select className={classes.selector} onChange={props.onChange} name="years" id="years">
      {props.yearArray.map((y) => {
        if (y === props.year) {
          return (
            <option value={y} selected>
              {y}
            </option>
          );
        } else {
          return <option value={y}>{y}</option>;
        }
      })}
    </select>
  );
};

export default YearSelector;
