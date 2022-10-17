import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HeroSection from '../HeroSec/HeroSection';
import RadialChart from '../Radar/RadialChart';
import Cards from '../Cards/Cards';
import SankeyChart from '../Radar/SankeyChart';
import LeftSidebar from '../Radar/LeftSidebar';
import RightSidebar from '../Radar/RightSidebar';
import PolarChart from '../Radar/PolarChart';

const Navbar = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img className='nav-logo' src="/images/capgemini_logo.png" width={200} />
        </div>
        <ul className='nav-menu'>
          <li className='nav-items'>
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
              <Link to='/' className='nav-links'>Home</Link>
            </button>
          </li>
          <li className='nav-items'>
            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
              <Link to='/radar' className='nav-links'>Radar</Link>
            </button>
          </li>
          <li className='nav-items'>
            <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
              <Link to='/roadmap' className='nav-links'>Roadmap</Link>
            </button>
          </li>
          <li className='nav-items'>
            <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
              <Link to='/sdg-concepts' className='nav-links'>SDG Concepts</Link>
            </button>
          </li>
          <li className='nav-items'>
            <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
              <Link to='/about' className='nav-links'>About</Link>
            </button>
          </li>
        </ul>
      </nav>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <HeroSection />
          <Cards />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="radar">
            <LeftSidebar />
            {/* <SankeyChart /> */}
            <PolarChart />
            <RightSidebar />
          </div>
          <RadialChart />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
        </div>

      </div>
    </>
  )
}

export default Navbar;