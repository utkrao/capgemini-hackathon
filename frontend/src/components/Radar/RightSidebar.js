import React from 'react'
import './RightSidebar.css'
import '../../pages/Radar/Radar'

const RightSidebar = ( {data = []} ) => {
  console.log({data});
  return (
    <div className='right-sidebar'>
      <div className="name-box">
      {data.map(
        ({Company_Name}, index) => (
          <p>{Company_Name}</p>  //key
        )
      )}
      </div>
      <div className="add-to-radar-box">Click on Example</div>
    </div>
  )
}

export default RightSidebar;