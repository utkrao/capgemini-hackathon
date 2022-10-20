import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
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

                <Dropdown className='margin-dd'>
                    <Dropdown.Toggle id="dropdown-basic" className='dd-color'>
                        Technology
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">AI</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Carbon Recycling</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Blockchain</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='margin-dd'>
                    <Dropdown.Toggle id="dropdown-basic">
                        Business Process
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='margin-dd'>
                    <Dropdown.Toggle id="dropdown-basic">
                        Industry
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='margin-dd'>
                    <Dropdown.Toggle id="dropdown-basic">
                        Asset Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h1>Selected</h1>
                <div className="selected-box text-white">
                    None
                </div>

            </div>
        </div>
    )
}

export default LeftSidebar;