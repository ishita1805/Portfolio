import React,{ useEffect } from 'react'
import hand from '../../assets/notif.webp'
import './hand.css'
import AOS from 'aos';

const Hand = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
          });
    }, [])

    return (
        <div >
            <img  data-aos='zoom-in-up'  src={hand} alt='hi' className='wave-hand'/>
        </div>
    )
}

export default Hand
