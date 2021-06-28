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
                    Hi, I am Ishita. A full-stack developer and an artist. I'm pursuing B.Tech from VIT Vellore, in Electronics and Communication Engineering (spl. IoT). I love building software and learning new things. You'll always find me working on a project ;). I enjoy working on user interface design solutions and building fast and responsive web applications.<br/><br/>
                    I've been a part of several student organizations and am currently the Projects Lead at TEC - VIT, where i mentor students in domains like electronics, development and computer vision by conducting workshops, sessions and building projects.
                    I am also an active member of the Fine Arts Club - VIT.<br/><br/>
                    {/* I love penning down my thoughts! Checkout my blog  where i write about art and development. */}
                    Lookout for my upcoming project! <b>MediumRare</b>, a personal blog, where i will write about art and development.
                </p>
                
            </div>

            <div className='about-cont yellow'>
                <h2 data-aos='fade-up'>Work Experience</h2><br/>
                <p data-aos='fade-up' className='about-p-2'>
                    MERN Stack Trainer at Codebugged AI<br/>
                    <span>March 2021 - May 2021</span>
                </p>
                <p data-aos='fade-up' className='about-p-2'>
                    Software Developer Intern at Umbrette <a href="https://dzylo.com/" target="__blank"><span className='fa fa-external-link'></span></a><br/>
                    <span>November 2020 - April 2021</span>
                </p>
                <p data-aos='fade-up' className='about-p-2'>
                    Project Lead at HEED India <a href="https://heedindia.org/" target="__blank"><span className='fa fa-external-link'></span></a><br/>
                    <span>November 2020</span>
                </p>
                <p data-aos='fade-up' className='about-p-2'>
                    Software Developer Intern at Codebugged AI <a href="https://www.oilcp2.com/login" target="__blank"><span className='fa fa-external-link'></span></a><br/>
                    <span>August 2020 - October 2020</span>
                </p>
            </div>

            <div className='about-cont white'>
                <h2 data-aos='fade-up'>My Tech Stack</h2>
                <p  data-aos='fade-up' className='tools-intro'>Tools and technologies i love working with</p>
                <div className='tech'>
                {   
                    techList.map((url)=>(
                        <div data-aos='fade-up' className='tech-cont'>
                        <img src={url.url} className='image-tech' alt='tech'/>
                        <span className='tech-placeholder'>{url.label}</span>
                        </div>
                    ))
                }
                </div>
                <div data-aos='fade-up' className='buttons-about'>
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
