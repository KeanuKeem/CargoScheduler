import React from "react";

import Selector from "../UI/Selector";

import classes from "./YearSelector.module.css";

const YearSelector = (props) => {
  return (
    <Selector
      defaultValue={props.year}
      className={classes.selector}
      onChange={props.onChange}
      name="years"
      id="years"
    >
      {props.yearArray.map((y) => {
        return <option key={y} value={y}>{y}</option>;
      })}
    </Selector>
  );
};

export default YearSelector;
