import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills, projects, experience, education, certifications } from './data/portfolioData';
import './App.scss';
import './CSS3D-Pro.scss';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-icon">✨</span>
            <span className="logo-text">Portfolio</span>
          </div>
          
          <ul className="nav-menu">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <li key={item}>
                <button
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          
          <button className="nav-cta" onClick={() => scrollToSection('contact')}>
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section with CSS 3D */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="stars"></div>
          <div className="css3d-sphere"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-description">{personalInfo.tagline}</p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => window.open(personalInfo.social.github, '_blank')}>
              GitHub Profile
            </button>
          </div>
          
          <div className="hero-social">
            {Object.entries(personalInfo.social).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                {platform === 'github' && '🐙'}
                {platform === 'linkedin' && '💼'}
                {platform === 'twitter' && '🐦'}
                {platform === 'portfolio' && '🌐'}
              </a>
            ))}
          </div>
        </motion.div>
        
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="profile-card card-3d"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="avatar">{personalInfo.name.split(' ').map(n => n[0]).join('')}</div>
              <h3>{personalInfo.name}</h3>
              <p className="role">{personalInfo.title}</p>
              <div className="contact-info">
                <p>📧 {personalInfo.email}</p>
                <p>📱 {personalInfo.phone}</p>
                <p>📍 {personalInfo.location}</p>
              </div>
            </motion.div>

            <motion.div 
              className="bio-card card-3d"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>{personalInfo.bio}</p>
              <h4>🎓 Education</h4>
              {education.map((edu) => (
                <div key={edu.id} className="edu-item">
                  <strong>{edu.degree}</strong>
                  <p>{edu.institution} • {edu.year}</p>
                </div>
              ))}
              <button className="download-cv">📄 Download Resume</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section with CSS 3D Cubes */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="skills-showcase">
            <div className="css3d-cubes">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`cube cube-${i}`}>
                  <div className="cube-face front"></div>
                  <div className="cube-face back"></div>
                  <div className="cube-face right"></div>
                  <div className="cube-face left"></div>
                  <div className="cube-face top"></div>
                  <div className="cube-face bottom"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((category, idx) => (
              <motion.div 
                key={idx}
                className="skill-category card-3d"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3>{category.category}</h3>
                {category.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Showcase of my best work</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                className="project-card card-3d"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image" style={{ backgroundColor: project.color }}>
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <button className="btn-outline">🐙 Code</button>
                    <button className="btn-gradient">🚀 Demo</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Work Experience</h2>
            <div className="title-underline"></div>
          </motion.div>

          <div className="timeline">
            {experience.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content card-3d">
                  <h3>{exp.position}</h3>
                  <p className="company">🏢 {exp.company}</p>
                  <p className="duration">📅 {exp.duration}</p>
                  <p className="description">{exp.description}</p>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>🎯 {achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Let's create something amazing together</p>
          </motion.div>

          <div className="contact-grid">
            {[
              { icon: '📧', title: 'Email', info: personalInfo.email },
              { icon: '📱', title: 'Phone', info: personalInfo.phone },
              { icon: '📍', title: 'Location', info: personalInfo.location }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="contact-card card-3d"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <span className="contact-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </motion.div>
            ))}
          </div>

          <motion.form 
            className="contact-form card-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" className="btn-gradient-full">📤 Send Message</button>
          </motion.form>
        </div>

        <footer className="footer">
          <p>© 2025 {personalInfo.name}. Crafted with ❤️ and React</p>
        </footer>
      </section>
    </div>
  );
}

export default App;

