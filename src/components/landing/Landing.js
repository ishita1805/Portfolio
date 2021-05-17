import React from 'react'
import './landing.css'
import Icons from '../icons/Icons'
import Heading from '../heading/Heading'
import SideNav from '../sideNav/SideNav'
import vector from '../../assets/man.webp'
// import Image from '../three/Three'

const Landing = () => {
    return (
        <div id='home'>
          <SideNav/>
          <Icons/>
          {/* <Image/> */}
          <img alt='man' src={vector} className='landing-vector'/>
          <Heading/>
        </div>
    )
}

export default Landing
