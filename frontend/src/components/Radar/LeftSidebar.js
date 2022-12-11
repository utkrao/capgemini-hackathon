import React from "react";
import "./LeftSidebar.css";

function LeftSidebar() {
  const [selectTech, setSelectTech] = React.useState(false);
  const [selectBprocess, setSelectBprocess] = React.useState(false);
  const [selectIndustry, setSelectIndustry] = React.useState(false);
  const [selectAsset, setSelectAsset] = React.useState(false);

  return (
    <div className="left-container">
      <div className="btn1">
        <div className="explore-btn">Explore</div>
        <div className="radar-btn">Radar</div>
      </div>
      <div className="filters">
        <h1>Filters</h1>

        <div class="filter-dd-style">
          <select
            onChange={(e) => setSelectTech(e.target.value)}
            class="form-select"
            id="dropdown-basic"
            aria-label="Default select example"
          >
            <option selected>Select Technology</option>
            <option>AI</option>
            <option>Carbon Recycling</option>
            <option>Blockchain</option>
          </select>
        </div>

        <div class="filter-dd-style">
          <select
            onChange={(e) => setSelectBprocess(e.target.value)}
            class="form-select"
            id="dropdown-basic"
            aria-label="Default select example"
          >
            <option selected>Business Process</option>
            <option>Product Development</option>
            <option>Manufacturing</option>
            <option>Operational Processes</option>
          </select>
        </div>

        <div class="filter-dd-style">
          <select
            onChange={(e) => setSelectIndustry(e.target.value)}
            class="form-select"
            id="dropdown-basic"
            aria-label="Default select example"
          >
            <option selected>Industry</option>
            <option>IT</option>
            <option>Energy</option>
            <option>Sports Equipment and Accesories</option>
          </select>
        </div>

        <div class="filter-dd-style">
          <select
            onChange={(e) => setSelectAsset(e.target.value)}
            class="form-select"
            id="dropdown-basic"
            aria-label="Default select example"
          >
            <option selected>Asset Type</option>
            <option>Start-Up</option>
            <option>Organizational Institute</option>
            <option>Industry Published Example</option>
          </select>
        </div>

        <h1>Selected</h1>
        <div className="selected-box text-white">
          <ng-container>
            {selectTech ? (
              <>
                <div className="selected-filter">
                  <h6>{selectTech}</h6>
                  <img src="./images/cross.svg" alt="" />
                </div>
              </>
            ) : null}
            {selectBprocess ? (
              <>
                <div className="selected-filter">
                  <h6>{selectBprocess}</h6>
                  <img src="./images/cross.svg" alt="" />
                </div>
              </>
            ) : null}
            {selectIndustry ? (
              <>
                <div className="selected-filter">
                  <h6>{selectIndustry}</h6>
                  <img src="./images/cross.svg" alt="" />
                </div>
              </>
            ) : null}
            {selectAsset ? (
              <>
                <div className="selected-filter">
                  <h6>{selectAsset}</h6>
                  <img src="./images/cross.svg" alt="" />
                </div>
              </>
            ) : null}
          </ng-container>

          <ng-container>
            {selectAsset || selectIndustry || selectBprocess || selectTech
              ? null
              : "None"}
          </ng-container>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
