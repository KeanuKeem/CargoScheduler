import React from "react";

import classes from "./AddShipmentNotes.module.css";

const AddShipmentNotes = (props) => {
  return (
    <div className={classes["form-container__notes"]}>
      <span className={classes["input__span__notes"]}>
        <label className={classes["input__radio-label"]}>
          <input type="checkbox" ref={props.anRef} /> Arrival Notice
        </label>
        <label className={classes["input__radio-label"]}>
          <input type="checkbox" ref={props.invRef} /> Invoice
        </label>
        <label className={classes["input__radio-label"]}>
          <input type="checkbox" ref={props.cclrRef} /> Clearance
        </label>
        <br />
        <label className={classes["input__radio-label"]}>
          <input type="checkbox" ref={props.inspRef} /> Inspection
        </label>
        <label className={classes["input__radio-label"]}>
          <input type="checkbox" ref={props.delRef} /> Delivery
        </label>
        <label className={classes["input__radio-label"]}>
          <input type="checkbox" ref={props.storageRef} /> Storage
        </label>
        <br />
        <label className={classes["input__radio-label"]}>
          <input type="checkbox" ref={props.dnRef} /> Debit Note
        </label>
      </span>
    </div>
  );
};

export default AddShipmentNotes;
