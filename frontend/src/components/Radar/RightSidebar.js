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
        {filter.select.selectTech === "AI" && filter.select.selectBprocess === "Logistics" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "AI" && item.Affected_Business_Process === "Logistics" ? (
                <div className="description__data">
                  <h4>{"Company Name: " + item.Company_Name}</h4>
                  <p>
                    {"Target " +
                      item.Primary_Targets +
                      "   and indicators  " +
                      item.Primary_Indicators}
                  </p>
                  <br />
                  <br />
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "AI" && filter.select.selectBprocess === "Research and Development" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "AI" && item.Affected_Business_Process === "Research and Development" ? (
                <div className="description__data">
                  <h4>{"Company Name: " + item.Company_Name}</h4>
                  <p>
                    {"Target " +
                      item.Primary_Targets +
                      "   and indicators  " +
                      item.Primary_Indicators}
                  </p>
                  <br />
                  <br />
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "AI" && filter.select.selectBprocess === "Supply Chain" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "AI" && item.Affected_Business_Process === "Supply Chain" ? (
                <div className="description__data">
                  <h4>{"Company Name: " + item.Company_Name}</h4>
                  <p>
                    {"Target " +
                      item.Primary_Targets +
                      "   and indicators  " +
                      item.Primary_Indicators}
                  </p>
                  <br />
                  <br />
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "Carbon Recycling" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "Carbon Recycling" ? (
                <div className="description__data">
                  <h4>{"Company Name: " + item.Company_Name}</h4>
                  <p>
                    {"Target " +
                      item.Primary_Targets +
                      "   and indicators  " +
                      item.Primary_Indicators}
                  </p>
                  <br />
                  <br />
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "Blockchain" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "Blockchain" ? (
                <div className="description__data">
                  <h4>{"Company Name: " + item.Company_Name}</h4>
                  <p>
                    {"Target " +
                      item.Primary_Targets +
                      "   and indicators  " +
                      item.Primary_Indicators}
                  </p>
                  <br />
                  <br />
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "ClimaProof" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "ClimaProof" ? (
                <div className="description__data">
                  <h4>{"Company Name: " + item.Company_Name}</h4>
                  <p>
                    {"Target " +
                      item.Primary_Targets +
                      "   and indicators  " +
                      item.Primary_Indicators}
                  </p>
                  <br />
                  <br />
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "Drones" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "Drones" ? (
                <div className="description__data">
                  <h4>{"Company Name: " + item.Company_Name}</h4>
                  <p>
                    {"Target " +
                      item.Primary_Targets +
                      "   and indicators  " +
                      item.Primary_Indicators}
                  </p>
                  <br />
                  <br />
                  <h6>{item.Example_Description}</h6>
                </div>
              ) : null
            )}
          </>
        ) : (
          "Choose Filters"
        )}
      </div>
      <div className="add-to-radar-box">
        {filter.select.selectTech === "AI" && filter.select.selectBprocess === "Logistics"  ? (
          <>
            {data.map((item, index) =>
              item.Technology === "AI" && item.Affected_Business_Process === "Logistics" ? (
                <div className="">
                  <p>{item.Primary_SDG}</p>
                  <p>{"Impact - " + item.Impact}</p>
                  <p>
                    {"Business Process - " + item.Affected_Business_Process}
                  </p>
                  <p>{"Technology - " + item.Technology}</p>
                  <p>{"Industry - " + item.Company_Industry}</p>
                  <p>{"Asset Type - " + item.TypeofExample}</p>
                  <div className="add-to-radar-btn">Add to Roadmap</div>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "AI" && filter.select.selectBprocess === "Research and Development"  ? (
          <>
            {data.map((item, index) =>
              item.Technology === "AI" && item.Affected_Business_Process === "Research and Development" ? (
                <div className="">
                  <p>{item.Primary_SDG}</p>
                  <p>{"Impact - " + item.Impact}</p>
                  <p>
                    {"Business Process - " + item.Affected_Business_Process}
                  </p>
                  <p>{"Technology - " + item.Technology}</p>
                  <p>{"Industry - " + item.Company_Industry}</p>
                  <p>{"Asset Type - " + item.TypeofExample}</p>
                  <div className="add-to-radar-btn">Add to Roadmap</div>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "AI" && filter.select.selectBprocess === "Supply Chain"  ? (
          <>
            {data.map((item, index) =>
              item.Technology === "AI" && item.Affected_Business_Process === "Supply Chain" ? (
                <div className="">
                  <p>{item.Primary_SDG}</p>
                  <p>{"Impact - " + item.Impact}</p>
                  <p>
                    {"Business Process - " + item.Affected_Business_Process}
                  </p>
                  <p>{"Technology - " + item.Technology}</p>
                  <p>{"Industry - " + item.Company_Industry}</p>
                  <p>{"Asset Type - " + item.TypeofExample}</p>
                  <div className="add-to-radar-btn">Add to Roadmap</div>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "Carbon Recycling" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "Carbon Recycling" ? (
                <div className="">
                  <p>{item.Primary_SDG}</p>
                  <p>{"Impact - " + item.Impact}</p>
                  <p>
                    {"Business Process - " + item.Affected_Business_Process}
                  </p>
                  <p>{"Technology - " + item.Technology}</p>
                  <p>{"Industry - " + item.Company_Industry}</p>
                  <p>{"Asset Type - " + item.TypeofExample}</p>
                  <div className="add-to-radar-btn">Add to Roadmap</div>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "Blockchain" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "Blockchain" ? (
                <div className="">
                  <p>{item.Primary_SDG}</p>
                  <p>{"Impact - " + item.Impact}</p>
                  <p>
                    {"Business Process - " + item.Affected_Business_Process}
                  </p>
                  <p>{"Technology - " + item.Technology}</p>
                  <p>{"Industry - " + item.Company_Industry}</p>
                  <p>{"Asset Type - " + item.TypeofExample}</p>
                  <div className="add-to-radar-btn">Add to Roadmap</div>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "ClimaProof" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "ClimaProof" ? (
                <div className="">
                  <p>{item.Primary_SDG}</p>
                  <p>{"Impact - " + item.Impact}</p>
                  <p>
                    {"Business Process - " + item.Affected_Business_Process}
                  </p>
                  <p>{"Technology - " + item.Technology}</p>
                  <p>{"Industry - " + item.Company_Industry}</p>
                  <p>{"Asset Type - " + item.TypeofExample}</p>
                  <div className="add-to-radar-btn">Add to Roadmap</div>
                </div>
              ) : null
            )}
          </>
        ) : filter.select.selectTech === "Drones" ? (
          <>
            {data.map((item, index) =>
              item.Technology === "Drones" ? (
                <div className="">
                  <p>{item.Primary_SDG}</p>
                  <p>{"Impact - " + item.Impact}</p>
                  <p>
                    {"Business Process - " + item.Affected_Business_Process}
                  </p>
                  <p>{"Technology - " + item.Technology}</p>
                  <p>{"Industry - " + item.Company_Industry}</p>
                  <p>{"Asset Type - " + item.TypeofExample}</p>
                  <div className="add-to-radar-btn">Add to Roadmap</div>
                </div>
              ) : null
            )}
          </>
        ) : (
          "Choose Filters"
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
