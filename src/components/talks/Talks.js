import React from 'react'
import Header from '../header/Header'
import FreelanceCard from '../freelanceCard/FreelanceCard'
import freelanceList from '../../data/freelanceList'

const Frreelancing = () => {

    return (
        <div id='talks'>
            <Header head='Talks and Events' color='blue'/>
            <br/><br/>
            <div className='grid-talks'>
           {freelanceList.map((item) =>(
                <FreelanceCard 
                    align={item.align}
                    title={item.title}
                    date={item.date}
                    p1={item.p1}
                    p2={item.p2}
                    />
            ))}
            </div>
        </div>
    )
}

export default Frreelancing
