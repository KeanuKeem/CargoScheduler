import React from "react";

const MonthSelector = (props) => {
  return (
    <select onChange={props.onChange} name="months" id="months">
      {props.monthArray.map((m) => {
        if (m === props.month) {
          return (
            <option value={m} selected>
              {m}
            </option>
          );
        } else {
          return <option value={m}>{m}</option>;
        }
      })}
    </select>
  );
};

export default MonthSelector;
