import React from 'react'
import Header from '../header/Header'
import './about.css'
import Button from '../button/Button'
import techList from '../../data/techList'
import img from '../../assets/graphql.png'
const About = () => {

    return (
        <div id='about'>

            <div className='about-cont white'>
              <Header head='About Me' color='red' theme='light'/>
                <p className='about-p'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.
                    Posuere nunc cras elementum id molestie gravida. Ultrices egestas eget arcu scelerisque enim quis ornare faci
                    Risus eget diam nisl ipsum nibh tempus enim odio. Porttitor orci augue integer eget mi egestas habitant ornare velit. 
                    Nullam id sem posuere gravida quis eu, phasellus. Massa lacus,
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.
                    Posuere nunc cras elementum id molestie gravida. Ultrices egestas eget arcu scelerisque enim quis ornare faci
                    Risus eget diam nisl ipsum nibh tempus enim odio. Porttitor orci augue integer eget mi egestas habitant ornare velit. 
                    Nullam id sem posuere gravida quis eu, phasellus. Massa lacus,
                </p>
            </div>

            <div className='about-cont yellow'>
                <h2>Work Experience</h2>
                <p className='about-p-2'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.<br/>
                    <span>December 2018 - Present</span>
                </p>
                <p className='about-p-2'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.<br/>
                    <span>December 2018 - Present</span>
                </p>
                <p className='about-p-2'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.<br/>
                    <span>December 2018 - Present</span>
                </p>
            </div>

            <div className='about-cont white'>
                <h2>My Tech Stack</h2>
                <div className='tech'>
                {   
                    techList.map((url)=>(
                        <img src={url} className='image-tech' alt='tech'/>
                    ))
                }
                </div>
                <div className='buttons'>
                    <Button label='fa fa-github' icon={true} color='bt-r-f' fill={true}/>
                    <Button label='My Resume' color='bt-r-l' fill={false}/>
                </div>
                <br/>
                <br/>
            </div>
        
           
        </div>
    )
}

export default About
