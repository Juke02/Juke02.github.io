import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about mb-5">
      <h2>About me</h2>
      <hr className="divider" /> 
      <h3>I am currently enrolled in Sage Creek Highschool</h3>
      <h3>The classes I will take my senior year are:</h3>
      <div className="box">
        <h3>Engineering Design and Development</h3>
        <h3>AP Physics 1</h3>
        <h3>AP Calculus BC</h3>
        <h3>Spanish 4 Honors</h3>
      </div>
      <div className="activities">
        <h3>I have been doing varsity Track and Field since junior year, and I have grown to love the sport.</h3>
        <h3>The events I run are the 100m, 200m, and 400m though my best event is the latter.</h3>
        <h3>I have also done Club Soccer for most of my life in MLS Next, one of the top levels for Soccer in the US.</h3>
        <h3>When I'm not doing sports, I enjoy doing many hobbies and activities such as music production, surfing, and coding.</h3>
        <h3>I also enjoy reading, writing, drawing, and working out as well. These hobbies/activities help shape who I am.</h3>
      </div>
    </section>
  );
}

export default About;
