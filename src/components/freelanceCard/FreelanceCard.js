import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './freelanceCard.css'

const FreelanceCard = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'ease-in-out',
          });
    }, [])
    return (
        <div className={`row-sp`}>
            <div className='content-fr'>
                <h2  data-aos='fade-up'>{props.title}</h2>
                <span data-aos='fade-up'>{props.date}</span>
                <p  data-aos='fade-up'>
                {props.p1}
                </p>
                <p  data-aos='fade-up'>
                {props.p2}
                </p>
            </div>            
        </div>
    )
}

export default FreelanceCard
