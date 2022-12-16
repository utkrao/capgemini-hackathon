import { React, useState, useEffect } from "react";
import LeftSidebar from "../../components/Radar/LeftSidebar";
import Polar from "../../components/Radar/Polar";
import RightSidebar from "../../components/Radar/RightSidebar";
import SankeyChart from "../../components/Radar/SankeyChart";
import { Filters } from "../../Context/FiltersContext";
import "./radar.css";

const Radar = (props) => {
  const [sdg_data, setSdgData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/tp");
    const data = await response.json();
    return setSdgData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(sdg_data);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [toggleSubState, setToggleSubState] = useState(1);

  const toggleSubTab = (index) => {
    setToggleSubState(index);
  };

  return (
    <>
      <Filters>
        <div className="radar mt-100">
          <LeftSidebar />

          <div className="radar2 mt-100">
            <div className="bloc-tabs">
              <button
                className={toggleSubState === 6 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleSubTab(6)}
              >
                Polar
              </button>
              <button
                className={toggleSubState === 7 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleSubTab(7)}
              >
                Sankey
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleSubState === 6 ? "content  active-content" : "content"
                }
              >
                <h2 className="mt-1">Polar</h2>
                <Polar data={sdg_data} />
              </div>

              <div
                className={
                  toggleSubState === 7 ? "content  active-content" : "content"
                }
              >
                <h2 className="mt-1">Sankey</h2>
                <SankeyChart data={sdg_data} />
              </div>
            </div>
          </div>

          <RightSidebar data={sdg_data} />
        </div>
      </Filters>
    </>
  );
};

export default Radar;
