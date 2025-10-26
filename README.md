# 🌟 3D Portfolio - Modern Resume Website

A stunning, interactive 3D portfolio built with **React**, **Three.js**, and **SCSS**. Features immersive 3D animations, smooth scrolling, and a beautiful modern UI to showcase your resume and projects.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-Latest-black?style=for-the-badge&logo=three.js)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## ✨ Features

- 🎨 **3D Interactive Elements** - Stunning 3D animations using React Three Fiber
- 🎭 **Spline Integration** - Ready for advanced 3D designs
- 🌊 **Smooth Animations** - Fluid transitions with Framer Motion
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Modern UI/UX** - Beautiful gradient designs and glassmorphism
- 🚀 **Performance Optimized** - Code-splitting and lazy loading
- 💼 **Complete Resume Sections**:
  - Hero with 3D animated sphere
  - About Me with avatar and education
  - Interactive Skills with 3D visualization
  - Projects showcase with tech stacks
  - Work Experience timeline
  - Contact form with 3D elements
- 🎨 **SCSS Architecture** - Clean, maintainable styling with variables and mixins

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/3d-portfolio.git
cd 3d-portfolio
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start development server**
```bash
npm run dev
```

Your portfolio will be running at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx/scss
│   ├── Hero3D.jsx/scss
│   ├── About.jsx/scss
│   ├── Skills.jsx/scss
│   ├── Projects.jsx/scss
│   ├── Experience.jsx/scss
│   └── Contact.jsx/scss
├── data/
│   └── portfolioData.js    # Your resume data (CUSTOMIZE THIS!)
├── styles/
│   └── _variables.scss     # SCSS variables and mixins
├── App.jsx/scss
├── main.jsx
└── index.scss
```

## 🎨 Customization

### 1. Update Your Information

Edit `src/data/portfolioData.js` to add your personal information:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... more fields
};
```

### 2. Customize Colors

Modify `src/styles/_variables.scss` to change the color scheme:

```scss
$primary-color: #667eea;  // Change to your brand color
$secondary-color: #764ba2;
```

### 3. Add Your Projects

Update the `projects` array in `portfolioData.js`:

```javascript
{
  id: 1,
  title: "Your Project",
  description: "Description",
  technologies: ["React", "Node.js"],
  // ... more fields
}
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Update `vite.config.js`** (if using custom domain):
```javascript
export default defineConfig({
  base: '/your-repo-name/', // or '/' for custom domain
  // ...
})
```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "GitHub Actions" as source

3. **Push to main branch**:
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Your portfolio will automatically deploy! 🎉

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

## 📦 Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Three.js & React Three Fiber** - 3D graphics
- **@react-three/drei** - 3D helpers
- **Spline** - Advanced 3D design integration
- **Framer Motion** - Animations
- **SCSS** - Styling with variables and mixins
- **React Icons** - Icon library

## 🎓 Key Sections

### 🏠 Hero Section
- 3D animated sphere with particles
- Smooth gradient text
- Social media links
- Call-to-action buttons

### 👤 About Section
- Profile avatar
- Education details
- Certifications
- Contact information
- Download resume button

### 💪 Skills Section
- Interactive 3D visualization
- Skill categories (Frontend, Backend, 3D & Design, Tools)
- Animated progress bars
- Skill level indicators

### 🚀 Projects Section
- Project cards with hover effects
- Technology tags
- Live demo and GitHub links
- Key highlights

### 💼 Experience Section
- Timeline layout
- Job positions and companies
- Key achievements
- Duration badges

### 📧 Contact Section
- 3D contact sphere animation
- Contact form with validation
- Contact information cards
- Social media buttons

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎯 Performance Optimizations

- ✅ Code splitting for vendor libraries
- ✅ Lazy loading of components
- ✅ Optimized 3D rendering
- ✅ Image optimization
- ✅ Minified CSS and JS

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shivangi Soti**

- GitHub: [@shivangi](https://github.com/shivangi)
- LinkedIn: [shivangi](https://linkedin.com/in/shivangi)

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

**Made with ❤️ using React, Three.js, and SCSS**
