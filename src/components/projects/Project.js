import React from 'react'
import Header from '../header/Header'
import Button from '../button/Button'
import ProjectCard from '../projectCard/ProjectCard'
import './project.css'
import ProjectList from '../../data/projectList'

const Project = () => {


    return (
        <div id='project'>
            <Header head='My Projects' color='green' theme='dark'/>
           
            <div className='projects-grid'>
                {
                   ProjectList.map((p) =>(
                    <ProjectCard
                        title={p.title}
                        tag={p.tagline}
                        img={p.img}
                        git={p.githubUrl}
                        web={p.webUrl}
                    />
                   )) 
                }
            </div>

            <center>
                <Button 
                color='bt-g-l' 
                label="Read my blog" 
                fill={false}
                id='https://www.instagram.com/artiishiii.__/'/>
            </center>
        </div>
    )
}

export default Project
