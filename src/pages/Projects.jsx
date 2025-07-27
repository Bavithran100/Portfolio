import React from 'react';

function Projects() {
  return (<>
  
    <section id="projects" className="section fade-in">
      <h1 className="about-title glow-red">Projects</h1>
       <section id="projects" className="section fade-in about-section">
   
      
      <div className="red-box">
        <div className="icon">📖</div>
        <h2 className="glow-red">project 1</h2>
        <p>A full-stack inventory management system that tracks product stock levels, generates low-stock alerts, and allows CRUD operations through a clean dashboard.<br></br>
          Tech Stack:React.js, Django, MongoDB, REST API<br></br>
          Key Features:<br></br>🔴Add, delete, and update stock items<br></br>🔴Real-time low-stock alerts<br></br>🔴Responsive design for desktop/mobile<br></br>🔴Backend APIs using Django<br></br>🔴MongoDB for dynamic stock data management
          <br></br>🔴 <a href="https://github.com/Bavithran100/stockapp" className="glow-red" target="_blank" > Github-link</a>
        </p>
      </div>
      <div className="red-box">
        <div className="icon">💼</div>
        <h2 className="glow-red">project 2</h2>
        <p>A full-stack library management web application that allows users to register, log in, add books, and search for them in real time. Includes admin features for managing book inventory.<br></br>
          Tech Stack:React.js, Node.js, Express.js, MongoDB, JWT (authentication), REST APIs<br></br>
          Key Features:<br></br>🔺User authentication (JWT-based login)<br></br>🔺Book entry and search functionality<br></br>🔺Dashboard with dynamic UI<br></br>🔺Responsive and animated UI using modern CSS/JS<br></br>🔺RESTful API integration for secure backend
          <br></br>🔺<a href="https://github.com/Bavithran100/project-book" target="_blank" className="glow-red" > Github-link</a></p>
      </div>
      <div className="red-box">
        <div className="icon">🎓</div>
        <h2 className="glow-red">Project 3</h2>
        <p>
</p>
      </div>
      <div className="red-box">
        <div className="icon">📜</div>
        <h2 className="glow-red">Project 4</h2>
        <p>

</p>
      </div>
    </section>
    </section></>
  );
}

export default Projects;
