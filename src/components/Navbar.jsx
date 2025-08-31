import React, { useState } from 'react';

function Navbar({ currentSection, onNavigate }) {
  const [animating, setAnimating] = useState(false);

  const handleNavigation = (event, page) => {
    event.preventDefault();
    if (animating) return;
    setAnimating(true);

    onNavigate(page);

    // Remove animation lock after short delay
    setTimeout(() => {
      setAnimating(false);
    }, 300);
  };

  return (
    <nav className="navbar">
      <div className="logo glow-red">Bavithran</div>
      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className={currentSection === 'home' ? 'active' : ''}
            onClick={(e) => handleNavigation(e, 'home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={currentSection === 'about' ? 'active' : ''}
            onClick={(e) => handleNavigation(e, 'about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={currentSection === 'projects' ? 'active' : ''}
            onClick={(e) => handleNavigation(e, 'projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={currentSection === 'resume' ? 'active' : ''}
            onClick={(e) => handleNavigation(e, 'resume')}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={currentSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleNavigation(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
