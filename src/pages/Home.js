import React from 'react';

import './Home.css'

const Home = () => {
  return (
    <div className="home-block">
      <h1>Phil Welsh</h1>
      <p>Full Stack Software Engineer - San Diego </p>
      <img src="https://i.imgur.com/qysRAxb.jpeg"/>
      <br/>
      <div>
        <a href="https://www.linkedin.com/in/phil-welsh/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Phil-Welsh" target="_blank">Github</a>
        <a href="https://www.dropbox.com/s/4o7hzvu1nqip5ro/Phil%20Welsh%20-%20Resume%205-5-2022.pdf?dl=0" target="_blank">Resume</a>
      </div>
    </div>
  );
}

export default Home;
