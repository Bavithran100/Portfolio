import React from 'react';

function Navbar({ currentSection }) {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = targetElement.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo glow-red">Bavithran</div>
      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className={currentSection === 'home' ? 'active' : ''}
            onClick={(e) => handleSmoothScroll(e, 'home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={currentSection === 'about' ? 'active' : ''}
            onClick={(e) => handleSmoothScroll(e, 'about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={currentSection === 'projects' ? 'active' : ''}
            onClick={(e) => handleSmoothScroll(e, 'projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={currentSection === 'resume' ? 'active' : ''}
            onClick={(e) => handleSmoothScroll(e, 'resume')}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={currentSection === 'contact' ? 'active' : ''}
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
