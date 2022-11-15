import React from 'react'
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import SankeyChart from './SankeyChart';

function Radar() {
  return (
    <div className='radar-all'>
        <LeftSidebar />
        <SankeyChart />
        <RightSidebar />
        {/* <RadialChart /> */}
    </div>
  )
}

export default Radar;