import React from 'react'
import './LeftSidebar.css'

function LeftSidebar() {
    return (
        <div className="left-container">
            <div className='btn1'>
                <div className='explore-btn'>Explore</div>
                <div className='radar-btn'>Radar</div>
            </div>
            <div className="filters">
                <h1>Filters</h1>

                <div className="dd-container">

                    <div className="btn-group dp-btn-style">
                        <button type="button" className="btn text-white">Technology</button>

                        <button type="button" className="btn dropdown-toggle text-white" data-toggle="dropdown">
                            <span className="caret"></span>
                            <span className="sr-only"></span>
                        </button>

                        <ul className="dropdown-menu text-white" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div className="btn-group dp-btn-style">
                        <button type="button" className="btn text-white">Business process</button>

                        <button type="button" className="btn dropdown-toggle text-white" data-toggle="dropdown">
                            <span className="caret"></span>
                            <span className="sr-only"></span>
                        </button>

                        <ul className="dropdown-menu text-white" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div className="btn-group dp-btn-style">
                        <button type="button" className="btn text-white">Industry</button>

                        <button type="button" className="btn dropdown-toggle text-white" data-toggle="dropdown">
                            <span className="caret"></span>
                            <span className="sr-only"></span>
                        </button>

                        <ul className="dropdown-menu text-white" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div className="btn-group dp-btn-style">
                        <button type="button" className="btn text-white">Asset type</button>

                        <button type="button" className="btn dropdown-toggle text-white" data-toggle="dropdown">
                            <span className="caret"></span>
                            <span className="sr-only"></span>
                        </button>

                        <ul className="dropdown-menu text-white" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div>

                <h1>Selected</h1>
                <div className="selected-box text-white">
                    None
                </div>

            </div>
        </div>
    )
}

export default LeftSidebar;