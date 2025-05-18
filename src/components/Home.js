import React from 'react';
import './Home.css'; // Importing the CSS file for the Home component
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home" className="home mb-5">
      <div className="">
        <h2>Home</h2>
        <hr className="divider" /> 
        <h3>My name is Dane Nail</h3>
        <h3>This is my personal website, feel free to look around</h3>
        <h1><Link to="/about">About</Link></h1>
        <h1><Link to="/projects">Projects</Link></h1>
      </div>
    </section>
  );
}

export default Home;
