import React from "react";
import "./Main.css";
import { FiltersContext } from "../../../Context/FiltersContext";

const Main = ({ data = [] }) => {
  return (
    <div className="roadmap__main">
      <div className="roadmap__grid">
        <div className="number"><h5>1</h5></div>
        <div className="example">
          <h4>Examples</h4>
          <div className="example__data">
            {data.map((item, index) =>
              item.Technology === "AI" &&
              item.Affected_Business_Process === "Logistics" ? (
                <div className="description__data">
                  <h5>{item.Company_Name + " - " + item.Primary_SDG}</h5>
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="g__action">
          <h4>Generic Action</h4>
          <div className="g__action__data">
            {data.map((item, index) =>
              item.Technology === "AI" &&
              item.Affected_Business_Process === "Logistics" ? (
                <div className="description__data">
                  <h6>{item.Generic_Action}</h6>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="action__time">
            <h4>My Action</h4>
            <div className="action__time__input">
              <input type="text" placeholder="Write down your goals"/>
            </div>
        </div>
        <div className="action__time">
            <h4>Time</h4>
            <div className="action__time__input">
              <input type="text" placeholder="Assign a timeframe for your goals" />
            </div>
        </div>
        <div className="t__map">
          <h4>Add to T-Map</h4>
        </div>
      </div>

      <div className="roadmap__grid">
        <div className="number"><h5>2</h5></div>
        <div className="example">
          <h4>Examples</h4>
          <div className="example__data">
            {data.map((item, index) =>
              item.Technology === "AI" &&
              item.Affected_Business_Process === "Research and Development" ? (
                <div className="description__data">
                  <h5>{item.Company_Name + " - " + item.Primary_SDG}</h5>
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="g__action">
          <h4>Generic Action</h4>
          <div className="g__action__data">
            {data.map((item, index) =>
              item.Technology === "AI" &&
              item.Affected_Business_Process === "Research and Development" ? (
                <div className="description__data">
                  <h6>{item.Generic_Action}</h6>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="action__time">
          <h4>My Action</h4>
          <div className="action__time__input">
            <input type="text" placeholder="Write down your goals"/>
          </div>
        </div>
        <div className="action__time">
          <h4>Time</h4>
          <div className="action__time__input">
            <input type="text" placeholder="Assign a timeframe for your goals" />
          </div>
        </div>
        <div className="t__map">
          <h4>Add to T-Map</h4>
        </div>
      </div>

      <div className="roadmap__grid">
        <div className="number"><h5>3</h5></div>
        <div className="example">
          <h4>Examples</h4>
          <div className="example__data">
            {data.map((item, index) =>
              item.Technology === "AI" &&
              item.Affected_Business_Process === "Supply Chain" ? (
                <div className="description__data">
                  <h5>{item.Company_Name + " - " + item.Primary_SDG}</h5>
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="g__action">
          <h4>Generic Action</h4>
          <div className="g__action__data">
            {data.map((item, index) =>
              item.Technology === "AI" &&
              item.Affected_Business_Process === "Supply Chain" ? (
                <div className="description__data">
                  <h6>{item.Generic_Action}</h6>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="action__time">
          <h4>My Action</h4>
          <div className="action__time__input">
            <input type="text" placeholder="Write down your goals"/>
          </div>
        </div>
        <div className="action__time">
          <h4>Time</h4>
          <div className="action__time__input">
            <input type="text" placeholder="Assign a timeframe for your goals" />
          </div>
        </div>
        <div className="t__map">
          <h4>Add to T-Map</h4>
        </div>
      </div>
    </div>
  );
};

export default Main;
