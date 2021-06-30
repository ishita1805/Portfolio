import React from 'react'
import './landing.css'
import Button from '../button/Button'
import BG from '../bg/BG'
import Icons from '../icons/Icons'
import Hand from '../hand/Hand'
import image from '../../assets/ishita.webp'
// const image = lazy(() => import('../../assets/ishita.webp'));

const Landing = () => {

    const style = {
        'background':`url(${image})`,
        'backgroundRepeat': 'repeat',
        'backgroundClip': 'text',
        '-webkitBackgroundClip': 'text',
        '-webkitTextFillColor': 'transparent'
    }
    return (
        <div id='home'>
             <Icons/>
            <h1>Hey there! I am <span className='head-span' style={style}>Ishita</span></h1>
             <p>Student Developer, Artist and a 3rd year undergrad.</p>
             <div className='buttons'>
                <Button 
                name='connect'
                small='h-a-small' 
                color='bt-y-f' 
                label="Let's Connect" 
                fill={true}
                internal={0}
                id='hire'
                />
                <Button 
                name='projects'
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
