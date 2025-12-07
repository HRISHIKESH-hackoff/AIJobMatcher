# AIJobMatcher - Deployment Guide

## Quick Deployment Summary

This project is fully configured for deployment. Follow the guides below based on your preferred platform.

---

## ✅ BACKEND DEPLOYMENT (Express.js API)

### Option 1: Deploy to Render (Recommended for Free Tier)

#### Step-by-Step Instructions:

1. **Sign up / Login to Render**
   - Visit [render.com](https://render.com)
   - Click "Dashboard"
   - Sign in with GitHub

2. **Create a New Web Service**
   - Click "New +" → "Web Service"
   - Select your AIJobMatcher repository
   - Click "Connect"

3. **Configure Settings**
   - **Name**: `aijobmatcher-backend`
   - **Runtime**: Node
   - **Branch**: main
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Environment Variables**
   - Add the following variables:
     ```
     MONGODB_URI=mongodb://localhost:27017/aijobmatcher
     NODE_ENV=production
     PORT=5000
     CORS_ORIGIN=https://yourdomain.vercel.app
     ```
   - (Update CORS_ORIGIN after deploying frontend)

5. **Select Instance Type**
   - Free tier: 0.5 GB RAM, $0/month (Recommended for learning)
   - Click "Deploy Web Service"

6. **Monitor Deployment**
   - Render will automatically build and deploy
   - Check logs in the dashboard
   - Your API will be available at: `https://aijobmatcher-backend.onrender.com`

### Option 2: Deploy to Heroku

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create aijobmatcher-backend

# Set environment variables
heroku config:set MONGODB_URI="mongodb://..." --app aijobmatcher-backend
heroku config:set NODE_ENV=production --app aijobmatcher-backend

# Deploy
git push heroku main
```

### Option 3: Deploy to Railway.app

1. Visit [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select AIJobMatcher repository
4. Add `backend` as root directory
5. Configure environment variables
6. Deploy!

---

## ✅ FRONTEND DEPLOYMENT (React App)

### Option 1: Deploy to Vercel (Recommended)

#### Automatic Deployment:

1. **Sign up / Login to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign up"
   - Continue with GitHub

2. **Import Project**
   - Click "New Project"
   - Select AIJobMatcher repository
   - Vercel auto-detects it's a monorepo

3. **Configure**
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

4. **Environment Variables**
   - Add: `REACT_APP_API_URL=https://aijobmatcher-backend.onrender.com`
   - (Update with your actual backend URL)

5. **Deploy**
   - Click "Deploy"
   - Your app will be available at: `https://aijobmatcher.vercel.app` (custom URL)

#### Manual Deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel --prod

# Follow prompts and link your GitHub account
```

### Option 2: Deploy to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub
4. Select AIJobMatcher
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Add environment variable: `REACT_APP_API_URL`
7. Deploy!

### Option 3: Deploy to GitHub Pages

```bash
cd frontend
npm run build

# Update package.json homepage
# "homepage": "https://HRISHIKESH-hackoff.github.io/AIJobMatcher"

# Deploy
npm run deploy
```

---

## 🔧 LOCAL DEVELOPMENT

### Run Locally

```bash
# Terminal 1: Start Backend
cd backend
npm install
npm start
# Backend runs on http://localhost:5000

# Terminal 2: Start Frontend
cd frontend
npm install
npm start
# Frontend runs on http://localhost:3000
```

### Test API Endpoints

```bash
# Health check
curl http://localhost:5000/api/health

# Response:
# {"status":"Server is running","timestamp":"2025-12-07T..."}
```

---

## 📊 FULL DEPLOYMENT WORKFLOW

### Complete Setup (All Services)

1. **Deploy Backend First**
   - Deploy to Render (or Heroku/Railway)
   - Note the deployed URL (e.g., `https://aijobmatcher.onrender.com`)

2. **Update Frontend Configuration**
   - In `frontend/src/` create `.env.production`:
     ```
     REACT_APP_API_URL=https://aijobmatcher.onrender.com
     ```

3. **Deploy Frontend**
   - Deploy to Vercel (or Netlify)
   - Frontend automatically builds with correct API URL

4. **Update Backend CORS**
   - Go to Render dashboard
   - Update `CORS_ORIGIN` environment variable to your Vercel URL
   - Restart service

5. **Test Production**
   - Visit your frontend URL
   - Upload a resume
   - Verify API calls work correctly

---

## 🚀 ADVANCED: MONOREPO DEPLOYMENT WITH RENDER

Render automatically detects `render.yaml` in your repo and can deploy both services:

```yaml
# Already configured in your project!
services:
  - type: web
    name: aijobmatcher-backend
    env: node
    buildCommand: cd backend && npm install
    startCommand: cd backend && npm start
    
  - type: static
    name: aijobmatcher-frontend
    buildCommand: cd frontend && npm run build
    staticPublishPath: frontend/build
```

Just push and Render handles both deployments!

---

## 🔐 PRODUCTION CHECKLIST

- [ ] Update `CORS_ORIGIN` environment variable
- [ ] Set `NODE_ENV=production`
- [ ] Configure real MongoDB URI (MongoDB Atlas or self-hosted)
- [ ] Add API rate limiting
- [ ] Enable HTTPS (automatic on Render/Vercel)
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure logging
- [ ] Test all API endpoints
- [ ] Verify frontend-backend communication
- [ ] Set up CI/CD pipeline (GitHub Actions)

---

## 📱 MOBILE TESTING

After deployment, test on mobile devices:

1. Get your deployed frontend URL
2. Share link on mobile device
3. Test file upload functionality
4. Verify responsive design

---

## 🆘 TROUBLESHOOTING

### Backend Issues

**"Cannot GET /api/health"**
- Check if backend is running
- Verify backend URL is correct

**"CORS Error"**
- Update `CORS_ORIGIN` environment variable
- Restart backend service

**"MongoDB Connection Error"**
- Verify `MONGODB_URI` is correct
- Check MongoDB server is running
- For MongoDB Atlas: whitelist your IP

### Frontend Issues

**"API_URL is undefined"**
- Check `.env.production` file exists
- Variable name must start with `REACT_APP_`
- Rebuild after adding env variables

**"Blank Page After Deploy"**
- Check browser console for errors
- Verify build command is correct
- Check homepage setting in package.json

---

## 📚 USEFUL LINKS

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [GitHub Actions](https://github.com/features/actions)

---

## 🎉 DEPLOYMENT COMPLETED!

Your AIJobMatcher application is now live! Share the frontend URL with recruiters and add it to your resume and portfolio.

**Frontend**: Your Vercel/Netlify URL
**Backend**: Your Render/Heroku URL
**GitHub**: https://github.com/HRISHIKESH-hackoff/AIJobMatcher
