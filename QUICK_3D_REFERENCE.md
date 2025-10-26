# 🎯 Quick 3D Portfolio Reference

## 🚀 Quick Start

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Key Files to Customize

### 1. Portfolio Data
**File:** `src/data/portfolioData.js`

```javascript
// Your personal info
export const personalInfo = {
  name: "Your Name Here",
  title: "Your Job Title",
  tagline: "Your Tagline",
  email: "your@email.com",
  phone: "+1 234 567 8900",
  location: "Your City",
  bio: "Your bio...",
  social: {
    github: "https://github.com/you",
    linkedin: "https://linkedin.com/in/you",
    twitter: "https://twitter.com/you",
    portfolio: "https://yoursite.com"
  }
};

// Your skills
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️", level: 95 },
      // Add more...
    ]
  }
];

// Your projects
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    image: "🎨",
    color: "#FF6B6B",
    technologies: ["React", "Node.js"],
    github: "https://github.com/you/project",
    demo: "https://project-demo.com"
  }
];
```

### 2. Colors & Theme
**File:** `src/styles/_variables.scss`

```scss
// Primary colors
$primary-color: #667eea;
$secondary-color: #764ba2;
$accent-color: #f093fb;

// Gradients
$primary-gradient: linear-gradient(
  135deg, 
  #667eea 0%, 
  #764ba2 100%
);

// Dark theme colors
$bg-primary: #0a0a14;
$bg-secondary: #1a1a2e;
```

### 3. 3D Sphere Settings
**File:** `src/components/Hero3D.jsx`

```javascript
// Sphere size and appearance
<Sphere ref={meshRef} args={[1, 100, 200]} scale={2.8}>
  <MeshDistortMaterial
    color="#667eea"        // Base color
    distort={0.5}          // Morphing amount (0-1)
    speed={2}              // Animation speed
    roughness={0.1}        // Surface roughness (0-1)
    metalness={0.9}        // Metallic look (0-1)
    emissive="#4a5fd9"     // Glow color
    emissiveIntensity={0.3} // Glow strength
  />
</Sphere>

// Stars
<Stars 
  radius={100}       // Spread distance
  depth={60}         // Front-to-back depth
  count={7000}       // Number of stars
  factor={5}         // Size factor
  speed={1.5}        // Movement speed
/>
```

### 4. Animation Speeds
**File:** `src/components/Hero3D.jsx`

```javascript
// Rotating job titles
const interval = setInterval(() => {
  setCurrentRole((prev) => (prev + 1) % roles.length);
}, 3000); // Change every 3 seconds

// Typewriter speed
setTimeout(() => {
  setDisplayText(prev => prev + text[currentIndex]);
  setCurrentIndex(prev => prev + 1);
}, 50); // 50ms per character

// Sphere rotation speed
meshRef.current.rotation.x = time * 0.2; // X-axis speed
meshRef.current.rotation.y = time * 0.3; // Y-axis speed

// Floating animation
meshRef.current.position.y = Math.sin(time * 0.5) * 0.15;
```

## 🎨 Common Customizations

### Change Sphere Color
```javascript
// In Hero3D.jsx
<MeshDistortMaterial
  color="#FF6B6B"  // Change to any hex color
  emissive="#FF0000"
/>
```

### Change Gradient Theme
```scss
// In _variables.scss
$primary-gradient: linear-gradient(
  135deg,
  #FF6B6B 0%,    // New color 1
  #FF8E53 100%   // New color 2
);
```

### Change Star Count
```javascript
// In Hero3D.jsx - Reduce for better performance
<Stars count={3000} />  // Less stars = better FPS
```

### Adjust Animation Speed
```javascript
// Slower rotation
autoRotateSpeed={0.3}  // Default: 0.8

// Faster distortion
<MeshDistortMaterial speed={5} />  // Default: 2
```

### Change Background
```scss
// In Hero3D.scss
.hero-section {
  background: radial-gradient(
    circle at 50% 50%,
    #1a0033 0%,     // Dark purple
    #000000 100%
  );
}
```

## 🔧 Troubleshooting

### 3D Scene Not Showing
```javascript
// Check browser console for errors
// Make sure WebGL is supported
// Try clearing browser cache
```

### Performance Issues
```javascript
// Reduce star count
<Stars count={3000} />  // From 7000

// Disable auto-rotate
<OrbitControls autoRotate={false} />

// Simplify sphere
<Sphere args={[1, 50, 100]} />  // Lower poly count
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run dev
```

## 📱 Responsive Breakpoints

```scss
// Desktop: 1400px+
// Laptop: 1024px - 1400px
// Tablet: 768px - 1024px
// Mobile: < 768px

@media (max-width: 768px) {
  // Mobile adjustments
  .hero-canvas {
    opacity: 0.7;
  }
}
```

## ⚡ Performance Tips

### 1. Reduce 3D Complexity
```javascript
// Lower polygon count
<Sphere args={[1, 50, 100]} />  // Instead of [1, 100, 200]

// Fewer stars
<Stars count={3000} />  // Instead of 7000
```

### 2. Optimize Images
```bash
# Use WebP format
# Compress images before adding
# Use appropriate sizes
```

### 3. Code Splitting
```javascript
// Already implemented!
const About = lazy(() => import('./components/About'));
```

## 🎯 Component Structure

```
App.jsx (Main)
  ├─ Navbar          (Fixed navigation)
  ├─ Hero3D          (3D animated hero)
  └─ Suspense        (Lazy loaded sections)
      ├─ About       (Profile & education)
      ├─ Skills      (Skills with bars)
      ├─ Projects    (Project cards)
      ├─ Experience  (Timeline)
      └─ Contact     (Contact form)
```

## 🎨 Effect Toggle Reference

### Enable/Disable Ambient Orbs
```scss
// In Hero3D.scss
.hero-section {
  &::before,
  &::after {
    display: none;  // Disable orbs
  }
}
```

### Enable/Disable Typewriter
```javascript
// In Hero3D.jsx
// Replace TypewriterText with plain text
<span className="gradient-text">
  {personalInfo.name}  // No animation
</span>
```

### Enable/Disable Auto-Rotate
```javascript
// In Hero3D.jsx
<OrbitControls 
  autoRotate={false}  // Disable auto-rotation
/>
```

## 📊 Browser Compatibility

| Browser | 3D Support | Performance |
|---------|-----------|-------------|
| Chrome  | ✅ Excellent | ⚡ Fast    |
| Edge    | ✅ Excellent | ⚡ Fast    |
| Firefox | ✅ Good      | 🔥 Good    |
| Safari  | ✅ Good      | 🔥 Good    |
| Mobile  | ⚠️ Limited  | 🐢 Slower  |

## 🚀 Deployment Checklist

- [ ] Update `portfolioData.js` with your info
- [ ] Replace placeholder projects with real ones
- [ ] Test on multiple devices
- [ ] Check performance with DevTools
- [ ] Optimize images
- [ ] Test all links
- [ ] Add meta tags for SEO
- [ ] Run `npm run build`
- [ ] Deploy to hosting platform

## 💡 Quick Fixes

### Stars Too Dense?
```javascript
<Stars count={2000} factor={3} />
```

### Sphere Too Large?
```javascript
<Sphere scale={2.0} />  // From 2.8
```

### Animations Too Fast?
```javascript
// Slow down all transitions
transition={{ duration: 1.2, delay: 0.3 }}
```

### Text Too Small on Mobile?
```scss
.hero-title {
  font-size: clamp(2rem, 6vw, 5rem);  // Adjust first value
}
```

## 📚 Helpful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Maintenance
npm install          # Install dependencies
npm update           # Update packages
npm audit fix        # Fix security issues

# Git
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to remote
```

## 🎉 You're All Set!

Your professional 3D portfolio is ready! 

**Next Steps:**
1. Customize your data in `portfolioData.js`
2. Adjust colors in `_variables.scss`
3. Test on different devices
4. Deploy and share!

---

**Need more help?** Check:
- `PROFESSIONAL_3D_SETUP.md` - Complete setup guide
- `3D_FEATURES_SHOWCASE.md` - Feature breakdown
- `CUSTOMIZATION_GUIDE.md` - Detailed customization

**Happy coding! 🚀✨**

