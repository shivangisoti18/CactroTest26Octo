# 🎨 Customization Guide - 3D Portfolio

Make this portfolio truly yours! Follow this guide to customize every aspect.

## 📝 Step 1: Personal Information

### Edit `src/data/portfolioData.js`

#### Personal Info
```javascript
export const personalInfo = {
  name: "Your Full Name",              // Your name
  title: "Your Professional Title",    // e.g., "Full Stack Developer"
  tagline: "Your Catchy Tagline",     // Brief description
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  bio: "Your detailed bio...",        // Tell your story
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourwebsite.com"
  }
};
```

## 💼 Step 2: Work Experience

Add your work history:

```javascript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "2022 - Present",
    description: "Brief description of your role",
    achievements: [
      "Key achievement or metric",
      "Another important accomplishment",
      "Technical contribution"
    ]
  },
  // Add more jobs...
];
```

**Tips:**
- Use numbers and metrics ("Increased performance by 60%")
- Focus on impact, not just tasks
- Keep it concise but impressive

## 🎓 Step 3: Education

```javascript
export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "University Name",
    year: "2018 - 2022",
    honors: "Cum Laude / GPA 3.8",
    relevant: [
      "Relevant Course 1",
      "Relevant Course 2",
      "Special Project"
    ]
  }
];
```

## 🏆 Step 4: Certifications

```javascript
export const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2024"
  },
  // Add more...
];
```

## 💪 Step 5: Skills

Customize your skills with accurate levels:

```javascript
export const skills = [
  {
    category: "Frontend",
    items: [
      { 
        name: "React",
        level: 95,        // 0-100
        icon: "⚛️"       // Choose an emoji
      },
      // Add your skills...
    ]
  }
];
```

**Skill Categories:**
- Frontend Development
- Backend Development
- 3D & Design
- DevOps & Tools
- Languages
- Databases

**How to Rate:**
- 90-100: Expert, can teach others
- 75-89: Advanced, production-ready
- 60-74: Intermediate, comfortable
- 40-59: Basic knowledge
- 0-39: Beginner

## 🚀 Step 6: Projects

Showcase your best work:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Clear, engaging description of what the project does",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "🎨",  // Emoji or image path
    color: "#FF6B6B",  // Hex color for card background
    github: "https://github.com/you/project",
    demo: "https://project-demo.com",
    highlights: [
      "Key feature or achievement",
      "Technical challenge solved",
      "Impact or metric"
    ]
  }
];
```

**Project Tips:**
- Use 6 best projects (quality > quantity)
- Include live demos when possible
- Show variety in tech stack
- Highlight problem-solving

**Emoji Ideas for Projects:**
- 🎨 Design/Creative
- 🤖 AI/ML
- 📱 Mobile App
- 🌐 Web App
- 🎮 Game
- 📊 Data/Analytics
- 🛒 E-commerce
- 💼 Business Tool

## 🎨 Step 7: Colors & Theme

### Edit `src/styles/_variables.scss`

#### Primary Colors
```scss
$primary-color: #667eea;      // Main brand color
$secondary-color: #764ba2;     // Accent color
$accent-color: #f093fb;        // Highlight color
```

#### Gradients
```scss
$primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Popular Gradient Combinations:**
```scss
// Sunset
linear-gradient(135deg, #FA709A 0%, #FEE140 100%)

// Ocean
linear-gradient(135deg, #667eea 0%, #764ba2 100%)

// Forest
linear-gradient(135deg, #11998e 0%, #38ef7d 100%)

// Fire
linear-gradient(135deg, #f12711 0%, #f5af19 100%)

// Purple Haze
linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)

// Mint
linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)
```

Find more at: [UIGradients](https://uigradients.com/)

## 🖼️ Step 8: Images & Assets

### Add Your Profile Picture

Replace the avatar with your image:

**Option 1: Use Emoji/Initials (Current)**
- Already set up in `About.jsx`
- Shows your initials

**Option 2: Use Custom Image**

1. Add image to `public/images/avatar.jpg`
2. Update `About.jsx`:
```jsx
<img src="/images/avatar.jpg" alt={personalInfo.name} />
```

### Project Screenshots

1. Add images to `public/images/projects/`
2. Update `portfolioData.js`:
```javascript
image: "/images/projects/project1.jpg"
```

### Optimize Images
```bash
# Recommended tools
- TinyPNG (online)
- ImageOptim (Mac)
- Squoosh (online)
```

## ✨ Step 9: 3D Customization

### Hero Section Sphere

Edit `src/components/Hero3D.jsx`:

```jsx
<MeshDistortMaterial
  color="#667eea"        // Change color
  distort={0.4}          // 0.0 - 1.0 distortion amount
  speed={2}              // Animation speed
  roughness={0.2}        // Material roughness
  metalness={0.8}        // Metallic appearance
/>
```

### Skills 3D Boxes

Edit `src/components/Skills.jsx`:

```jsx
// Change colors
<SkillBox position={[-2, 2, 0]} color="#667eea" scale={[1, 1, 1]} />

// Adjust positions (x, y, z)
// Adjust scale [width, height, depth]
```

### Add Spline Scene

1. Design in [Spline](https://spline.design/)
2. Export and get embed code
3. Replace a Canvas in `Hero3D.jsx`:

```jsx
import Spline from '@splinetool/react-spline';

<Spline scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode" />
```

## 📱 Step 10: Contact Form Integration

### Using EmailJS (Recommended)

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Get credentials:**
   - Service ID
   - Template ID
   - Public Key

3. **Create `.env` file:**
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Update `Contact.jsx`:**
```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    e.target,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    setStatus('success');
  })
  .catch(() => {
    setStatus('error');
  });
};
```

### Using Custom Backend

Point to your API:
```javascript
fetch('https://your-api.com/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

## 🎭 Step 11: Animations

### Adjust Animation Timing

Edit component files:

```jsx
// Slower entrance
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1.2 }}  // Increase duration

// Add delay
transition={{ duration: 0.8, delay: 0.5 }}

// Change easing
transition={{ duration: 0.8, ease: "easeOut" }}
```

### Common Easing Options:
- `"linear"`
- `"easeIn"`
- `"easeOut"`
- `"easeInOut"`
- `[0.4, 0, 0.2, 1]` (custom cubic-bezier)

## 📊 Step 12: Add Analytics

### Google Analytics

1. **Install:**
```bash
npm install react-ga4
```

2. **Initialize in `App.jsx`:**
```javascript
import ReactGA from 'react-ga4';

useEffect(() => {
  ReactGA.initialize('YOUR_MEASUREMENT_ID');
  ReactGA.send('pageview');
}, []);
```

## 🎯 Step 13: SEO Optimization

### Update `index.html`

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>Your Name - Portfolio</title>
  <meta name="description" content="Your compelling description" />
  <meta name="keywords" content="react, developer, portfolio, 3d" />
  <meta name="author" content="Your Name" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="/preview.jpg" />
  <meta property="og:url" content="https://yoursite.com" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Your Name" />
  <meta name="twitter:description" content="Your description" />
  <meta name="twitter:image" content="/preview.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
```

## 🚀 Step 14: Performance Tweaks

### Lazy Load Components

```javascript
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));

// In App.jsx
<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

### Reduce 3D Complexity

```jsx
// Lower quality for mobile
const isMobile = window.innerWidth < 768;

<Sphere args={[1, isMobile ? 32 : 100, isMobile ? 32 : 200]}>
```

## 🎬 Step 15: Add Sections

Want more sections? Copy existing component structure:

```bash
src/components/
├── NewSection.jsx
└── NewSection.scss
```

Follow the pattern:
1. Import in `App.jsx`
2. Add section ID for navigation
3. Update navigation in `Navbar.jsx`

## ✅ Final Checklist

- [ ] Updated all personal information
- [ ] Added real work experience
- [ ] Listed actual projects with links
- [ ] Accurate skill levels
- [ ] Custom colors/theme
- [ ] Contact form working
- [ ] Profile image added
- [ ] Social links working
- [ ] Tested on mobile
- [ ] SEO meta tags updated
- [ ] Analytics added (optional)
- [ ] Resume download link working

---

## 🆘 Need Inspiration?

**Portfolio Examples:**
- [Bruno Simon](https://bruno-simon.com/) - Creative 3D
- [Brittany Chiang](https://brittanychiang.com/) - Clean design
- [Matt Farley](https://mattfarley.ca/) - Simple & effective

**Color Schemes:**
- [Coolors](https://coolors.co/)
- [Color Hunt](https://colorhunt.co/)
- [Adobe Color](https://color.adobe.com/)

**Icons & Emojis:**
- [Emojipedia](https://emojipedia.org/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Questions?** Open an issue on GitHub!

**Made it awesome?** Share your portfolio! 🎉

