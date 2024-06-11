import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects mb-5">
      <h2>Projects</h2>
      <div className="desc">
        <h3>A collection of projects I have done.</h3>
      </div>
      <div className="proj-details">
        {/* Wrap the project name in an anchor tag */}
        <a href="https://juke02.github.io/Nontransitive-Dice/" target="_blank" rel="noopener noreferrer">
          <h3>Nontransitive Dice Calculator</h3>
        </a>
        <img src="/dice.png" alt="Dice" className="image" />
      </div>
    </section>
  );
}

export default Projects;
