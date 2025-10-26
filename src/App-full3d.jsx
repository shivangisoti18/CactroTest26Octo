import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D-working';
import './App.scss';

// Lazy load other components to avoid initial load issues
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero3D />
      <Suspense fallback={
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem'
        }}>
          Loading sections...
        </div>
      }>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;

