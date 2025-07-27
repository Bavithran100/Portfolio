import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import linkedinImage from '../assets/linkedin_image11.jpg';
import githubImage from '../assets/github.jpg';
import twitterImage from '../assets/twitter_image.jpg';
import leetcodeImage from '../assets/leetcode_image.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4r0rk3c', // replace with your EmailJS service ID
      'template_g2qn9p8', // replace with your EmailJS template ID
      formData,
      '9wM6YDgq2Ep_j2omc' // replace with your EmailJS public key
    ).then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="section fade-in">
      <div className="contact-container">
        <form className="contact-form" onSubmit={sendEmail}>
          <h2 className="glow-red">Contact Me</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
        <div className="contact-info glow-red">
          <h3>Contact Info</h3>
          <p><strong>Email:</strong> <a href="mailto:bavithran.n2024ece@sece.ac.in">bavithran.n2024ece@sece.ac.in</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919344743117">9344743117</a></p>
          <div className="social-icons contact-icons">
            <a href="https://www.linkedin.com/in/bavithran-n-04b74b333" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinImage} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://github.com/Bavithran777" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
             <img src={githubImage} alt="github" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://x.com/BavithranN10" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
             <img src={twitterImage} alt="github" style={{ width: '20px', height: '20px' }} />
            </a>
            <a href="https://leetcode.com/u/Bavithran777/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
             <img src={leetcodeImage} alt="leetcode" style={{ width: '20px', height: '20px' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
