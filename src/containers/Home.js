import React from 'react'
import Nav from '../components/navbar'
import navList from '../data/homeNav'
import Landing from '../components/landing/Landing'
import About from '../components/about/About'
import Project from '../components/projects/Project'
import Hire from '../components/hire/Hire'
import Frreelancing from '../components/freelancing/Frreelancing'

const Home = () => {
    return (
        <div>
            <Nav navList={navList}/>
            <Landing/>
            <About/>
            <Project/>
            <Hire/>
            <Frreelancing/>
        </div>
    )
}

export default Home
