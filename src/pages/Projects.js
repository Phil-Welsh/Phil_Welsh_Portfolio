import React from 'react';

import './Projects.css'

const Projects = () => {
    return (
        <div className="projects-body">
            <h1>Projects</h1>
            <a href="https://wifi-locator.netlify.app/" target="_blank">
                <div className="projects-card">
                    <h3>Backbone</h3>
                    <p>Find cafes with fast internet using crowdsourced data</p>
                </div>
            </a>
            <a href="https://wayfarer-team-1.herokuapp.com/" target="_blank">
                <div className="projects-card">
                    <h3>Wayfarer</h3>
                    <p>Travel blog created using Django</p>
                </div>
            </a>
            <a href="https://github.com/Phil-Welsh/wedding-website" target="_blank">
                <div className="projects-card">
                    <h3>Wedding Website</h3>
                    <p>Website for my very own wedding!</p>
                </div>
            </a>
        </div>
    );
}

export default Projects;









// import React from 'react';

// import './Projects.css'

// const Projects = () => {
//     return (
//         <div className="projects-body">
//             <h1>Projects</h1>
//             <div className="projects-card">
//                 <h3><a href="https://wifi-locator.netlify.app/" target="_blank">Backbone</a></h3>
//                 <p>Find cafes with fast internet using crowdsourced data</p>
//             </div>
//             <div className="projects-card">
//                 <h3><a href="https://wayfarer-team-1.herokuapp.com/" target="_blank">Wayfarer</a></h3>
//                 <p>Travel blog created using Django</p>
//             </div>
//             <div className="projects-card">
//                 <h3><a href="https://github.com/Phil-Welsh/wedding-website" target="_blank">Wedding Website</a></h3>
//                 <p>Website for my very own wedding!</p>
//             </div>
//         </div>
//     );
// }

// export default Projects;
