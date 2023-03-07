import React from "react";

import Selector from "../UI/Selector";

import classes from "./AddShipmentInput.module.css";

const AddShipmentInput = (props) => {
  return (
    <React.Fragment>
      <span className={classes["input__span"]}>
        <Selector className={classes["form-container__select"]} onChange={props.onChangeCargoway}>
          <option>Import</option>
          <option>Export</option>
        </Selector>
        <Selector className={classes["form-container__select-container"]} onChange={props.onChangeCargotype}>
          <option>LCL</option>
          <option>FCL</option>
          <option>FAK</option>
        </Selector>
        <br />
      </span>
      <span className={classes["input__span"]}>
        <input type="date" ref={props.dateRef} required/>
        <br />
      </span>
      <span className={classes["input__span"]}>
        <input type="text" ref={props.idRef} required/>
        <br />
      </span>
      <span className={classes["input__span"]}>
        <input type="text" ref={props.mblRef} />
        <br />
      </span>
      <span className={classes["input__span"]}>
        <input type="text" ref={props.hblRef}/>
        <br />
      </span>
      <span className={classes["input__span"]}>
        <input type="text" ref={props.consignorRef} />
        <br />
      </span>
      <span className={classes["input__span"]}>
        <input type="text" ref={props.consigneeRef} />
        <br />
      </span>
      <span className={classes["input__span"]}>
        <input type="text" ref={props.brokerRef} />
        <br />
      </span>
      <span className={classes["input__span"]}>
        <input type="text" ref={props.depotRef} />
        <br />
      </span>
    </React.Fragment>
  );
};

export default AddShipmentInput;
