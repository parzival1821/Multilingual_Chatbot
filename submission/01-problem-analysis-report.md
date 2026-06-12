# Problem Analysis Report

Project: **Sahayak - Welfare Scheme Discovery Assistant**  
Track: **Track 1 - AI & Intelligent Solutions**  
Challenge: **1.1 - AI-Based Multilingual Chatbot for Welfare Scheme Awareness**  
Live demo: `https://parzival1821.github.io/Multilingual_Chatbot/`

## Executive Summary

India has a large welfare ecosystem, but eligible beneficiaries often fail to discover, understand, or complete applications for the schemes they qualify for. The official NSS challenge brief identifies awareness gaps, language barriers, low literacy, intimidating documentation, and low-bandwidth access as key bottlenecks. Sahayak addresses this by offering a low-bandwidth, multilingual assistant that asks simple eligibility questions, returns a personalized scheme shortlist, cites official sources, and generates a document checklist that can be copied or downloaded.

The MVP focuses on depth and trust rather than breadth. It covers 8 high-impact schemes and demonstrates the core product loop: profile collection, eligibility matching, grounded follow-up answers, and document handoff.

## Problem Statement

Rural and low-income users face high friction when trying to identify and apply for welfare schemes. Even when schemes exist and funds are allocated, the last-mile user may not know:

- Which schemes apply to their household.
- What eligibility conditions matter.
- Which documents are required.
- Where to apply or verify details.
- Whether the information they receive is reliable.

The challenge is not only a search problem. It is a comprehension, trust, language, and process problem.

## Context From Official Brief

The NSS Challenge 1.1 brief highlights:

- India runs more than 950 central and state welfare schemes.
- Awareness among eligible rural beneficiaries is low.
- Government portals often assume smartphone literacy and stable connectivity.
- Language barriers and documentation complexity reduce successful applications.
- A useful solution should be low-bandwidth, multilingual, grounded in official scheme data, and deployable to channels such as WhatsApp, SMS, or IVR.

## Root Causes

### 1. Information Fragmentation

Scheme details are spread across multiple portals, PDFs, FAQs, state offices, and local intermediaries. Users must know the scheme name before they can search for details.

### 2. Eligibility Confusion

Eligibility is usually described in policy language. A beneficiary thinks in terms of life context: "I am a farmer", "I do not have a gas connection", "I am a widow", or "I need help for my daughter's future." Existing portals often do not translate that context into scheme matches.

### 3. Language and Literacy Barriers

Even when Hindi is available, content may be dense, bureaucratic, or partly in English. Users need simple language, regional-language support, and short explanations.

### 4. Documentation Friction

Users may know a scheme exists but fail to apply because they do not know what documents to prepare. The checklist is often the point where awareness becomes action.

### 5. Trust and Hallucination Risk

AI systems can produce confident but incorrect answers. For welfare schemes, wrong eligibility guidance can waste time, money, and trust. A responsible assistant must cite official sources and admit when it does not know.

### 6. Low-Bandwidth Constraints

Many target users have shared phones, limited data, unstable connectivity, or low-end devices. A text-first flow with copyable/downloadable output is more practical than a heavy app.

## Stakeholders

| Stakeholder | Need |
| --- | --- |
| Rural beneficiary | Simple scheme discovery and document checklist |
| Woman-led household | Awareness of LPG, housing, social security, and girl-child support |
| Street vendor / informal worker | Credit, pension, health, and social protection guidance |
| NGO field worker | Fast beneficiary triage during outreach camps |
| NSS volunteer | A repeatable tool for community scheme-awareness drives |
| District administration | Higher uptake without creating new welfare programs |

## Target Personas

### Persona 1: Farmer

- Rural household.
- Owns cultivable land.
- Has a bank account.
- Needs income support and health protection.
- Relevant schemes: PM-KISAN, PM-JAY.

### Persona 2: Woman-led Household

- Urban low-income household.
- Adult woman, no LPG connection.
- May be widowed or guardian of a girl child.
- Relevant schemes: Ujjwala, PMAY-U, Sukanya Samriddhi, NSAP depending on profile.

### Persona 3: Street Vendor

- Urban or peri-urban informal worker.
- Has a bank account.
- Needs livelihood credit and future pension support.
- Relevant schemes: PM SVANidhi, Atal Pension Yojana, PM-JAY.

## User Needs

Users need a system that can:

1. Ask only a few simple questions.
2. Convert life context into scheme recommendations.
3. Explain why a scheme is relevant.
4. Provide document checklists in the user's language.
5. Cite official sources.
6. Avoid unsupported claims.

## Existing Alternatives and Gaps

| Existing path | Gap |
| --- | --- |
| Government scheme portals | Accurate but difficult to navigate for first-time users |
| Search engines | Require knowing scheme names and reading long pages |
| Local intermediaries | Can help, but quality and availability vary |
| Generic chatbots | Risk hallucination if not grounded in official scheme data |
| PDF awareness drives | Static, not personalized, and hard to update |

## Design Requirements Derived From Analysis

- Focus on 8-10 high-impact schemes for quality over breadth.
- Keep eligibility questions simple.
- Support at least English and Hindi.
- Provide source-backed answers.
- Generate copyable/downloadable document checklists.
- Use a low-bandwidth static web implementation for MVP.
- Add a fallback for unsupported questions.
- Structure the code so additional schemes and languages can be added later.

## Success Criteria

| Criteria | MVP target |
| --- | --- |
| Scheme coverage | 8 high-impact schemes |
| Language support | English + Hindi Devanagari |
| Completion flow | User can go from profile to shortlist to checklist |
| Answer safety | Unsupported questions return fallback |
| Source trust | Scheme cards and answers include official source links |
| Performance | Static site loads quickly on low-end connections |
| Repeatability | Tests validate recommendation and retrieval behavior |

## Conclusion

Sahayak reframes welfare awareness as a last-mile product problem. The core insight is that beneficiaries do not need a database dump; they need a short, trusted, language-aware decision flow. A focused, grounded, low-bandwidth assistant can help users move from uncertainty to action by identifying relevant schemes and preparing the documents needed to apply.

