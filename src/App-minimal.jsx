import './App.scss';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a14', 
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '2rem',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        ✨ Portfolio Loading...
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
        If you see this, React is working!
      </p>
      <button style={{
        marginTop: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '50px',
        fontSize: '1rem',
        cursor: 'pointer'
      }}>
        Click Me to Test
      </button>
    </div>
  );
}

export default App;

