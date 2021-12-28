import React from 'react';

import './About.css'

const About = () => {
    return (
        <div className="about-body">
            <h1>About</h1>
            <img src="https://previews.dropbox.com/p/thumb/ABao1kvfqPOFaPr-VkDesZChI-2n8XKWohFtdgq5tUyOCJrmwdoGXsRn9AN_m25exgkXQw-FcbN9saL1gPYKgWFFbdiIeodeeU_iLdiyjxltLJp_xMLgArZ5puBPD43Ovi_D49-JOGaYarGBWMm55BgCZu55oIszvCbJok4fH2sou6JoClCVUMy8LwB-PGyJKlxEIjTuCFctxrohW1IVoCLODNtlpeQH1Jdc474lMgfvI1SLjJENuKuhoyPO5J9ywa0XIXnIHeYMLdnLpkFLURDohA8NxY-zj56k8NFcaYHZAiQmt6_EVQZqoD_-6dEbYB9Ar21d8tfgrHckF4HxBXnZZ52SNeGOOizLDtdJtVi1qA/p.jpeg"/>
            <p>
            I’m a full stack web developer with a background in mapping and
            Geographic Information Systems. Growing up with a fierce curiosity
            about the world, I’m motivated by learning and expanding my breadth
            of knowledge. I bring an infectious positive attitude and optimistic
            outlook to wherever I work. Outside of work I'm a music nerd,
            outdoor adventurer, and cat dad.</p>

            <h3>Skills:</h3>
            <li>Front-end: HTML, CSS, Javascript, Bootstrap, EJS</li>
            <li>Back-end: Node, Express</li>
            <li>Database: MongoDB, SQL</li>
            <li>Deployment/Testing: Git, Github</li>
            <li>GIS: ArcMap, QGIS, GRASSGIS, Geoprocessing, Web Mapping</li>

        </div>
    );
}

export default About;
