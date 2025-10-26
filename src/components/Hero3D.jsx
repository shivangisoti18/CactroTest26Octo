import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './Hero3D.scss';

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.15;
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
          color="#667eea"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          emissive="#4a5fd9"
          emissiveIntensity={0.3}
        />
      </Sphere>
      {/* Add outer glow effect */}
      <Sphere args={[1, 50, 50]} scale={3.2}>
        <meshBasicMaterial
          color="#764ba2"
          transparent
          opacity={0.15}
          wireframe
        />
      </Sphere>
    </group>
  );
};

// Animated Typing Text Component
const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayText}</span>;
};

// Rotating Roles Component
const RotatingRoles = () => {
  const roles = [
    "Full Stack Developer",
    "3D Designer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Creative Coder"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="role-container">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="role-text"
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero3D = () => {
  const [showContent, setShowContent] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-canvas">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.2} color="#667eea" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#764ba2" />
            <spotLight 
              position={[0, 10, 0]} 
              angle={0.5} 
              penumbra={1} 
              intensity={0.6}
              color="#f093fb"
            />
            <Stars 
              radius={100} 
              depth={60} 
              count={7000} 
              factor={5} 
              saturation={0} 
              fade 
              speed={1.5} 
            />
            <AnimatedSphere />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.8}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="intro-text">Hi, I'm </span>
            <span className="gradient-text">
              {showContent && <TypewriterText text={personalInfo.name} delay={300} />}
            </span>
          </motion.h1>
          
          <motion.div 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <RotatingRoles />
          </motion.div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {personalInfo.tagline}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              {' '}with Modern Technologies
            </motion.span>
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(102, 126, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              <span>View My Work</span>
              <motion.span
                className="btn-arrow"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(102, 126, 234, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(personalInfo.social.github, '_blank')}
            >
              Download CV
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {Object.entries(personalInfo.social).map(([platform, url], index) => (
              <motion.div
                key={platform}
                className="social-link-wrapper"
                onMouseEnter={() => setHoveredIcon(platform)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.1,
                    filter: "grayscale(0%) brightness(1.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="icon-wrapper">
                    {platform === 'github' && '🐙'}
                    {platform === 'linkedin' && '💼'}
                    {platform === 'twitter' && '🐦'}
                    {platform === 'portfolio' && '🌐'}
                  </span>
                </motion.a>
                <AnimatePresence>
                  {hoveredIcon === platform && (
                    <motion.div
                      className="tooltip"
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;

