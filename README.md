# PathFinder 🚀

> Universal knowledge graph platform revealing what you can build with what you already know — from age 8 to 80, across all domains.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🎯 The Problem

From childhood through retirement, humans acquire skills in isolation — unaware of what their unique combinations enable them to create, become, or contribute.

**The gap:**
- 📚 Students study subjects separately, can't connect them to careers
- 💼 Professionals don't know what career pivots their skills enable
- 🌍 Opportunity awareness depends on privilege, not capability

**Example:** An electrical engineering student learns circuits, algorithms, and signal processing in separate courses — never realizing these combine for robotics, biomedical devices, or AI hardware careers.

---

## 💡 The Solution

**PathFinder** maps **any skill combination** → **projects you can build** → **career paths this opens**.

### What Makes It Different?

**Existing platforms:**
- 🎓 Coursera/Udemy: Courses, but no personalized career mapping
- 💼 LinkedIn Learning: Content, but doesn't show what YOU can build
- 🧪 Career tests: Personality assessments disconnected from skills
- 👨‍💻 freeCodeCamp: Software-only, ignores interdisciplinary opportunities

**PathFinder:**
Your Skills → What You Can Build → Careers This Opens
───────────────── ─────────────────── ────────────────────
[Python] Campus Navigator App Software Engineer
[Graphs/Algorithms] → (using Dijkstra's → Data Scientist
[Circuit Design] algorithm) Robotics Engineer
Hardware + Software Embedded Systems
Integration Project


**Universal scope:** Ages 8-80, all domains (STEM, arts, professional, creative).

---

## ✨ Core Features (In Development)

### 1. **Instant Project Discovery**
- Input your skills → See 10-20 projects you can build TODAY
- No "learn this course first" — immediate buildability
- Ranked by: portfolio value, learning potential, career alignment

### 2. **Interactive Knowledge Graph**
- D3.js visualization of skill relationships
- Hover to see connections, prerequisites, unlocked projects
- Identify "high-leverage" skills that unlock 10x more opportunities

### 3. **Learning Path Optimization**
- Dynamic programming algorithm for optimal skill sequence
- Input: target career + time available
- Output: Week-by-week roadmap with projects

### 4. **AI-Assisted Content**
- GPT-4 handles rare skill combinations
- Expert validation ensures quality
- Community curation for scale

### 5. **Age-Adaptive Experience**
- Kids: Exploration-focused, parent controls
- Students: Career prep, portfolio building
- Professionals: Career pivots
- Seniors: Second careers, legacy projects

---

## 🏗️ Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- D3.js (skill tree visualization)
- Framer Motion (animations)

**Backend:**
- Next.js API Routes (serverless)
- Java microservices (for complex algorithms - future)

**Database:**
- PostgreSQL (Neon.tech)
- Prisma ORM

**AI:**
- OpenAI GPT-4 API

**Infrastructure:**
- Vercel (hosting)
- Supabase (auth + storage)
- Sentry (error tracking)
- PostHog (analytics)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- PostgreSQL (or Neon account)

### Installation

Clone repository
git clone https://github.com/Nithin-2005-dev/PathFinder.git
cd PathFinder

Install dependencies
pnpm install

Set up environment variables
cp .env.example .env.local

Edit .env.local with your credentials
Set up database
pnpm prisma generate
pnpm prisma migrate dev

Start development server
pnpm dev


Open http://localhost:3000

---

## 📁 Project Structure

PathFinder/
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── (auth)/ # Auth routes
│ │ ├── (dashboard)/ # Protected routes
│ │ ├── api/ # API routes
│ │ └── page.tsx # Landing page
│ ├── components/
│ │ ├── ui/ # Reusable components
│ │ ├── skills/
│ │ ├── projects/
│ │ └── pathways/
│ ├── lib/
│ │ ├── db/ # Database utilities
│ │ ├── api/ # API clients
│ │ ├── utils/ # Helpers
│ │ └── types/ # TypeScript types
│ └── styles/
├── prisma/
│ ├── schema.prisma # Database schema
│ └── migrations/
├── public/ # Static assets
└── docs/ # Documentation


---

## 📊 Development Roadmap

### 🔄 Phase 1: MVP (Current - Week 1-8)
- [ ] Project setup (Next.js + TypeScript + Prisma)
- [ ] Database schema design
- [ ] User authentication (Supabase)
- [ ] Skill inventory system
- [ ] Basic project recommendations
- [ ] Landing page + core UI

### 📅 Phase 2: Core Features (Week 9-16)
- [ ] D3.js skill tree visualization
- [ ] Learning path optimization (DP algorithm)
- [ ] Career pathway tracking
- [ ] Project completion flow
- [ ] Gamification (XP, levels, badges)
- [ ] Community content submission

### 🚀 Phase 3: Beta Launch (Week 17-20)
- [ ] AI project generation (GPT-4)
- [ ] Admin dashboard for moderation
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Testing + bug fixes
- [ ] Public beta launch

### 🎯 Phase 4: Growth (Post-Launch)
- [ ] Multi-institutional validation study
- [ ] K-12 partnerships
- [ ] Institutional licensing (B2B)
- [ ] Mobile app (React Native)
- [ ] International expansion

[View detailed milestones →](https://github.com/Nithin-2005-dev/PathFinder/milestones)

---

## 🤝 Contributing

This project is in **early development**. Contributions welcome!

**How to contribute:**
- 🐛 Report bugs via [Issues](https://github.com/Nithin-2005-dev/PathFinder/issues)
- 💡 Suggest features
- 📝 Improve documentation
- 🧪 Add tests
- 🎨 UI/UX improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

## 👨‍💻 About the Project

**Built by:** Nithin Kumar,Pre-Final-year EE student at NIT Silchar

**Why I'm building this:**
I struggled to connect my circuit design and algorithm skills to actual career possibilities. I realized millions of students face the same problem — acquiring knowledge in silos without understanding interdisciplinary opportunities.

PathFinder is my solution to democratize career discovery.

**Project goals:**
- Help students discover what they can build with their unique skill combinations
- Show unexpected interdisciplinary career paths
- Make opportunity awareness independent of privilege
- Eventually serve all ages (childhood → retirement)

---

## 📞 Contact

- 📧 Email: [nk0402246@gmail.com]
- 💼 LinkedIn: [https://www.linkedin.com/in/nithin-kumar-a922b82a3/]

**Project Status:** 🚧 In Development (Started Oct 29, 2025)

**Estimated MVP:** February 2026

---

## 🙏 Acknowledgments


- Open-source community (Next.js, Prisma, D3.js teams)

---

**⭐ Star this repo if you believe in democratizing opportunity discovery!**

**Status:** Week 1 of 16-week build plan