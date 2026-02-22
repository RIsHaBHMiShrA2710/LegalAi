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
| Backend | Node.js, Express.js |
| Database | MongoDB (via Mongoose) |
| AI | OpenAI API |
| Auth | JWT, Passport.js (Google OAuth2) |
| Maps | React Leaflet, React Map GL |

---

## 📁 Project Structure

```
SamvidhanAi/
├── client/               # React frontend (Vite)
│   ├── public/           # Static assets (images, CSS)
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
├── server/               # Express backend
│   ├── config/           # DB & env config
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Auth middleware
│   ├── models/           # Mongoose models
│   ├── utils/
│   └── server.js         # Entry point
└── BasicDesign/          # Design mockups/assets
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) v9+
- A [MongoDB](https://www.mongodb.com/) instance (local or Atlas)
- An [OpenAI API key](https://platform.openai.com/)
- Google OAuth credentials *(optional, for Google login)*

### 1. Clone the repository

```bash
git clone https://github.com/RIsHaBHMiShrA2710/LegalAi.git
cd LegalAi
```

### 2. Set up the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Start the server:

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The backend will run at `http://localhost:5000`.

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
