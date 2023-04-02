import React from "react";
import TuitsList from "../tuits/tuit-list";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return(
    <div className="container">
      <h4>Home</h4>
      <WhatsHappening/>
      <TuitsList/>
    </div>
  );
}
export default HomeComponent;