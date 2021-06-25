import React from 'react'
import './landing.css'
import Button from '../button/Button'
import BG from '../bg/BG'
import Icons from '../icons/Icons'
import Hand from '../hand/Hand'


const Landing = () => {
    return (
        <div id='home'>
             <Icons/>
             <h1>Hey there! I am <span className='head-span'>Ishita</span></h1>
             <p>Student Developer, Artist and a 3rd year undergrad.</p>
             <div className='buttons'>
                <Button 
                small='h-a-small' 
                color='bt-y-f' 
                label="Let's Connect" 
                fill={true}
                internal={0}
                id='hire'
                />
                <Button 
                small='h-a-small' 
                color='bt-y-l' 
                label="Projects" 
                fill={false}
                internal={0}
                id='project'/>
            </div>
            <BG/>
            <Hand/>
        </div>
    )
}

export default Landing
