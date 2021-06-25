import React,{ useEffect } from 'react'
import './bg.css'
import AOS from 'aos';

const BG = () => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
          });
    }, [])


    return (
        <div className='bg-circle-big' data-aos='zoom-in' >
            <div className='bg-circle-small'></div>
        </div>
    )
}

export default BG
