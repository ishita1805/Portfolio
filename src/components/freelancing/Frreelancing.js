import React from 'react'
import './freelancing.css'
import Header from '../header/Header'
import FreelanceCard from '../freelanceCard/FreelanceCard'
import freelanceList from '../../data/freelanceList'
import { useTranslation } from 'react-i18next';

const Frreelancing = () => {
    const { t } = useTranslation();
    return (
        <div id='freelance'>
            <Header head={t('freelance')} color='blue'/>
            <br/><br/>
           {freelanceList.map((item) =>(
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
