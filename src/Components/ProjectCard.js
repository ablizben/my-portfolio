import React, { Profiler } from 'react';


const ProjectCard = () => {

    const myProjects = {
        projectOne: {
            languages: "JavaScript • Node • MySQL",
            title: "The Habit Tracker",
            description: "An application that allows the user to add and track habits they are trying to create.",
            footer: ""
        }
    }
    return (
        <div className="card-body">
            <div class="card-content">
                <header>
                    <div className="project-code">{myProjects.projectOne.languages}</div>
                    <h5 className="card-title">{myProjects.projectOne.title}</h5>
                </header>
                <p className="card-text">{myProjects.projectOne.description}</p>
                <h5 className="card-footer"></h5>
            </div>
        </div>
    )
}

export default ProjectCard;