import React from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {
    return (
        <div className='projects-page'>
            <div className='projects-left'>
            </div>
            <div className='projects-right'>
                <div className="projects-title">
                        projects
                    </div>
            </div>
            <div className="project-cards">
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects;