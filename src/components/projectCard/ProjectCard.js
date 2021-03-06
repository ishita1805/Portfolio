import React from 'react'
import Tilt from '../tilt/Tilt';

const ProjectCard = (props) => {

    const options = {
        scale: 1.1,
        speed: 500,
        max: 10,
        perspective: 800
    };

    return (
        <Tilt options={options} >
        <div className='project-card'>
            <div className='img-holder'>
                <img src={props.img} alt='icon'/>
            </div>
            <div className='hr-bar-gr'></div>
            <h3>{props.title}</h3>
            <p className='text-switch'>{props.tag.substring(0,35)}..</p>
            <p className='text-switch-1'>{props.tag}</p>
            <div className='row'>
               {props.git? <a alt='project' target='__blank' href={props.git}><i className='fa fa-github'></i></a>:null}
               {props.web?<a alt='project' target='__blank' href={props.web}><i className='fa fa-globe'></i></a>:null}
            </div>
            <br/>
        </div>
        </Tilt>
    )
}

export default ProjectCard
