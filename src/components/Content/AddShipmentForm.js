import React from "react";

import classes from "./AddShipmentForm.module.css";
import AddShipmentInput from "./AddShipmentInput";
import AddShipmentLabel from "./AddShipmentLabel";
import AddShipmentNotes from "./AddShipmentNotes";

const AddShipmentForm = (props) => {
  return (
    <div className={classes["form-container"]}>
      <h1>Create a Shipment Schedule</h1>

      <form onSubmit={props.onSubmit}>
        <AddShipmentLabel />

        <div className={classes["form-container__input"]}>
          <AddShipmentInput
            onChangeCargoway={props.onChangeCargoway}
            onChangeCargotype={props.onChangeCargotype}
            dateRef={props.dateRef}
            idRef={props.idRef}
            mblRef={props.mblRef}
            hblRef={props.hblRef}
            consignorRef={props.consignorRef}
            consigneeRef={props.consigneeRef}
            brokerRef={props.brokerRef}
            depotRef={props.depotRef}
          />
          <AddShipmentNotes
            anRef={props.anRef}
            invRef={props.invRef}
            cclrRef={props.cclrRef}
            inspRef={props.inspRef}
            delRef={props.delRef}
            storageRef={props.storageRef}
            dnRef={props.dnRef}
          />
          <div className={classes["form-container__btn"]}>
            <button type="submit">ADD</button>
            <button onClick={props.onClickCancel}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddShipmentForm;
