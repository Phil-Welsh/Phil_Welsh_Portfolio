import React from 'react';

import './About.css'

const About = () => {
    return (
        <div className="about-body">
            <h1>About</h1>
            <img src="https://previews.dropbox.com/p/thumb/ABaoW8b4u1VbYr_n5nDZGm_CoGN0NJqkR7-oZyXgGMWv5uVl2VCG6xaB22PSdDKqTpryPzMz97k3UcG51WF3khoaeeJnT8Nx7dhdb634abPlzr4bdYg-pXYyeThItXkIdH6lMNBvMeAltfHDX3N8fCve8GhnPzlApZ4HO-vt7lYl3oogjIIMCfIloufnSuRetLJV3C95b-SVwbE7tHaRN7Y3mUAMTQ3RybfoHBpDZKP4dsF9v4kVqNE2An57EaeZjvdJfnXNy8qKZXk7MAaKBaqNguJ0i-6sQiQdDtarD3m6nrlDw2A7gxnZuFnzHouhZowS8gDLS74RLTP9up06oKiNHJilPnCJqmU4H7eXu1aMUQ/p.jpeg"/>
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
