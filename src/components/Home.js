import React from 'react';
import './Home.css'; // Importing the CSS file for the Home component

function Home() {
  return (
    <section id="home" className="home mb-5">
      <div className="">
        <h2>Home</h2>
        <hr className="divider" /> 
        <h3>My name is Dane Nail, I am a senior at Sage Creek Highschool</h3>
        <h3>This is my personal website, feel free to look around</h3>
        <img src="/image92.png" alt="Me" className="image" />
      </div>
    </section>
  );
}

export default Home;
