# # SEED - Startup Investment Platform

venv/bin/python3 Backend/mainfile.py

A full-stack web application for startup investments with user authentication and company management.

## 🚀 Tech Stack

**Frontend:**

- React + Vite
- TailwindCSS
- React Router

**Backend:**

- Python Flask
- SQLite Database
- JWT Authentication

## 📋 Prerequisites

- Node.js (v18 or higher)
- Python 3.14+
- npm or yarn

## 🛠️ Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/SUYASHSINGH7985/SEED.git
cd SEED/SEED
```

### 2. Setup Backend

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows

# Install dependencies
pip install -r requirements.txt

# Start backend server
python3 Backend/mainfile.py
```

Backend will run on `http://127.0.0.1:5002`

### 3. Setup Frontend

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173` (or 5174 if 5173 is busy)

## 🌐 Deployment

### Deploy Backend (Railway/Render)

1. **Create an account** on [Railway](https://railway.app) or [Render](https://render.com)

2. **Deploy Flask backend:**

   - Upload your `Backend/` folder
   - Set Python version to 3.14
   - Set start command: `python mainfile.py`
   - Add environment variable: `PORT=5002`

3. **Copy your backend URL** (e.g., `https://your-app.railway.app`)

### Deploy Frontend (Vercel)

1. **Update `.env.production`** with your backend URL:

```env
VITE_API_URL=https://your-backend-url.railway.app
```

2. **Deploy to Vercel:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

3. **Add environment variable in Vercel Dashboard:**
   - Go to your project settings
   - Add: `VITE_API_URL` = `https://your-backend-url.railway.app`

## 📝 Environment Variables

### Frontend (.env.local for development)

```env
VITE_API_URL=http://127.0.0.1:5002
```

### Frontend (.env.production for production)

```env
VITE_API_URL=https://your-backend-url.com
```

## 🔑 Features

- ✅ User Registration & Authentication
- ✅ JWT Token-based sessions
- ✅ Company listings
- ✅ Startup investment tracking
- ✅ Responsive UI

## 🐛 Troubleshooting

**Issue: "Network error. Please check if the backend server is running"**

- Make sure backend is running on port 5002
- Check if `VITE_API_URL` is set correctly
- In production, ensure backend is deployed and URL is correct

**Issue: CORS errors**

- Backend already has CORS enabled
- Ensure credentials are included in fetch requests

## 📄 License

MIT

## 👨‍💻 Author

SUYASHSINGH7985
