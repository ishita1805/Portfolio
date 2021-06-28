import React,{ useState } from 'react'
import Nav from '../components/navbar'
import navList from '../data/homeNav'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'
import Project from '../components/projects/Project'
import Hire from '../components/hire/Hire'
import Talks from '../components/talks/Talks'
import ScrollComp from '../components/scrollIcon/Scroll'
import * as Scroll from 'react-scroll';

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
            <ScrollComp hide={hide} onClick={top}/>
            <Landing/>
            <About/>
            <Project/>
            <Hire/>
            <Talks/>
        </div>
    )
}

export default Home
