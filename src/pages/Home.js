import React from 'react';

import './Home.css'

const Home = () => {
  return (
    <div className="home-block">
      <h1>Phil Welsh</h1>
      <h4>San Diego based web developer</h4>
      <br/>
      <div>
        <a href="https://www.linkedin.com/in/phil-welsh/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Phil-Welsh" target="_blank">Github</a>
        <a href="https://www.dropbox.com/s/l6fgdw0kbvhz3xg/Phil%20Welsh%20-%20Resume%201-25-22.pdf?dl=0" target="_blank">Resume</a>
      </div>
    </div>
  );
}

export default Home;
