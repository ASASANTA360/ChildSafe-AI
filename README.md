# ChildSafe AI

AI-powered child protection platform for identity verification, risk analysis, case management, and trusted digital services.

## Overview

ChildSafe AI helps governments, NGOs, and humanitarian organizations identify vulnerable children, verify identities, assess risks, and manage interventions using AI-powered agents.

## Features

* Identity Verification
* Risk Assessment
* Fraud Detection
* Case Management
* AI Recommendations
* Audit Logs
* Analytics Dashboard
* MongoDB Database
* Gemini AI Integration
* REST APIs

## AI Agents

* Identity Agent
* Risk Agent
* Fraud Agent
* Case Agent
* Recommendation Agent
* Audit Agent

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* MongoDB Atlas
* Gemini 2.5 Flash
* Mongoose

## Project Structure

```
app/
components/
src/
 ├── agents/
 ├── lib/
 ├── models/
 └── seed/
```

## API Endpoints

### Dashboard

```
GET /api/dashboard
```

### Beneficiaries

```
GET /api/beneficiaries
POST /api/beneficiaries
```

### Cases

```
GET /api/cases
POST /api/cases
```

### Risk Analysis

```
GET /api/risk-analysis
POST /api/risk-analysis
```

### Verification

```
GET /api/verification
```

### AI Analysis

```
POST /api/ai-analysis
```

## Installation

```bash
git clone https://github.com/ASASANTA360/ChildSafe-AI.git
cd ChildSafe-AI
npm install
```

Create `.env.local`

```env
MONGODB_URI=your_mongodb_uri
GEMINI_API_KEY=your_gemini_api_key
```

Run locally

```bash
npm run dev
```

## Seed Database

```bash
npx tsx src/seed/seed.ts
```

## Mission

ChildSafe AI aims to strengthen child protection systems and improve access to trusted digital services for vulnerable children and families.

## Developed By

ASASANTA GLOBAL TECHNOLOGIES

Founder: Salisu Ishaq Asasanta

## License

MIT
