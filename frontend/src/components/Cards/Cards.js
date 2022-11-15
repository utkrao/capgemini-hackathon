import React from 'react'
import Card from './Card'
import './Card.css'

function cards() {
  return (
    <div className='container d-flex justify-content-center'>
        <div className="row">
            <div className="col-md-4">
                <Card img={"/images/nature1.jpg"} title="What?" data="The sustainability radar is an interactive asset for business domains to explore the applications of the 17 Sustainable Development Goals(SDGs) from the internal and external sources and potential areas of contribution for NOW-NEW-NEXT of the organization to create a long-term positive impact on the environment." />
            </div>
            <div className="col-md-4">
                <Card img={"/images/nature2.jpg"} title="Why?" data="The sustainability radar aims to provide a holistic vuew of sustainability practices across various processes to guide the organizations to plan the next steps for action to be taken according to the upcoming horizons." />
            </div>
            <div className="col-md-4">
                <Card img={"/images/nature3.jpg"} title="How?" data="The radar is designed with the idea of providing useful information to the senior leaders of the organizations. They can: " data2="• Self-explore numerous innovative sustainable solutions." data3="• Customizae generic radar as per personal and organizational priorities." data4="• Use the assets as a tool for running workshops with stakeholders." />
            </div>
        </div>
    </div>
  )
}

export default cards;