import { useState } from 'react';
import './App.scss';

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
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 2rem',
        background: 'rgba(10, 10, 20, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            fontWeight: 700
          }} onClick={() => scrollToSection('home')}>
            <span style={{ fontSize: '2rem' }}>✨</span> Portfolio
          </h2>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.toLowerCase() ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
              >
                {item}
              </button>
            ))}
            
            <button style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }} onClick={() => scrollToSection('contact')}>
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        background: 'radial-gradient(circle at 50% 50%, #0a0a14 0%, #000000 100%)'
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.2,
            color: 'white'
          }}>
            Hi, I'm <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Shivangi Soti</span>
          </h1>
          
          <h2 style={{ 
            fontSize: 'clamp(1.2rem, 4vw, 2rem)', 
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '1rem' 
          }}>
            Full Stack Developer & 3D Designer
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.3rem)', 
            color: 'rgba(255, 255, 255, 0.7)', 
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6
          }}>
            Crafting Beautiful Digital Experiences with Modern Technologies
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }} onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            
            <button style={{
              background: 'transparent',
              border: '2px solid #667eea',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Download CV
            </button>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            marginTop: '3rem',
            fontSize: '2rem'
          }}>
            {['🐙', '💼', '🐦', '🌐'].map((icon, i) => (
              <a key={i} href="#" style={{ 
                textDecoration: 'none',
                filter: 'grayscale(100%) brightness(0.8)',
                transition: 'all 0.3s ease'
              }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #0a0a14 0%, #1a1a2e 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              About Me
            </h2>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto',
              borderRadius: '2px'
            }} />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)'
              }}>
                SS
              </div>
              
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'white' }}>
                Shivangi Soti
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem' }}>
                Full Stack Developer
              </p>
              
              <div style={{ 
                textAlign: 'left', 
                padding: '1rem', 
                background: 'rgba(0, 0, 0, 0.2)', 
                borderRadius: '10px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.95rem'
              }}>
                <p style={{ margin: '0.5rem 0' }}>📧 shivangi.soti@example.com</p>
                <p style={{ margin: '0.5rem 0' }}>📱 +1 (555) 123-4567</p>
                <p style={{ margin: '0.5rem 0' }}>📍 San Francisco, CA</p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              gridColumn: 'span 1'
            }}>
              <p style={{ 
                lineHeight: 1.8, 
                color: 'rgba(255, 255, 255, 0.8)', 
                marginBottom: '1.5rem',
                fontSize: '1.1rem'
              }}>
                Passionate developer with expertise in creating immersive web experiences using modern technologies. 
                Specialized in React, Three.js, and full-stack development.
              </p>
              
              <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.3rem' }}>🎓 Education</h4>
              <div style={{ 
                padding: '1.5rem', 
                background: 'rgba(0, 0, 0, 0.2)', 
                borderRadius: '15px',
                marginBottom: '1.5rem'
              }}>
                <h5 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>
                  Bachelor of Computer Science
                </h5>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.3rem' }}>
                  University of Technology
                </p>
                <p style={{ color: '#667eea', fontWeight: 600 }}>2014 - 2018</p>
              </div>
              
              <button style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                width: '100%',
                fontSize: '1rem'
              }}>
                📄 Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a14 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              Skills & Expertise
            </h2>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto',
              borderRadius: '2px'
            }} />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem'
          }}>
            {[
              { category: 'Frontend', skills: [
                { name: 'React', level: 95, icon: '⚛️' },
                { name: 'Three.js', level: 90, icon: '🎨' },
                { name: 'TypeScript', level: 88, icon: '📘' },
                { name: 'Tailwind CSS', level: 92, icon: '💨' }
              ]},
              { category: 'Backend', skills: [
                { name: 'Node.js', level: 90, icon: '🟢' },
                { name: 'Python', level: 85, icon: '🐍' },
                { name: 'MongoDB', level: 88, icon: '🍃' },
                { name: 'PostgreSQL', level: 82, icon: '🐘' }
              ]},
              { category: '3D & Design', skills: [
                { name: 'Spline', level: 92, icon: '🎭' },
                { name: 'Blender', level: 85, icon: '🎲' },
                { name: 'Figma', level: 90, icon: '🎨' },
                { name: 'WebGL', level: 88, icon: '🌐' }
              ]},
              { category: 'Tools', skills: [
                { name: 'Git', level: 95, icon: '📚' },
                { name: 'Docker', level: 82, icon: '🐳' },
                { name: 'AWS', level: 78, icon: '☁️' },
                { name: 'CI/CD', level: 85, icon: '🔄' }
              ]}
            ].map((category, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {category.category}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {category.skills.map((skill, i) => (
                    <div key={i} style={{
                      background: 'rgba(0, 0, 0, 0.2)',
                      padding: '1rem',
                      borderRadius: '10px'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.5rem' 
                      }}>
                        <span style={{ fontSize: '1.5rem' }}>{skill.icon}</span>
                        <span style={{ 
                          flex: 1, 
                          color: 'rgba(255, 255, 255, 0.9)', 
                          fontWeight: 600 
                        }}>
                          {skill.name}
                        </span>
                        <span style={{ 
                          color: '#667eea', 
                          fontWeight: 700, 
                          fontSize: '0.9rem' 
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div style={{
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '10px',
                          transition: 'width 1s ease'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #0a0a14 0%, #1a1a2e 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              Featured Projects
            </h2>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto',
              borderRadius: '2px',
              marginBottom: '1rem'
            }} />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>
              Showcase of my best work and achievements
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { title: '3D Product Visualizer', icon: '🎨', color: '#FF6B6B', tech: ['React', 'Three.js', 'WebGL'] },
              { title: 'AI-Powered Dashboard', icon: '📊', color: '#4ECDC4', tech: ['React', 'Node.js', 'TensorFlow'] },
              { title: 'E-Commerce Platform', icon: '🛍️', color: '#95E1D3', tech: ['Next.js', 'MongoDB', 'Stripe'] },
              { title: 'Portfolio Builder', icon: '🌟', color: '#A8E6CF', tech: ['React', 'Spline', 'Firebase'] },
              { title: 'Task Manager Pro', icon: '✅', color: '#FFD3B6', tech: ['Vue.js', 'Express', 'PostgreSQL'] },
              { title: 'Social Media App', icon: '💬', color: '#FFAAA5', tech: ['React Native', 'GraphQL', 'AWS'] }
            ].map((project, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  height: '200px',
                  background: project.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'
                  }} />
                  <span style={{ position: 'relative', zIndex: 1 }}>{project.icon}</span>
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    color: 'white', 
                    marginBottom: '1rem' 
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    lineHeight: 1.6, 
                    marginBottom: '1rem' 
                  }}>
                    Interactive application with real-time features and modern design patterns.
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem', 
                    marginBottom: '1.5rem' 
                  }}>
                    {project.tech.map((tech, i) => (
                      <span key={i} style={{
                        background: 'rgba(102, 126, 234, 0.2)',
                        color: '#667eea',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{
                      flex: 1,
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      padding: '0.75rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}>
                      🐙 Code
                    </button>
                    <button style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      color: 'white',
                      padding: '0.75rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}>
                      🚀 Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        minHeight: '100vh',
        padding: '6rem 2rem 2rem',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a14 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              Get In Touch
            </h2>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              margin: '0 auto',
              borderRadius: '2px',
              marginBottom: '1rem'
            }} />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>
              Let's create something amazing together
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            {[
              { icon: '📧', title: 'Email', info: 'shivangi.soti@example.com' },
              { icon: '📱', title: 'Phone', info: '+1 (555) 123-4567' },
              { icon: '📍', title: 'Location', info: 'San Francisco, CA' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>
                  {item.icon}
                </span>
                <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  {item.info}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '1rem',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '1rem',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <input
                type="text"
                placeholder="Subject"
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '1rem',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
              
              <textarea
                placeholder="Your Message"
                rows="6"
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '1rem',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
              
              <button type="submit" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}>
                📤 Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '3rem 0 1rem',
          marginTop: '4rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          <p style={{ fontSize: '0.9rem' }}>
            © 2025 Shivangi Soti. Crafted with ❤️ and React Three Fiber
          </p>
        </footer>
      </section>
    </div>
  );
}

export default App;

