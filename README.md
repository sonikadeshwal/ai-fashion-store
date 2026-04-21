# 🧠 AI Fashion Store — Neural Boutique
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg?style=for-the-badge)](https://ai-fashion-store-omega.vercel.app/)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://ai-fashion-store-omega.vercel.app/)
[![React](https://img.shields.io/badge/react-%2320232b.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
An advanced, production-ready AI-powered fashion e-commerce platform. This project blends high-end fashion aesthetics with neural networks to provide a hyper-personalized shopping experience.
## ✨ The Vision
Traditional e-commerce is static. **Neural Boutique** is dynamic. It uses AI to bridge the gap between "browsing" and "finding," featuring a custom-built dark-mode UI with smooth glassmorphism and a suite of AI modules including virtual try-ons and price predictions.
---
## 🚀 Key Features
| Feature | Technology | Description |
|:---|:---|:---|
| **Neural Style Match** | AI Inference | Analyzes style DNA to provide curated wardrobe selections with match percentages. |
| **Virtual Try-On** | Generative AI | A 3-step magic flow allowing users to visualize outfits on themselves using diffusion-inspired logic. |
| **Smart NLP Search** | NLP / Fast API | Search by "vibe" or "occasion" instead of just keywords (e.g., "Something cozy for a rainy day"). |
| **Price Predictor** | ML Regressors | Predictive analytics to advise users on the optimal time to buy based on price drop forecasts. |
| **Premium UX** | Framer Motion | Staggered animations, liquid page transitions, and a fully mobile-responsive dark grid. |
---
## 🛠️ Tech Stack
### Frontend
- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (Custom Design System)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** React Context API (Persisted Cart)
### Backend (Architecture)
- **Core:** FastAPI (Python)
- **Database:** SQLAlchemy with PostgreSQL/SQLite
- **Containerization:** Docker & Docker Compose
- **Deployment:** Vercel (Frontend)
---
## 📁 Project Structure
```bash
ai-fashion-store/
├── frontend/                   # Core React Application
│   ├── src/
│   │   ├── components/         # Reusable UI (Navbar, Glass Cards, Footer)
│   │   ├── context/            # Cart & User Style Context
│   │   ├── pages/              # Home, Shop, PDP, Cart, AI Try-On
│   │   └── data/               # Neural Product Metadata
├── backend/                    # Fast API Engine
├── ml-models/                  # AI Inference Modules (NLP, Recs, Try-On)
└── vercel.json                 # Deployment Configuration
```
---
## 📸 Getting Started
### Local Development
1. **Clone the repo:**
   ```bash
   git clone https://github.com/sonikadeshwal/ai-fashion-store.git
   ```
2. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. **Run Backend (Optional for local API testing):**
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```
---
## 🔮 Roadmap
- [ ] **Real GAN Integration:** Move from mock generative try-on to live stable diffusion API.
- [ ] **User Auth (JWT):** Secure personalized style profiles.
- [ ] **Visual Search:** Upload a photo of a dress to find similar items in the store.
---
### 👨‍💻 Developed by
**Sonika Deshwal**  
*Building the future of AI-driven commerce.*
---
*Developed via Autonomous Ralph Loop / GSD Architecture.*
