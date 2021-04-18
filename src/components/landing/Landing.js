import React from 'react'
import './landing.css'
import Icons from '../icons/Icons'
import Heading from '../heading/Heading'
import SideNav from '../sideNav/SideNav'
import vector from '../../assets/man.png'

const Landing = () => {
    return (
        <div id='home'>
          <SideNav/>
          <Icons/>
          <img alt='man' src={vector} className='landing-vector'/>
          <Heading/>
        </div>
    )
}

export default Landing
