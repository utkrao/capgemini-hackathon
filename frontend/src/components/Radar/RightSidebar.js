import React, { useContext } from "react";
import "./RightSidebar.css";
import "../../pages/Radar/radar";
import { FiltersContext } from "../../Context/FiltersContext";

const RightSidebar = ({ data = [] }) => {
  const filter = useContext(FiltersContext);

  // const [selectTech] = useContext(FiltersContext);
  // const [selectBprocess] = useContext(FiltersContext);
  // const [selectAsset] = useContext(FiltersContext);
  // const [selectIndustry] = useContext(FiltersContext);

  console.log(filter);
  return (
    <div className="right-sidebar">
      <div className="description-box">
        Choose Filters
        {filter.select.selectTech === "AI" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "AI" ? (
                <>
                  <p>{item.Company_Name}</p>
                </>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "Blockchain" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "Blockchain" ? (
                <>
                  <p>{item.Company_Name}</p>
                </>
              ) : null
            )}
          </>
        ) : null}


        
      </div>
      <div className="add-to-radar-box">
        Choose Filters
        {data.map(({ Company_Industry }, index) => (
          <p>{Company_Industry}</p> //key
        ))}
      </div>
      <div>{filter.select.selectTech}</div>
      <div>{filter.select.selectBprocess}</div>
      <div>{filter.select.selectAsset}</div>
      <div>{filter.select.selectIndustry}</div>
    </div>
  );
};

export default RightSidebar;
