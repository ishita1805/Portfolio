import React,{ useEffect } from 'react'
import hand from '../../assets/notif.webp'
import './hand.css'
import AOS from 'aos';

const Hand = () => {
    // const [vis,setVis] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 80,
            easing: 'ease-in-out',
          });

        // setTimeout(() => {
        //     setVis(true)
        // },1000)
    }, [])

    return (
        <div >
            <img  data-aos='zoom-in-up'  src={hand} alt='hi' className='wave-hand'/>
        </div>
    )
}

export default Hand
