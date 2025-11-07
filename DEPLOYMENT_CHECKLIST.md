# 🚀 Quick Deployment Checklist

## ✅ Completed (Code Changes)
- [x] Created environment variable files (.env.local, .env.production)
- [x] Updated all API calls to use environment variables
- [x] Added backend deployment files (Procfile, runtime.txt)
- [x] Updated .gitignore
- [x] Created comprehensive documentation

## 📋 You Need to Do (Manual Steps)

### 1. Deploy Backend (15 minutes)
Choose Railway OR Render:

**Railway:**
- [ ] Go to https://railway.app
- [ ] New Project → Deploy from GitHub
- [ ] Select SEED repo, set root to `Backend`
- [ ] Copy your Railway URL: `_______________________`

**Render:**
- [ ] Go to https://render.com  
- [ ] New Web Service → Connect GitHub
- [ ] Set start command: `cd Backend && python mainfile.py`
- [ ] Copy your Render URL: `_______________________`

### 2. Update Vercel (5 minutes)
- [ ] Go to Vercel Dashboard → Your Project → Settings
- [ ] Environment Variables → Add New
- [ ] Name: `VITE_API_URL`
- [ ] Value: (paste your backend URL from step 1)
- [ ] Save

### 3. Deploy (2 minutes)
```bash
git add .
git commit -m "Add production environment config"
git push
```
- [ ] Vercel auto-deploys (or run `vercel --prod`)

### 4. Test (2 minutes)
- [ ] Visit your Vercel URL
- [ ] Try signup/signin
- [ ] Check browser console for errors

## 🎯 After Deployment

Your URLs:
- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-backend.railway.app` (or render.com)

Test these endpoints:
- Backend health: `{backend-url}/get_companies`
- Signup: `{backend-url}/signup` (POST)
- Signin: `{backend-url}/signin` (POST)

## 🐛 Troubleshooting

**Network Error**
→ Backend URL in Vercel environment variables is wrong

**CORS Error**  
→ Update CORS in mainfile.py to include your Vercel domain

**404 on API**
→ Backend not deployed or URL incorrect

**Still showing localhost**
→ Clear Vercel cache and redeploy

## 📞 Need Help?

Check these files:
1. `FIXES_APPLIED.md` - What was changed
2. `DEPLOYMENT.md` - Detailed deployment guide
3. `README.md` - Full project documentation

---
**Estimated Total Time:** ~25 minutes to deploy both backend and frontend
