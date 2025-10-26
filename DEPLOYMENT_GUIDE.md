# 🚀 Deployment Guide - 3D Portfolio

This guide will help you deploy your stunning 3D portfolio to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

1. ✅ **Customize Your Data**
   - Update `src/data/portfolioData.js` with your information
   - Replace placeholder text with your actual resume data
   - Update social media links

2. ✅ **Test Locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` and check all sections

3. ✅ **Build Successfully**
   ```bash
   npm run build
   ```
   Ensure no build errors occur

4. ✅ **Preview Production Build**
   ```bash
   npm run preview
   ```
   Test the production build locally

## 🌐 Deploy to GitHub Pages (Recommended)

### Step 1: Configure Your Repository

1. **Update `vite.config.js`**:
   ```javascript
   export default defineConfig({
     base: '/your-repository-name/', // e.g., '/3d-portfolio/'
     // If using custom domain, use base: '/'
   })
   ```

2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow is already configured in `.github/workflows/deploy.yml`

### Step 3: Deploy

```bash
git push origin main
```

🎉 Your site will be live at: `https://yourusername.github.io/your-repo-name/`

The deployment process usually takes 2-3 minutes.

### Using Custom Domain

1. In your repo settings → Pages → Custom domain
2. Add your domain (e.g., `portfolio.yourdomain.com`)
3. Update `vite.config.js`: `base: '/'`
4. Add a `CNAME` file in the `public` folder with your domain

## 🟢 Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/3d-portfolio)

### Manual Deploy

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **For Production**:
   ```bash
   vercel --prod
   ```

### Configuration

Vercel auto-detects Vite. No additional configuration needed!

**Build Settings**:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install --legacy-peer-deps`

## 🟦 Deploy to Netlify

### Drag and Drop (Easiest)

1. Run `npm run build`
2. Go to [Netlify](https://app.netlify.com/drop)
3. Drag and drop your `dist` folder

### Connect to Git

1. Go to [Netlify](https://app.netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add environment variable if needed

5. Click "Deploy site"

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## ☁️ Deploy to AWS S3 + CloudFront

### Prerequisites
- AWS Account
- AWS CLI installed and configured

### Steps

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Create S3 bucket**:
   ```bash
   aws s3 mb s3://your-portfolio-bucket
   ```

3. **Upload files**:
   ```bash
   aws s3 sync dist/ s3://your-portfolio-bucket
   ```

4. **Configure for static hosting**:
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html`

5. **Set up CloudFront** (optional but recommended):
   - Create CloudFront distribution
   - Point to your S3 bucket
   - Configure SSL certificate

## 🔵 Deploy to Azure Static Web Apps

1. **Install Azure Static Web Apps CLI**:
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Login to Azure**:
   ```bash
   az login
   ```

3. **Deploy**:
   ```bash
   swa deploy ./dist --deployment-token <YOUR_TOKEN>
   ```

### GitHub Actions (Recommended)

Azure provides automatic deployment via GitHub Actions when you create a Static Web App from the portal.

## 🐳 Deploy with Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run

```bash
# Build image
docker build -t 3d-portfolio .

# Run container
docker run -p 8080:80 3d-portfolio
```

## 🎯 Performance Tips

### 1. Optimize Images
- Use WebP format
- Compress images before adding
- Use lazy loading

### 2. Code Splitting
Already configured in `vite.config.js`:
```javascript
rollupOptions: {
  output: {
    manualChunks: {
      'react-vendor': ['react', 'react-dom'],
      'three-vendor': ['three', '@react-three/fiber'],
      'animation-vendor': ['framer-motion']
    }
  }
}
```

### 3. Enable Gzip/Brotli
Most platforms (Vercel, Netlify) enable this automatically.

### 4. Use CDN
Consider using a CDN for faster global access:
- CloudFlare
- AWS CloudFront
- Vercel Edge Network (built-in)

## 🔐 Environment Variables

If you add API keys (e.g., for EmailJS):

### Vite Environment Variables

Create `.env`:
```bash
VITE_API_KEY=your_api_key
VITE_SERVICE_ID=your_service_id
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

### Platform-Specific

**Vercel**: Settings → Environment Variables
**Netlify**: Site settings → Build & deploy → Environment
**GitHub Pages**: Secrets in repo settings

## 🐛 Troubleshooting

### Build Fails

**Issue**: Peer dependency conflicts
```bash
npm install --legacy-peer-deps
```

**Issue**: Out of memory
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### 404 on Refresh

**Fix for Netlify/Vercel**: They handle this automatically

**Fix for GitHub Pages**: The SPA routing should work with the base path

**Fix for custom server**: Add redirect rules to serve `index.html` for all routes

### 3D Models Not Loading

- Check if assets are in the `public` folder
- Verify base path in `vite.config.js`
- Check browser console for CORS errors

### Slow Initial Load

- Implement lazy loading for components
- Use Suspense for code splitting
- Optimize 3D model complexity
- Enable gzip compression

## 📊 Analytics (Optional)

Add Google Analytics or other analytics:

1. **Google Analytics**:
   ```bash
   npm install react-ga4
   ```

2. **In your App.jsx**:
   ```javascript
   import ReactGA from 'react-ga4';
   
   ReactGA.initialize('YOUR_TRACKING_ID');
   ```

## 🎉 Post-Deployment

1. ✅ Test all links and navigation
2. ✅ Check mobile responsiveness
3. ✅ Test 3D animations on different devices
4. ✅ Verify contact form works
5. ✅ Check loading performance (use Lighthouse)
6. ✅ Set up monitoring (Sentry, LogRocket)
7. ✅ Share your portfolio! 🚀

## 📱 Custom Domain Setup

### For GitHub Pages

1. Add `CNAME` file to `public/` folder:
   ```
   portfolio.yourdomain.com
   ```

2. Update DNS records:
   ```
   Type: CNAME
   Name: portfolio (or www)
   Value: yourusername.github.io
   ```

### For Vercel/Netlify

1. Add domain in platform settings
2. Update DNS records as instructed
3. SSL is automatic! 🔒

---

## 🆘 Need Help?

- Check [Vite Documentation](https://vitejs.dev/)
- Visit [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- Open an issue on GitHub

**Happy Deploying! 🚀✨**

