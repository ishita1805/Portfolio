import React from 'react'
import './button.css'

const Button = (props) => {
    return (
        <div>
            {
                props.icon?
                <button className={props.fill?`filled-button-i ${props.color}`:`line-button ${props.color}`}><i className={`${props.label}`}></i></button>
                :<button className={props.fill?`filled-button ${props.color} ${props.width}`:`line-button ${props.color} ${props.width}`}>{props.label}<i className='fa fa-long-arrow-right'></i></button>
            }
            
        </div>
    )
}

export default Button
