# Demo Script

Hi, this is Sahayak, a bilingual welfare scheme discovery assistant built for NSS Open Projects 2026, Track 1.1: AI-Based Multilingual Chatbot for Welfare Scheme Awareness.

The problem I am solving is that many eligible citizens miss out on welfare schemes because information is scattered, eligibility rules are hard to understand, and people often do not know which documents they need before applying.

Sahayak converts that confusion into a simple guided experience. A user enters a short eligibility profile with basic signals like area, occupation, gender, income category, land ownership, housing status, LPG connection, bank account, and special categories. Based on this profile, the app recommends relevant welfare schemes and explains why each scheme may match.

For example, for a rural farmer with cultivable land and a bank account, Sahayak ranks PM-KISAN as a strong match. It also shows other relevant support options such as Ayushman Bharat PM-JAY where applicable. Each recommendation includes match reasons and an official source link so the user can verify final eligibility before applying.

The assistant is not an open-ended chatbot that invents answers. It uses retrieval-grounded logic over a curated welfare scheme knowledge base. That means follow-up answers are based on the schemes, eligibility notes, document lists, benefits, and official source links stored in the project.

One important feature is the document checklist. After a user identifies a scheme, Sahayak shows the documents they should prepare, such as Aadhaar, bank account details, land records, mobile number, KYC forms, or scheme-specific certificates. The checklist can be copied or downloaded as plain text, which makes it useful for low-bandwidth settings, WhatsApp sharing, field volunteers, or offline follow-up.

The app also supports Hindi in Devanagari. The interface, scheme names, recommendation summaries, labels, prompt examples, and checklist content are localized so the experience is not limited to English-speaking users.

For a woman-led low-income household, Sahayak can surface schemes like Pradhan Mantri Ujjwala Yojana for LPG support, PMAY Urban for housing support, and Sukanya Samriddhi Account for a girl child. For an urban street vendor, it can recommend PM SVANidhi for working capital credit and Atal Pension Yojana as a pension option.

The system also handles uncertainty safely. If a user asks about a topic that is outside the current knowledge base, Sahayak gives a fallback response instead of hallucinating scheme details. This is important because welfare guidance affects real decisions, so the product prioritizes source-backed answers and official verification.

Technically, this is a static web app deployed on GitHub Pages. The recommendation, retrieval, profile inference, checklist formatting, bilingual labels, and fallback logic are implemented in JavaScript. The project includes automated tests for recommendation ranking, Hindi queries, document checklist generation, source grounding, and safe fallback behavior.

The current prototype includes eight high-impact welfare schemes, English and Hindi support, a responsive dashboard, source-backed recommendation cards, a grounded follow-up assistant, and copyable or downloadable document checklists.

In short, Sahayak is designed to help beneficiaries and NSS volunteers move from “I do not know which scheme applies to me” to “I have a verified shortlist and I know what documents to prepare.”
