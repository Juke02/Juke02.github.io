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
        <a href="https://juke02.github.io/Dice-Probability-Calculator/" target="_blank" rel="noopener noreferrer">
          <h3>Dice Probability Calculator (With dice dropping)</h3>
        </a>
        <img src="/prob.png" alt="Probability" className="image" />
        <a href="https://juke02.github.io/maze-solver/" target="_blank" rel="noopener noreferrer">
          <h3>AI Maze Solver</h3>
        </a>
        <img src="/maze.png" alt="Maze" className="image" />
      </div>
    </section>
  );
}

export default Projects;
