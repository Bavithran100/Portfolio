import React from 'react';
import profileImage from '../assets/image_portfolio.jpg';
import linkedinImage from '../assets/linkedin_image11.jpg';
import githubImage from '../assets/github.jpg';
import twitterImage from '../assets/twitter_image.jpg';
import leetcodeImage from '../assets/leetcode_image.png';

function Home() {
  return (
    <section id="home" className="hero-section fade-in">
      <div className="hero-image">
        {/* Placeholder for profile image */} 
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="hero-text">
        <h1>Hi, It's <span className="highlight">Bavithran</span></h1>
        <h2>I'm a <span className="highlight">MERN Stack Developer</span></h2>
        <h3 >Full Stack Developer | UI/UX Designer</h3>
        <p className="glow-red">
          I craft full-stack web applications with clean code, intuitive design, and scalable architecture.  
          My passion lies in building seamless user experiences using React for the frontend and Node.js with MongoDB on the backend.  
          I constantly strive to learn new technologies and bring innovative ideas to life through code.
        </p>
        
       
        <a href="#contact" className="hire-me-btn"  >Hire me <br></br></a><br></br>
        <div className="social-icons contact-icons">
            <a href="https://www.linkedin.com/in/bavithran-n-04b74b333/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinImage} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://github.com/Bavithran777" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
             <img src={githubImage} alt="github" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
             <img src={twitterImage} alt="github" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://leetcode.com/u/Bavithran777/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
             <img src={leetcodeImage} alt="leetcode" style={{ width: '20px', height: '20px' }} />
            </a>
          </div>
      </div>
    </section>
  );
}

export default Home;
