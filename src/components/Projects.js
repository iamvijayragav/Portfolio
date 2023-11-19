import React from 'react'
import './Projects.css'
import Card from './Card'
import HorizontalScroll from './HorizontalScroll';
const Projects = () => {

    return (
        <div id='projects'>
            <h2>Projects</h2>
            <span className='line'> </span>
            <div className="card-container">
                <HorizontalScroll/>
            </div>

        </div>
    )
}

export default Projects;
