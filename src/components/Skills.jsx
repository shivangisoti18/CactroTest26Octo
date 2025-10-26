import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import { useState } from 'react';
import './Skills.scss';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -30, z: -50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      z: 0,
      transition: { 
        duration: 0.6,
        delay: custom * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <section id="skills" className="skills-section-pro">
      <motion.div
        ref={ref}
        className="skills-container-pro"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="section-header-pro" variants={categoryVariants}>
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            TECHNICAL EXPERTISE
          </motion.span>
          <h2 className="section-title-pro">
            Skills & Technologies
          </h2>
          <p className="section-subtitle-pro">
            Specialized in modern web development with 3+ years of production experience
          </p>
        </motion.div>

        <div className="skills-grid-pro">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              className="skill-category-pro"
              variants={categoryVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="category-header-pro">
                <div className="category-title-wrapper">
                  <h3>{category.category}</h3>
                  <span className="category-count">{category.items.length} skills</span>
                </div>
              </div>
              
              <div className="skills-list-pro">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    custom={skillIdx}
                    className="skill-item-pro"
                    variants={skillVariants}
                    onHoverStart={() => setHoveredSkill(`${idx}-${skillIdx}`)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="skill-header-pro"
                      animate={hoveredSkill === `${idx}-${skillIdx}` ? { scale: 1.02 } : { scale: 1 }}
                    >
                      <span className="skill-name-pro">{skill.name}</span>
                      <motion.span 
                        className="skill-percentage"
                        animate={hoveredSkill === `${idx}-${skillIdx}` ? { 
                          scale: 1.1,
                          color: '#764ba2'
                        } : { 
                          scale: 1,
                          color: '#667eea'
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </motion.div>
                    <div className="skill-bar-wrapper">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0, opacity: 0 }}
                        animate={inView ? { 
                          width: `${skill.level}%`,
                          opacity: 1
                        } : { 
                          width: 0,
                          opacity: 0
                        }}
                        transition={{ 
                          duration: 1.2, 
                          delay: idx * 0.05 + skillIdx * 0.03,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        style={{
                          background: hoveredSkill === `${idx}-${skillIdx}` 
                            ? 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                            : 'linear-gradient(90deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

