import React from 'react'
import './header.css'

const Header = (props) => {
    return (
        <div>
            <h1 className={`header ${props.theme}`}>{props.head}</h1>
            <div className={`${props.color} underline-sec`}></div>
        </div>
    )
}

export default Header
