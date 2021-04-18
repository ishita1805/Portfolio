import React from 'react'
import './button.css'
import { Link } from "react-scroll";

const Button = (props) => {
   
    if(props.internal===0) return (
        <div>
            {
                props.icon?
                <Link to={props.id} spy={true} offset={-58} smooth={true} duration={500}><button className={props.fill?`filled-button-i ${props.color}`:`line-button ${props.color}`}><i className={`${props.label}`}></i></button></Link>
                :<Link to={props.id} spy={true} offset={-58} smooth={true} duration={500}><button className={props.fill?`filled-button ${props.color} ${props.width}`:`line-button ${props.color} ${props.width}`}>{props.label}<i className={`fa fa-long-arrow-right ${props.small}`}></i></button></Link>
            }
            
        </div>
    )
    else return (
        <div>
            {
                props.icon?
                <a href={props.id} target='__blank'><button className={props.fill?`filled-button-i ${props.color}`:`line-button ${props.color}`}><i className={`${props.label}`}></i></button></a>:
                <a href={props.id} target='__blank'><button className={props.fill?`filled-button ${props.color} ${props.width}`:`line-button ${props.color} ${props.width}`}>{props.label}<i className={`fa fa-long-arrow-right ${props.small}`}></i></button></a>
            }
            
        </div>
    )
   
}

export default Button
