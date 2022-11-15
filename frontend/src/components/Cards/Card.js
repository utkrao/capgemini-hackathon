import React, { Component } from 'react'
import './Card.css'

const Card = props => {
    return (
        <div className="card text-center">
            <div className="holder overflow">
                <img src={props.img} className='card-img-top' alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    {props.title}
                </div>
                <div className="card-body">
                    {props.data}
                </div>
                <div className="card-body2">
                    {props.data2}
                </div>
                <div className="card-body2">
                    {props.data3}
                </div>
                <div className="card-body2">
                    {props.data4}
                </div>
            </div>
        </div>
    );
}
 
export default Card;