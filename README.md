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
- One-click checklist actions from recommendation cards.
- Safe fallback when the prototype does not know an answer.
- Hindi labels for questionnaire controls and major answer sections.

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

Run all local checks:

```bash
npm run check
```

## Verification

- `npm test` validates the core eligibility, retrieval, fallback, citation, and checklist behavior.
- `npm run smoke` validates that the static app shell references the expected assets and demo sections.
- Local HTTP smoke checks should return `200 OK` for `/`, `/styles.css`, and `/src/app.js`.
- The local planning files `details.md`, `plan.md`, and `schemes.md` are intentionally ignored and should not be committed.

## Demo Script

1. Open the app and keep the language in English.
2. Click the `Farmer` sample persona.
3. Show that PM-KISAN ranks as a strong match and PM-JAY appears for health coverage.
4. Click `Use checklist` on PM-KISAN and show the required documents.
5. Ask: `What documents do I need for Ayushman Bharat?`
6. Switch to Hindi mode and ask: `Mujhe ghar ke liye kaunsi yojana mil sakti hai?`
7. Show source links, verification badges, and the safe fallback for unsupported questions.

## Manual QA Checklist

- Farmer persona ranks PM-KISAN first.
- Woman head-of-household persona shows Ujjwala, PMAY-U, and Sukanya.
- Street vendor persona ranks PM SVANidhi first.
- Hindi mode updates labels, options, answer prefixes, and checklist actions.
- Unsupported questions produce a safe fallback instead of invented scheme details.
- `details.md`, `plan.md`, and `schemes.md` do not appear in git status as staged or tracked files.

## Progress Log

### 2026-06-11

- Initialized the static app structure.
- Added `.gitignore` entries so `details.md`, `plan.md`, and `schemes.md` stay local.
- Added scheme knowledge base seed data in code form.
- Added eligibility, retrieval, answer, and checklist logic.
- Added initial automated tests.
- Verified core tests pass locally.
- Verified the static app and assets are served on the local dev server.
- Pushed the first implementation checkpoint to `origin/main`.
- Improved Hindi mode with translated form options, special-category labels, and localized answer prefixes.
- Added one-click recommendation-to-checklist actions for a cleaner demo flow.
- Added static smoke checks plus a README demo script and manual QA checklist.

## Next Build Tasks

- Add screenshots once the visual pass is complete.
- Add a deployment target if time allows.

## Project Positioning

This project is intentionally built as a practical AI product, not a custom ML research model. The technical strength is the combination of structured eligibility logic, retrieval-grounded answers, bilingual UX, source-backed recommendations, and a low-bandwidth flow that can later move to WhatsApp, SMS, or IVR.
