import React,{ useEffect } from 'react'
import Header from '../header/Header'
import './about.css'
import Button from '../button/Button'
import techList from '../../data/techList'
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from '../../assets/resume.pdf'
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
          });
    }, [])

    return (
        <div id='about'>

            <div className='about-cont white'>
              <Header head='About Me' color='red' theme='light'/>
                <p data-aos='fade-up' className='about-p'>
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
                <h2 data-aos='fade-up'>Work Experience</h2>
                <p data-aos='fade-up' className='about-p-2'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.<br/>
                    <span>December 2018 - Present</span>
                </p>
                <p data-aos='fade-up' className='about-p-2'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.<br/>
                    <span>December 2018 - Present</span>
                </p>
                <p data-aos='fade-up' className='about-p-2'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.<br/>
                    <span>December 2018 - Present</span>
                </p>
            </div>

            <div className='about-cont white'>
                <h2 data-aos='fade-up'>My Tech Stack</h2>
                <div className='tech'>
                {   
                    techList.map((url)=>(
                        <img data-aos='fade-up' src={url} className='image-tech' alt='tech'/>
                    ))
                }
                </div>
                <div data-aos='fade-up' className='buttons'>
                    <Button label='fa fa-github' icon={true} color='bt-r-f' fill={true} id='https://github.com/ishita1805'/>
                    <Button label='My Resume' color='bt-r-l' fill={false} id={resume}/>
                </div>
                <br/>
                <br/>
            </div>
        
        </div>
    )
}

export default About
