import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education, certifications } from '../data/portfolioData';
import './About.scss';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        ref={ref}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3>{personalInfo.name}</h3>
              <p className="title">{personalInfo.title}</p>
              <div className="contact-info">
                <p>📧 {personalInfo.email}</p>
                <p>📱 {personalInfo.phone}</p>
                <p>📍 {personalInfo.location}</p>
              </div>
            </div>
            
            <div className="bio-text">
              <p>{personalInfo.bio}</p>
              <motion.button 
                className="download-cv"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📄 Download Resume
              </motion.button>
            </div>
          </motion.div>

          <motion.div className="about-details" variants={itemVariants}>
            <div className="education-section">
              <h3>🎓 Education</h3>
              {education.map((edu) => (
                <div key={edu.id} className="detail-card">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="year">{edu.year}</p>
                  <p className="honors">{edu.honors}</p>
                  <ul className="relevant-courses">
                    {edu.relevant.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="certifications-section">
              <h3>🏆 Certifications</h3>
              <div className="cert-grid">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    className="cert-card"
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)' }}
                  >
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

