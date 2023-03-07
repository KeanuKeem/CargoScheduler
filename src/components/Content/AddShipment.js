import React, { useState, useRef } from "react";

import AddShipmentForm from "./AddShipmentForm";

import classes from "./Content.module.css";

const AddShipment = (props) => {
  const [cargowayState, setCargowayState] = useState("Import");
  const [cargotypeState, setCargotypeState] = useState("LCL");
  const dateRef = useRef();
  const idRef = useRef();
  const mblRef = useRef();
  const hblRef = useRef();
  const consignorRef = useRef();
  const consigneeRef = useRef();
  const brokerRef = useRef();
  const depotRef = useRef();
  const anRef = useRef();
  const invRef = useRef();
  const cclrRef = useRef();
  const inspRef = useRef();
  const delRef = useRef();
  const storageRef = useRef();
  const dnRef = useRef();

  const cargowayHandler = (event) => {
    setCargowayState(event.target.value);
  };

  const cargotypeHandler = (event) => {
    setCargotypeState(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();

    props.onAdd({
      cargoWay: cargowayState,
      cargoType: cargotypeState,
      date: dateRef.current.value,
      id: idRef.current.value,
      mbl: mblRef.current.value,
      hbl: hblRef.current.value,
      consignor: consignorRef.current.value,
      consignee: consigneeRef.current.value,
      broker: brokerRef.current.value,
      depot: depotRef.current.value,
      checkList: {
        an: idRef.current.checked,
        inv: invRef.current.checked,
        cclr: cclrRef.current.checked,
        insp: inspRef.current.checked,
        del: delRef.current.checked,
        storage: storageRef.current.checked,
        dn: dnRef.current.checked
      }
    });
    props.onPage();
    console.log(props.shipments);
  };

  return (
    <div className={classes["main-content"]}>
      <AddShipmentForm
        shipments={props.shipments}
        onSubmit={addHandler}
        onClickCancel={props.onClickCancel}
        onChangeCargoway={cargowayHandler}
        onChangeCargotype={cargotypeHandler}
        dateRef={dateRef}
        idRef={idRef}
        mblRef={mblRef}
        hblRef={hblRef}
        consignorRef={consignorRef}
        consigneeRef={consigneeRef}
        brokerRef={brokerRef}
        depotRef={depotRef}
        anRef={anRef}
        invRef={invRef}
        cclrRef={cclrRef}
        inspRef={inspRef}
        delRef={delRef}
        storageRef={storageRef}
        dnRef={dnRef}
      />
    </div>
  );
};

export default AddShipment;
