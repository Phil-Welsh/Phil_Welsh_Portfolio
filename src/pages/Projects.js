import React from 'react';

import './Projects.css'

const Projects = () => {
    return (
        <div className="projects-body">
            <h1>Projects</h1>
            <div className="projects-card">
                <h3><a href="https://quirky-visvesvaraya-15a990.netlify.app/" target="_blank">Backbone</a></h3>
                <p>Find cafes with fast internet using crowdsourced data</p>
            </div>
            <div className="projects-card">
                <h3><a href="https://wayfarer-team-1.herokuapp.com/" target="_blank">Wayfarer</a></h3>
                <p>Travel blog created using Django</p>
            </div>
        </div>
    );
}

export default Projects;
