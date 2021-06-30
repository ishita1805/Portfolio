import React,{ lazy, Suspense, useState } from 'react'
import Nav from '../components/navbar'
import navList from '../data/homeNav'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'

import * as Scroll from 'react-scroll';

const Project = lazy(() => import('../components/projects/Project'));
const Talks = lazy(() => import('../components/talks/Talks'));
const ScrollComp = lazy(() => import('../components/scrollIcon/Scroll'));
const Hire = lazy(() => import('../components/hire/Hire'));

const Home = () => {
    const [hide,setHide] = useState(true);
    const [shadow,setShadow] = useState(false)
    let scroll = Scroll.animateScroll;

    const top = () =>{
        scroll.scrollToTop();
    }
    window.onscroll = () =>{
        if(window.pageYOffset<50) setHide(true)
        if(window.pageYOffset>50) setHide(false)
        if(window.innerHeight<=window.pageYOffset) setShadow(true)
        if(window.innerHeight>window.pageYOffset) setShadow(false)
    }

    return (
        <div>
            <Nav navList={navList} shadow={shadow}/>

            <Suspense fallback={<div></div>}>
                <ScrollComp hide={hide} onClick={top}/>
            </Suspense>

            <Landing/>

            <About/>

            <Suspense fallback={<div></div>}>
                <Project/>
            </Suspense>

            <Suspense fallback={<div></div>}>
                <Hire/>
            </Suspense>

            <Suspense fallback={<div></div>}>
                <Talks/>
            </Suspense>
        </div>
    )
}

export default Home
