import { React, useState, useEffect } from "react";
import LeftBar from "./components/LeftBar";
import Main from "./components/Main";
import "./roadmap.css";

const Roadmap = () => {

  const [sdg_data, setSdgData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/tp");
    const data = await response.json();
    return setSdgData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="roadmap">
      <LeftBar />
      <Main data={sdg_data} />
    </div>
  );
};

export default Roadmap;
