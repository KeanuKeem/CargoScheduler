import React from "react";

import classes from "./AddShipmentLabel.module.css";

const AddShipmentLabel = () => {
  return (
    <div className={classes["form-container__label"]}>
      <label>Cargo Type: </label>
      <br />
      <label>ETA: </label>
      <br />
      <label>Reference Number: </label>
      <br />
      <label>MBL Number: </label>
      <br />
      <label>HBL Number: </label>
      <br />
      <label>Consignor: </label>
      <br />
      <label>Consignee: </label>
      <br />
      <label>Broker: </label>
      <br />
      <label>Available Depot: </label>
      <br />
      <label>Notes: </label>
      <br />
    </div>
  );
};

export default AddShipmentLabel;
