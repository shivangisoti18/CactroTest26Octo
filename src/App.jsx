import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.scss';
import { motion } from 'framer-motion';
import { personalInfo } from './data/portfolioData';
import { useState, useEffect } from 'react';

// Hero Component with CSS animations (No 3D library)
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = [
    "Frontend Developer & 3D Designer",
    "React.js Specialist",
    "UI/UX Enthusiast",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const text = personalInfo.name;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      position: 'relative',
      background: '#0a0a14',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%)',
        animation: 'bgFloat 20s ease-in-out infinite'
      }}></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            background: 'rgba(102, 126, 234, 0.6)',
            borderRadius: '50%',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
            animationDelay: Math.random() * 5 + 's'
          }}
        ></div>
      ))}
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 1; }
        }
        @keyframes bgFloat {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 2, maxWidth: '1200px' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          style={{
            fontSize: '6rem',
            marginBottom: '2rem',
            animation: 'pulse 3s ease-in-out infinite'
          }}
        >
          ✨
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            color: 'white'
          }}
        >
          Hi, I'm{' '}
          <span style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            minWidth: '300px'
          }}>
            {displayText}
            <span style={{ opacity: displayText.length < personalInfo.name.length ? 1 : 0 }}>|</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '1rem',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <motion.span
            key={roleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {roles[roleIndex]}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.8
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(102, 126, 234, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
            }}
          >
            View My Work →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(102, 126, 234, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(personalInfo.social.github, '_blank')}
            style={{
              background: 'transparent',
              border: '2px solid #667eea',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            GitHub Profile
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            fontSize: '2rem'
          }}
        >
          {Object.entries(personalInfo.social).map(([platform, url]) => (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -8 }}
              whileTap={{ scale: 0.9 }}
              style={{
                textDecoration: 'none',
                filter: 'grayscale(20%)',
                transition: 'filter 0.3s'
              }}
            >
              {platform === 'github' && '🐙'}
              {platform === 'linkedin' && '💼'}
              {platform === 'twitter' && '🐦'}
              {platform === 'portfolio' && '🌐'}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
