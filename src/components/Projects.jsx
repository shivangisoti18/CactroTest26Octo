import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import './Projects.scss';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects-section-pro">
      <motion.div
        ref={ref}
        className="projects-container-pro"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header-projects" variants={cardVariants}>
          <motion.span 
            className="section-tag-projects"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            PORTFOLIO
          </motion.span>
          <h2 className="section-title-projects">Featured Work</h2>
          <p className="section-subtitle-projects">
            Production-ready applications built with modern tech stack
          </p>
        </motion.div>

        <div className="projects-grid-pro">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="project-card-pro project-card-3d"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="card-3d-content">
                <div className="project-header-pro">
                  <motion.span 
                    className="project-number project-number-3d"
                    whileHover={{ scale: 1.2, rotateZ: 360, transition: { duration: 0.5 } }}
                  >
                    0{idx + 1}
                  </motion.span>
                  <h3 className="project-title-pro">{project.title}</h3>
                </div>
                
                <p className="project-description-pro">
                  {project.description.length > 120 
                    ? project.description.substring(0, 120) + '...' 
                    : project.description}
                </p>
                
                <div className="project-tech-pro">
                  {project.technologies.slice(0, 4).map((tech, techIdx) => (
                    <motion.span 
                      key={techIdx} 
                      className="tech-badge-pro tech-badge-3d"
                      whileHover={{ scale: 1.1, z: 20, transition: { duration: 0.2 } }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge-pro more">+{project.technologies.length - 4}</span>
                  )}
                </div>
                
                <div className="project-footer-pro">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-pro project-link-3d"
                    whileHover={{ 
                      scale: 1.05,
                      z: 30,
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-pro primary-link project-link-3d"
                    whileHover={{ 
                      scale: 1.08,
                      z: 30,
                      boxShadow: '0 15px 40px rgba(102, 126, 234, 0.5)',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </motion.a>
                </div>
              </div>
              
              {/* 3D Shadow Layer */}
              <div className="card-3d-shadow"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

