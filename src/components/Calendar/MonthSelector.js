import React from "react";

import Selector from "../UI/Selector";

const MonthSelector = (props) => {
  return (
    <Selector
      defaultValue={props.month}
      onChange={props.onChange}
      name="months"
      id="months"
    >
      {props.monthArray.map((m) => {
        return <option key={m} value={m}>{m}</option>;
      })}
    </Selector>
  );
};

export default MonthSelector;
