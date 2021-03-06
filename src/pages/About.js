import React from 'react';

import './About.css'

const About = () => {
    return (
        <div className="about-body">
            <img src="https://i.imgur.com/BK7o6Ap.jpg"/>
            <p>
            I’m a full stack web developer with a background in mapping and
            Geographic Information Systems. Growing up with a fierce curiosity
            about the world, I’m motivated by learning and expanding my breadth
            of knowledge. I bring an infectious positive attitude and optimistic
            outlook to wherever I work. Outside of work I'm a music nerd,
            outdoor adventurer, and cat dad.</p>

            <li>Front-end: HTML, CSS, Javascript, Bootstrap, EJS</li>
            <li>Back-end: Node, Express</li>
            <li>Database: MongoDB, SQL</li>
            <li>Deployment/Testing: Git, Github</li>
            <li>GIS: ArcMap, QGIS, GRASSGIS, Geoprocessing, Web Mapping</li>

        </div>
    );
}

export default About;
