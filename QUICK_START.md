# ⚡ Quick Start Guide

Get your 3D portfolio up and running in 5 minutes!

## 🚀 Installation (2 minutes)

```bash
# 1. Clone or use this repository
git clone <your-repo-url>
cd 3d-portfolio

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start development server
npm run dev
```

✅ Your portfolio should now be running at `http://localhost:3000`

## ✏️ Customize Your Info (3 minutes)

### 1. Open `src/data/portfolioData.js`

### 2. Update Personal Info
```javascript
export const personalInfo = {
  name: "YOUR NAME HERE",
  title: "YOUR JOB TITLE",
  email: "your@email.com",
  // ... update all fields
};
```

### 3. Save and see live changes! 🎉

## 🎨 Change Colors (Optional)

### Open `src/styles/_variables.scss`
```scss
$primary-color: #667eea;  // ← Change this
$secondary-color: #764ba2; // ← And this
```

## 📱 What You Get

✅ **Hero Section** - 3D animated sphere with your intro  
✅ **About** - Your bio, education, certifications  
✅ **Skills** - Interactive 3D visualization  
✅ **Projects** - Showcase up to 6 projects  
✅ **Experience** - Timeline of your work history  
✅ **Contact** - Form + contact info + social links  

## 🌐 Deploy (5 minutes)

### GitHub Pages (Easiest)

```bash
# 1. Create GitHub repo and push code
git remote add origin <your-repo-url>
git push -u origin main

# 2. Enable GitHub Pages
# Go to Settings → Pages → Source: GitHub Actions

# 3. Done! Your site will be live at:
# https://yourusername.github.io/repo-name/
```

### Vercel (Fastest)

```bash
npm i -g vercel
vercel
```

## 📚 Full Guides

- 📖 [Full README](README.md) - Complete documentation
- 🎨 [Customization Guide](CUSTOMIZATION_GUIDE.md) - Detailed customization
- 🚀 [Deployment Guide](DEPLOYMENT_GUIDE.md) - All deployment options

## 🆘 Issues?

**Build fails?**
```bash
npm install --legacy-peer-deps
```

**Can't see changes?**
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache

**3D not rendering?**
- Check browser console for errors
- Try different browser (Chrome recommended)
- Update graphics drivers

## ✨ Next Steps

1. ✅ Customize your info in `portfolioData.js`
2. ✅ Change colors in `_variables.scss`
3. ✅ Add your projects and work experience
4. ✅ Test contact form
5. ✅ Deploy!

---

**That's it! You now have a stunning 3D portfolio! 🎉**

Need more help? Check the [Customization Guide](CUSTOMIZATION_GUIDE.md)!

