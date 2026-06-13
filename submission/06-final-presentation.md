# Final Presentation Content

Project: **Sahayak - Welfare Scheme Discovery Assistant**  
Format: **8-slide presentation with speaker notes**

## Slide 1: Title

**Sahayak: Multilingual Welfare Scheme Discovery Assistant**

Subtitle:

Low-bandwidth, source-backed scheme awareness for rural and low-income beneficiaries.

Slide content:

- NSS Open Projects 2026.
- Track 1.1: AI-Based Multilingual Chatbot for Welfare Scheme Awareness.
- Live demo: `https://parzival1821.github.io/Multilingual_Chatbot/`
- Demo video: `https://vimeo.com/1200973459?share=copy&fl=sv&fe=ci`

Speaker note:

Sahayak helps users discover welfare schemes, understand eligibility, and prepare documents in English or Hindi.

## Slide 2: Problem

Main message:

India has many welfare schemes, but eligible users often do not discover or complete applications.

Core pain points:

- Information is fragmented across portals and PDFs.
- Eligibility language is hard to understand.
- Documentation friction stops users from applying.

Speaker note:

The problem is not lack of welfare design; it is last-mile access, language, trust, and actionability.

## Slide 3: Target Users

Personas:

1. Farmer.
2. Woman-led household.
3. Street vendor / informal worker.

Each persona is represented in the product through eligibility signals, relevant scheme matches, and document checklist support.

Speaker note:

The product is designed around common beneficiary contexts rather than scheme names.

## Slide 4: Solution

User journey:

```mermaid
flowchart LR
  Profile["Simple profile"] --> Shortlist["Personalized schemes"]
  Shortlist --> Answer["Grounded answers"]
  Shortlist --> Docs["Document checklist"]
  Docs --> Apply["Ready to apply"]
```

Key points:

- 4-6 simple eligibility signals.
- Ranked recommendations.
- Source-backed follow-up answers.
- Copy/download checklist.

Speaker note:

Sahayak turns eligibility confusion into a short decision flow.

## Slide 5: Product Demo

Demo flow:

1. Choose Farmer preset.
2. Show PM-KISAN recommendation.
3. Click View documents.
4. Ask Ayushman document question.
5. Switch to Hindi and ask a housing question.
6. Show fallback for unsupported question.

Speaker note:

Highlight trust markers: official source links, verification labels, and safe fallback.

## Slide 6: Technical Architecture

Architecture components:

- Static dashboard.
- Scheme knowledge base.
- Recommendation engine.
- Retrieval layer.
- Answer composer.
- Checklist formatter.

Speaker note:

The MVP uses retrieval-grounded generation rather than an unconstrained chatbot, reducing hallucination risk.

## Slide 7: Impact Projection

Conservative impact model:

- 10,000 outreach population.
- 4,000 likely eligible for at least one scheme.
- 10-20% additional application attempts.
- 160-480 additional successful applications depending on scenario.

Example:

```text
50 additional PM-KISAN enrollments x Rs. 6,000/year = Rs. 3,00,000/year
```

Speaker note:

Even small improvements in welfare uptake can translate into meaningful entitlement access.

## Slide 8: Submission Readiness and Ask

Submission readiness:

- Functional prototype deployed on GitHub Pages.
- Source-backed 8-scheme knowledge base.
- English and Hindi Devanagari support.
- Document checklist handoff.
- Automated core and smoke tests.

Ask:

- Mentor feedback.
- NSS/NGO access for field demonstration.
- Guidance on scaling to more local schemes and channels.

Speaker note:

The prototype is ready for evaluation and field demonstration.

## Backup Slide: Evaluation Fit

| Rubric area | Sahayak response |
| --- | --- |
| Problem understanding | Targets awareness, language, documentation, and trust gaps |
| Innovation | Grounded welfare assistant with checklist handoff |
| Feasibility | Static low-cost MVP deployed on GitHub Pages |
| Impact potential | Quantified entitlement and time-saving model |
| Communication | Live demo, demo video, diagrams, and source-backed documentation |
