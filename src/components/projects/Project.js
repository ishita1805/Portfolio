import React from 'react'
import Header from '../header/Header'
import Button from '../button/Button'
import ProjectCard from '../projectCard/ProjectCard'
import './project.css'
import ProjectList from '../../data/projectList'
import { useTranslation } from 'react-i18next';

const Project = () => {
    const { t } = useTranslation();

    return (
        <div id='project'>
            <Header head={t('projecth')} color='green' theme='dark'/>
           
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
                label={t('art')} 
                fill={false}
                id='https://www.instagram.com/artiishiii.__/'/>
            </center>
        </div>
    )
}

export default Project
