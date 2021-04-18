import React from 'react'
import './projectCard.css'
import img from '../../assets/p1.jpg'

const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <div className='img-holder'>
                <img src={props.img} alt='icon'/>
            </div>
            <div className='hr-bar-gr'></div>
            <h3>{props.title}</h3>
            <p>{props.tag}</p>
            <div className='row'>
                <a target='__blank' href={props.git}><i className='fa fa-github'></i></a>
                <a target='__blank' href={props.web}><i className='fa fa-globe'></i></a>
            </div>
        </div>
    )
}

export default ProjectCard
