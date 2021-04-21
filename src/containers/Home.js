import React,{ useState } from 'react'
import Nav from '../components/navbar'
import navList from '../data/homeNav'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'
import Project from '../components/projects/Project'
import Hire from '../components/hire/Hire'
import Frreelancing from '../components/freelancing/Frreelancing'
import ScrollComp from '../components/scrollIcon/Scroll'
import * as Scroll from 'react-scroll';

const Home = () => {
    const [hide,setHide] = useState(true);
    let scroll = Scroll.animateScroll;

    const top = () =>{
        scroll.scrollToTop();
    }
    window.onscroll = () =>{
        if(window.pageYOffset<50) setHide(true)
        else setHide(false)
    }

    return (
        <div>
            <Nav navList={navList}/>
            <ScrollComp hide={hide} onClick={top}/>
            <Landing/>
            <About/>
            <Project/>
            <Hire/>
            <Frreelancing/>
        </div>
    )
}

export default Home
