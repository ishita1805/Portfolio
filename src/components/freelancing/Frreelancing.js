import React from 'react'
import './freelancing.css'
import Header from '../header/Header'
import FreelanceCard from '../freelanceCard/FreelanceCard'
import freelanceList from '../../data/freelanceList'

const Frreelancing = () => {
    return (
        <div id='freelance'>
            <Header head='Freelancing' color='blue'/>
            <br/><br/>
           { freelanceList.map((item) =>(
                <FreelanceCard 
                    align={item.align}
                    title={item.title}
                    p1={item.p1}
                    p2={item.p2}
                    />
            ))}
        </div>
    )
}

export default Frreelancing
