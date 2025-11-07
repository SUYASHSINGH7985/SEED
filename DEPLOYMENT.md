# Deployment Guide for SEED

## Quick Fix for Vercel Deployment

Your app works locally but not on Vercel because the frontend is trying to connect to `http://127.0.0.1:5002` (your local computer). On Vercel, you need a publicly accessible backend.

## Step-by-Step Deployment

### Option 1: Deploy Backend to Railway (Recommended - Free Tier)

1. **Go to [Railway](https://railway.app)** and sign up

2. **Create New Project** → Deploy from GitHub repo

3. **Add the following files to your repository:**

   Create `Backend/Procfile`:
   ```
   web: python mainfile.py
   ```

   Create `Backend/runtime.txt`:
   ```
   python-3.11.0
   ```

4. **Deploy Settings:**
   - Root Directory: `Backend`
   - Build Command: `pip install -r ../requirements.txt`
   - Start Command: `python mainfile.py`

5. **Environment Variables:**
   - Add `PORT` = `5002`

6. **Copy your Railway URL** (e.g., `https://seed-production.up.railway.app`)

### Option 2: Deploy Backend to Render

1. **Go to [Render](https://render.com)** and sign up

2. **New Web Service** → Connect your GitHub repo

3. **Settings:**
   - Name: `seed-backend`
   - Environment: `Python 3`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `cd Backend && python mainfile.py`

4. **Copy your Render URL** (e.g., `https://seed-backend.onrender.com`)

### Update Frontend for Production

1. **Update `.env.production` file:**
   ```env
   VITE_API_URL=https://your-backend-url-from-railway-or-render.com
   ```

2. **Add Environment Variable to Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend-url.com`
   - Redeploy your project

3. **Redeploy to Vercel:**
   ```bash
   vercel --prod
   ```

## Testing Your Deployment

1. Visit your Vercel URL
2. Try to sign up for a new account
3. Try to log in
4. Check browser console (F12) for any errors

## Common Issues

### Backend URL not updating
- Make sure to add the environment variable in Vercel Dashboard
- Redeploy after adding the variable
- Clear browser cache

### CORS errors
- Update `mainfile.py` to allow your Vercel domain:
  ```python
  CORS(app, resources={r"/*": {"origins": ["https://your-vercel-app.vercel.app", "http://localhost:5173"]}})
  ```

### Database not persisting on Railway/Render
- These platforms use ephemeral storage
- Consider upgrading to PostgreSQL or MySQL for production
- Or use Railway's persistent volumes

## Free Tier Limits

**Railway:**
- $5 free credit per month
- Apps sleep after 30 minutes of inactivity

**Render:**
- Free tier apps sleep after 15 minutes of inactivity
- First request after sleep takes ~30 seconds

## Recommended: Add a Procfile for Backend

Create `Backend/Procfile`:
```
web: gunicorn mainfile:app
```

Update `requirements.txt`:
```
Flask==3.0.0
Flask-CORS==4.0.0
Werkzeug==3.0.0
PyJWT==2.10.1
gunicorn==21.2.0
```

This uses Gunicorn (production-ready WSGI server) instead of Flask's development server.
