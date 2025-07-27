import React from 'react';

function Resume() {
  return (
    <section id="resume" className="section fade-in">
      <div className="resume-container">
        <iframe
          src="/src/assets/Bavithran_resume.pdf"
          title="Resume"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
        <a href="/src/assets/Bavithran_resume.pdf" target="_blank" rel="noopener noreferrer" className="download-resume-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
