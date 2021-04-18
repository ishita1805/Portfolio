import React from 'react'
import './freelanceCard.css'

const FreelanceCard = (props) => {
    return (
        <div className={`${props.align}`}>
            <div className='content-fr'>
                <h2>{props.title}</h2>
                <p>
                {props.p1}
                </p>
                <p>
                {props.p2}
                </p>
            </div>
            <div className='vid-holder-fr'></div>
            
        </div>
    )
}

export default FreelanceCard
