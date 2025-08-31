import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section fade-in">
      <h1 className="about-title glow-red">Projects</h1>
      <div className="projects-grid">
        <div className="red-box project-card fly-in-left" data-delay="0">
          <div className="icon animate-icon">📖</div>
          <h2 className="glow-red">Stock Track Pro</h2>
          <p>A full-stack inventory management system that tracks product stock levels, generates low-stock alerts, and allows CRUD operations through a clean dashboard.<br></br>
            Tech Stack: React.js, Django, MongoDB, REST API<br></br>
            Key Features:<br></br>🔴 Add, delete, and update stock items<br></br>🔴 Real-time low-stock alerts<br></br>🔴 Responsive design for desktop/mobile<br></br>🔴 Backend APIs using Django<br></br>🔴 MongoDB for dynamic stock data management
            <br></br>🔴 <a href="https://github.com/Bavithran100/stockapp" className="glow-red project-link" target="_blank">GitHub Link</a>
          </p>
        </div>
        <div className="red-box project-card fly-in-right" data-delay="1">
          <div className="icon animate-icon">💼</div>
          <h2 className="glow-red">Books Track</h2>
          <p>A full-stack library management web application that allows users to register, log in, add books, and search for them in real time. Includes admin features for managing book inventory.<br></br>
            Tech Stack: React.js, Node.js, Express.js, MongoDB, JWT (authentication), REST APIs<br></br>
            Key Features:<br></br>🔺 User authentication (JWT-based login)<br></br>🔺 Book entry and search functionality<br></br>🔺 Dashboard with dynamic UI<br></br>🔺 Responsive and animated UI using modern CSS/JS<br></br>🔺 RESTful API integration for secure backend
            <br></br>🔺 <a href="https://github.com/Bavithran100/project-book" className="glow-red project-link" target="_blank">GitHub Link</a>
          </p>
        </div>
        <div className="red-box project-card jump-in" data-delay="2">
          <div className="icon animate-icon">🎓</div>
          <h2 className="glow-red">Project 3</h2>
          <p>Coming soon...</p>
        </div>
        <div className="red-box project-card fly-in-up" data-delay="3">
          <div className="icon animate-icon">📜</div>
          <h2 className="glow-red">Project 4</h2>
          <p>Coming soon...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
