import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <img className="sideBar_meditate" alt="" src="/assets/meditate.png"></img>
      <img className="sideBar_swim" alt="" src="/assets/swim.png"></img>
      <img className="sideBar_bike" alt="" src="/assets/bike.png"></img>
      <img className="sideBar_train" alt="" src="/assets/train.png"></img>
      <img className="sideBar_copyright" alt="" src="/assets/copyright.png"></img>
    </div>
  );
};

export default SideBar;
