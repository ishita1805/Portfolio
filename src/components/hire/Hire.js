import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../header/Header'
import Button from '../button/Button'
import './hire.css'

const Hire = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'ease-in-out',
          });
    }, [])
    return (
        <div id='hire'>
            <form className='form'>
                <input placeholder='Name'/>
                <input placeholder='Contact Number'/>
                <textarea placeholder='Query'/>
                <Button label='Send A message' width='w-100' color='bt-yl-f'/>
            </form>
            <div className='hire-cont'>
                <Header head='Hire Me' color='red'/>
                <p  data-aos='fade-up' className='hire-sub'>Or just drop a message</p>
                <p  data-aos='fade-up'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.
                    Posuere nunc cras elementum id molestie gravida. Ultrices egestas eget arcu scelerisque enim quis ornare faci
                    Risus eget diam nisl ipsum nibh tempus enim odio. Porttitor orci augue integer eget mi egestas habitant ornare velit. 
                    Nullam id sem posuere 
                </p>
                <p  data-aos='fade-up'>
                    get molestie dignissim morbi vel purus. Id proin vulputate ultrices bibendum.
                    Posuere nunc   
                </p>
                <div  data-aos='fade-up' className='row s-25'>
                    <a target='__blank' href='/'><i className='fa fa-github'></i></a>
                    <a target='__blank' href='/'><i className='fa fa-linkedin'></i></a>
                </div>
            </div>
        </div>
    )
}

export default Hire
