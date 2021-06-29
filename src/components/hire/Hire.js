import React,{ useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../header/Header'
import Button from '../button/Button'
import './hire.css'
import { useForm } from 'react-hook-form';

const Hire = () => {

    const { register, handleSubmit, errors, reset  } = useForm();
    const [submit, setSubmit] = useState(false);

    const onSubmit = (data) => {
       console.log(data);
       setSubmit(true);
       reset(); 
    };
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
          });
    }, [])
    return (
        <div id='hire'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder='Name' type='text' ref={register({ required: true })}/>
                {errors.name?<span className='error'>Name is Required</span>:null} <br/>
                <input name="number" type='number' placeholder='Contact Number'  ref={register({ required: true, minLength:10, maxLength: 10 })}/>
                {errors.number && errors.number.type === "required" && <span className='error'>Number is Required</span>}
                {errors.number &&  (errors.number.type === "minLength" || errors.number.type === "maxLength") && <span className='error'>Number should be 10-digit</span> } <br/>
                <textarea name="query" type='text' placeholder='Message'  ref={register({ required: true })}/>
                {errors.query?<span className='error'>Message is Required</span>:null}<br/>
                {submit?
                <b>Thanks for reaching out! I'll get back to you soon 🧁</b>:
                <Button label='Send A Message' width='w-100' color='bt-yl-f'/>}
            </form>
            <div className='hire-cont'>
                <Header head='Hire me' color='red'/>
                <p  data-aos='fade-up' className='hire-sub'>Or collaborate with me</p>
                <p  data-aos='fade-up'>
                   I am looking for my next innovative project. If you are a 
                   firm or a fellow developer who shares the same interests as 
                   me, please leave a message and i would love to get in touch with you.
                </p>
                <p  data-aos='fade-up'>
                   I am interested in product development / devOPS / UI interface design roles. 
                   I am also open to conducting workshops / sessions on developement related topics.
                   Let's work on the big thing together ;)
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
