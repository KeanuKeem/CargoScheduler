import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content"
import AddShipment from "./components/Content/AddShipment";

function App() {
  const [calendarState, setCalendarState] = useState(true);
  const [addState, setAddstate] = useState(false);
  const [shipments, setShipments] = useState([]);

  const pageHandler = (event) => {
    if (calendarState) {
      setCalendarState(false)
      setAddstate(true)
    } else {
      setCalendarState(true);
      setAddstate(false);
    }
  };

  console.log(shipments);

  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      {calendarState && <Content onClick={pageHandler} />}
      {addState && <AddShipment shipments={shipments} onAdd={setShipments} onClickCancel={pageHandler} onPage={pageHandler} />}
    </React.Fragment>
  );

  
}

export default App;
