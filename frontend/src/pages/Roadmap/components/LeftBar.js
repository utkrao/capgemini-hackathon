import React from "react";
import "./LeftBar.css";

const LeftBar = () => {
  return (
    <div className="left-container">
      <div className="btn1">
        <div className="explore-btn">Roadmap</div>
        <div className="radar-btn">T-Map</div>
      </div>
      <div className="actions">
        <div className="action-btn">Save</div>
        <div className="action-btn">Export</div>
        <div className="action-btn">Print</div>
        <div className="action-btn">Delete</div>

        <h6>Action</h6>

        <div className="action-btn px-3 justify-content-between">
          <p>Undo</p> 
          <img src="/images/undo.svg" alt="" />
        </div>
        <div className="action-btn px-3 justify-content-between">
          <p>Redo</p> 
          <img src="/images/redo.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
