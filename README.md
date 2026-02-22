# Samvidhan.AI 🏛️ — Your AI Legal Companion for India

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![GitHub issues](https://img.shields.io/github/issues/RIsHaBHMiShrA2710/LegalAi)](https://github.com/RIsHaBHMiShrA2710/LegalAi/issues)

**Samvidhan.AI** is an open-source, AI-powered legal information platform designed to demystify India's legal system for everyone. Powered by OpenAI and built with React + Node.js, it offers simplified explanations of the Indian Constitution, legal proceedings, and law — all in plain, accessible language.

> ⚠️ **Disclaimer**: Samvidhan.AI provides general legal information for educational purposes. It is not a substitute for professional legal advice.

---

## ✨ Features

- 🤖 **AI Legal Chatbot** — Ask questions about Indian law and get AI-generated, plain-language answers
- 📄 **Document Access** — Browse and reference key legal documents
- 🗺️ **Find a Lawyer** — Interactive map to locate nearby legal professionals
- 🔐 **Auth System** — Register/Login with username-password or Google OAuth
- 📱 **Responsive UI** — Clean, mobile-friendly design

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router, React Bootstrap, Vite |
| Backend | Python 3.11, FastAPI, Uvicorn |
| Database | MongoDB Atlas (via Motor async driver) |
| AI | OpenAI API (GPT-3.5-turbo) |
| Auth | JWT (python-jose), passlib/bcrypt |
| Maps | React Leaflet, React Map GL |

---

## 📁 Project Structure

```
SamvidhanAi/
├── client/               # React frontend (Vite)
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── Bot/      # AI chatbot UI
│   │   │   ├── Documents_Page/
│   │   │   ├── findlawyer/
│   │   │   ├── seg_options/
│   │   │   ├── context/  # Auth context
│   │   │   ├── NavBar.jsx
│   │   │   └── Footer.jsx
│   │   └── main.jsx      # App entry point
│   ├── index.html        # Vite root HTML
│   └── vite.config.js
├── server/
│   ├── python/           # ← FastAPI backend (active)
│   │   ├── main.py       # App entry point, CORS, route registration
│   │   ├── config.py     # Settings from .env
│   │   ├── database.py   # Motor async MongoDB client
│   │   ├── models.py     # Pydantic schemas
│   │   ├── auth.py       # JWT + bcrypt helpers
│   │   ├── dependencies.py # FastAPI auth dependency
│   │   ├── routers/
│   │   │   ├── auth.py      # POST /register, POST /login
│   │   │   └── messages.py  # AI chat + history routes
│   │   └── requirements.txt
│   └── (legacy Node.js files kept for reference)
└── BasicDesign/
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ & npm v9+
- [Python](https://python.org/) 3.10+
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- An [OpenAI API key](https://platform.openai.com/)

### 1. Clone the repository

```bash
git clone https://github.com/RIsHaBHMiShrA2710/LegalAi.git
cd LegalAi
```

### 2. Set up the Backend (FastAPI)

```bash
cd server/python
pip install -r requirements.txt
```

Create a `.env` file inside `server/python/`:

```env
MONGOAUTH=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_strong_jwt_secret
SESSION_SECRET=your_session_secret
PORT=5000
```

Start the server:

```bash
# Development (auto-reload)
uvicorn main:app --reload --port 5000

# Production
uvicorn main:app --port 5000 --workers 4
```

The API runs at `http://localhost:5000`.  
Interactive Swagger docs: `http://localhost:5000/docs`

### 3. Set up the Frontend

```bash
cd client
npm install
npm run dev
```

The frontend dev server will start at `http://localhost:3000`.

---

## 📜 Available Scripts

### Frontend (`client/`)

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production (`dist/`) |
| `npm run preview` | Preview the production build |

### Backend (`server/`)

| Script | Description |
|---|---|
| `npm start` | Start the server |
| `npm run dev` | Start with nodemon (auto-reload) |

---

## 🌐 Deployment

- **Backend**: Deployed on [Render](https://render.com) at `https://samvidhanai-1ogw.onrender.com`
- **Frontend**: Deployable on [Netlify](https://netlify.com) or [Vercel](https://vercel.com)

---

## 🤝 Contributing

Contributions are very welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started.

---

## 👥 Original Team (IEM Hacks)

| Name | GitHub |
|---|---|
| Surya Pratap Singh (Leader) | [@suryapratap-01](https://github.com/suryapratap-01) |
| Rishabh Mishra | [@RIsHaBHMiShrA2710](https://github.com/RIsHaBHMiShrA2710) |
| Nayan Padia | [@Nayanpadia](https://github.com/Nayanpadia) |
| Diprit Khaitan | [@dK2856](https://github.com/dK2856) |

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
