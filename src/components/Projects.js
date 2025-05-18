import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects mb-5">
      <h2>Projects</h2>
      <div className="desc">
        <h3>A collection of projects I have done.</h3>
      </div>
      <div className="proj-grid">
        <div className="proj-card">
          <a href="https://juke02.github.io/Nontransitive-Dice/" target="_blank" rel="noopener noreferrer">
            <h3>Nontransitive Dice Calculator</h3>
          </a>
          <img src="/dice.png" alt="Dice" className="image" />
        </div>
        <div className="proj-card">
          <a href="https://juke02.github.io/Dice-Probability-Calculator/" target="_blank" rel="noopener noreferrer">
            <h3>Dice Probability Calculator (With dice dropping)</h3>
          </a>
          <img src="/prob.png" alt="Probability" className="image" />
        </div>
        <div className="proj-card">
          <a href="https://juke02.github.io/maze-solver/" target="_blank" rel="noopener noreferrer">
            <h3>AI Maze Solver</h3>
          </a>
          <img src="/maze.png" alt="Maze" className="image" />
        </div>
        <div className="proj-card">
          <a href="https://juke02.github.io/sagecreekmap/" target="_blank" rel="noopener noreferrer">
            <h3>Sage Creek Virtual Tour</h3>
          </a>
          <img src="/tour.png" alt="Tour" className="image" />
        </div>
        {/* Add more project cards here as needed */}
      </div>
    </section>
  );
}

export default Projects;
