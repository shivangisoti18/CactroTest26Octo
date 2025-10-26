import './App.scss';

function App() {
  return (
    <div className="app">
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        padding: '1rem 2rem', 
        background: 'rgba(10, 10, 20, 0.9)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ✨ Portfolio
        </h2>
        <button style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '50px',
          cursor: 'pointer'
        }}>
          Contact
        </button>
      </nav>

      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        color: 'white'
      }}>
        <div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '1rem' }}>
            Hi, I'm <span style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Shivangi Soti</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
            Full Stack Developer & 3D Designer
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '600px' }}>
            Crafting Beautiful Digital Experiences
          </p>
          <button style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
          }}>
            View My Work
          </button>
        </div>
      </section>

      <section style={{ 
        minHeight: '50vh', 
        padding: '4rem 2rem',
        background: 'linear-gradient(180deg, #0a0a14 0%, #1a1a2e 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '3rem', 
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          About Me
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
          Passionate developer with expertise in creating immersive web experiences using modern technologies. 
          Specialized in React, Three.js, and full-stack development.
        </p>
      </section>

      <footer style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        color: 'rgba(255,255,255,0.7)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <p>© 2025 Shivangi Soti. Crafted with ❤️ and React</p>
      </footer>
    </div>
  );
}

export default App;

