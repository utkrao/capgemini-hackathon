import React, {useState, useContext} from "react";
import "./LeftSidebar.css";
import {FiltersContext} from "../../Context/FiltersContext"

const LeftSidebar = () => {
  // const [selectTech, setSelectTech] = React.useState(false);
  // const [selectBprocess, setSelectBprocess] = React.useState(false);
  // const [selectIndustry, setSelectIndustry] = React.useState(false);
  // const [selectAsset, setSelectAsset] = React.useState(false);


  const filter = useContext(FiltersContext);

  // const [selectTech, setSelectTech] = useContext(FiltersContext);
  // const [selectBprocess, setSelectBprocess] = useContext(FiltersContext);
  // const [selectIndustry, setSelectIndustry] = useContext(FiltersContext);
  // const [selectAsset, setSelectAsset] = useContext(FiltersContext);
  console.log(filter.select, 'this is filter context' );

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
            onChange={(e) => filter.setSelect({
              ...filter.select,
              selectTech: e.target.value
            })}
            class="form-select"
            id="dropdown-basic"
            aria-label="Default select example"
          >
            <option selected>Select Technology</option>
            <option>AI</option>
            <option>Carbon Recycling</option>
            <option>Blockchain</option>
            <option>ClimaProof</option>
            <option>Drones</option>
          </select>
        </div>

        <div class="filter-dd-style">
          <select
            onChange={(e) => filter.setSelect({
              ...filter.select,
              selectBprocess: e.target.value
            })}
            class="form-select"
            id="dropdown-basic"
            aria-label="Default select example"
          >
            <option selected>Business Process</option>
            <option>Logistics</option>
            <option>Research and Development</option>
            <option>Product Development</option>
            <option>Supply Chain</option>
            <option>Manufacturing</option>
          </select>
        </div>

        <div class="filter-dd-style">
          <select
            onChange={(e) => filter.setSelect({
              ...filter.select,
              selectIndustry: e.target.value
            })}
            class="form-select"
            id="dropdown-basic"
            aria-label="Default select example"
          >
            <option selected>Industry</option>
            <option>Retail</option>
            <option>IT</option>
            <option>Energy</option>
            <option>Sports Equipment and Accesories</option>
          </select>
        </div>

        <div class="filter-dd-style">
          <select
            onChange={(e) => filter.setSelect({
              ...filter.select,
              selectAsset: e.target.value
            })}
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
            {filter.select.selectTech ? (
              <>
                <div className="selected-filter">
                  <h6>{filter.select.selectTech}</h6>
                  <img src="./images/cross.svg" alt="" />
                </div>
              </>
            ) : null}
            {filter.select.selectBprocess ? (
              <>
                <div className="selected-filter">
                  <h6>{filter.select.selectBprocess}</h6>
                  <img src="./images/cross.svg" alt="" />
                </div>
              </>
            ) : null}
            {filter.select.selectIndustry ? (
              <>
                <div className="selected-filter">
                  <h6>{filter.select.selectIndustry}</h6>
                  <img src="./images/cross.svg" alt="" />
                </div>
              </>
            ) : null}
            {filter.select.selectAsset ? (
              <>
                <div className="selected-filter">
                  <h6>{filter.select.selectAsset}</h6>
                  <img src="./images/cross.svg" alt="" />
                </div>
              </>
            ) : null}
          </ng-container>

          <ng-container>
            {filter.select.selectAsset || filter.select.selectIndustry || filter.select.selectBprocess || filter.select.selectTech
              ? null
              : "None"}
          </ng-container>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
