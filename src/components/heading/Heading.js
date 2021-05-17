import React from 'react'
import './heading.css'
import Button from '../button/Button'
import Typewriter from 'typewriter-effect'


const Heading = () => {

    return (
        <div className='heading'>
            <h1>
               <span className='head-span-1'>I am</span> 
               <span>
                    <span className='head-span'> Ishita.</span>
               </span>
            </h1>
            <div className='underline'></div>
            <p className='tag'>
                <Typewriter 
                    options={{
                        strings: ["Full Stack Developer","3rd Year Undergrad","Artist"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50
                    }}
                />
            </p>
            <div className='buttons'>
                <Button 
                small='h-a-small' 
                color='bt-y-f' 
                label="Hire Me" 
                fill={true}
                internal={0}
                id='hire'
                />
                <Button 
                small='h-a-small' 
                color='bt-y-l' 
                label="My Work" 
                fill={false}
                internal={0}
                id='project'/>
            </div>
        </div>
    )
}

export default Heading
