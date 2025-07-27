import React from 'react';
import resumePDF from '../assets/Bavithran_resume.pdf';

function Resume() {
  return (
    <section id="resume" className="section fade-in">
      <div className="resume-container">
        <iframe
          src={resumePDF}
          title="Resume"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
        <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="download-resume-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
