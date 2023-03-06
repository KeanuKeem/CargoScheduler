import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Content />
    </React.Fragment>
  );
}

export default App;
