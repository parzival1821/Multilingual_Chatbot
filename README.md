# Sahayak

**Sahayak** is a multilingual, RAG-style welfare scheme discovery assistant for the NSS Open Projects 2026 AI track. It helps users answer a short eligibility questionnaire, discover relevant welfare schemes, ask grounded follow-up questions, and generate a document checklist.

## Current Status

- Static web app scaffolded with no frontend framework dependency.
- Curated MVP scheme data added for 8 welfare schemes.
- Eligibility recommendation engine added.
- Lightweight retrieval and grounded answer generation added.
- Local tests added for core recommendation and chatbot behavior.

## MVP Features

- English and Hindi mode.
- Guided eligibility questionnaire.
- Sample personas for quick demos.
- Personalized scheme recommendations with reasons.
- Grounded chatbot answers with source links.
- Document checklist generator.
- Safe fallback when the prototype does not know an answer.

## Run Locally

```bash
npm run dev
```

Then open:

```text
http://localhost:4173
```

## Test

```bash
npm test
```

## Progress Log

### 2026-06-11

- Initialized the static app structure.
- Added `.gitignore` entries so `details.md`, `plan.md`, and `schemes.md` stay local.
- Added scheme knowledge base seed data in code form.
- Added eligibility, retrieval, answer, and checklist logic.
- Added initial automated tests.

## Project Positioning

This project is intentionally built as a practical AI product, not a custom ML research model. The technical strength is the combination of structured eligibility logic, retrieval-grounded answers, bilingual UX, source-backed recommendations, and a low-bandwidth flow that can later move to WhatsApp, SMS, or IVR.
