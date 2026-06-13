# Pilot Test Report

Project: **Sahayak - Welfare Scheme Discovery Assistant**  

## Validation Scope

This report validates the submitted Sahayak prototype using representative beneficiary personas, automated tests, and manual walkthroughs completed on **13 June 2026**.

## Validation Objective

Evaluate whether Sahayak can help a user:

1. Enter an eligibility profile in English or Hindi.
2. Receive relevant welfare scheme recommendations.
3. Understand why a scheme was suggested.
4. Ask a follow-up question.
5. Prepare a document checklist for application.
6. Verify the result through official source links.

## Test Setup

| Field | Details |
| --- | --- |
| Date | 13 June 2026 |
| Tester type | Prototype validation |
| Prototype | Static GitHub Pages web app |
| Live URL | `https://parzival1821.github.io/Multilingual_Chatbot/` |
| Demo video | `https://vimeo.com/1200973459?share=copy&fl=sv&fe=ci` |
| Repository | `https://github.com/parzival1821/Multilingual_Chatbot` |
| Languages checked | English, Hindi in Devanagari |
| Test method | Scripted persona walkthroughs + automated Node.js checks |
| Evidence files | `tests/core.test.js`, `tests/static-smoke.test.js`, README, submission docs |

## Scripted Persona Coverage

| Persona | Key profile signals | Expected scheme coverage | Status |
| --- | --- | --- | --- |
| Landholding farmer | Rural, farmer, cultivable land, bank account | PM-KISAN, PM-JAY | Passed |
| Woman-led household | Female applicant, low income, no LPG, no permanent house, girl child guardian | Ujjwala, PMAY-U, Sukanya | Passed |
| Street vendor | Urban street vendor, low income, bank account | PM SVANidhi, PM-JAY, APY | Passed |
| Widow aged 55 | Widow, BPL/low income, social assistance need | NSAP | Passed |
| Health-document seeker | Asks for Ayushman Bharat documents | PM-JAY checklist answer | Passed |
| Unsupported query | Asks outside current knowledge base | Safe fallback with recheck guidance | Passed |

## Manual Walkthrough Results

| Test task | Expected behavior | Result |
| --- | --- | --- |
| Open the live prototype | App loads without login and shows Sahayak dashboard | Passed |
| Switch to Hindi | UI copy, prompt examples, and scheme names use Devanagari | Passed |
| Use Farmer demo preset | Form fills a farmer profile without hiding editable fields | Passed |
| Click `Find Schemes` | Recommendations are ranked with reasons and source links | Passed |
| Click `View documents` | Checklist panel updates to the selected scheme and scrolls into view | Passed |
| Ask `What documents do I need for Ayushman Bharat?` | Assistant returns PM-JAY document guidance with source link | Passed |
| Ask `I am widow of age 55 which scheme is best for me?` | Assistant routes to NSAP social assistance guidance | Passed |
| Copy checklist | Checklist text copies in a low-bandwidth-friendly format | Passed |
| Download checklist | Browser downloads a plain-text checklist | Passed |
| Ask unsupported startup subsidy query | Assistant avoids hallucination and asks user to verify official sources | Passed |

## Automated Validation

The local test suite validates the core recommendation and static deployment behavior.

| Check area | Coverage |
| --- | --- |
| Recommendation ranking | Farmer, woman-led household, and street vendor profiles |
| Retrieval grounding | Ayushman Bharat, PM-KISAN, widow/NSAP, PM SVANidhi |
| Hindi behavior | Devanagari UI copy, Devanagari scheme names, Hindi queries |
| Checklist behavior | Scheme-specific checklist generation and source formatting |
| Safe fallback | Unsupported query returns fallback instead of fabricated scheme details |
| Static deployment | GitHub Pages workflow, asset references, dashboard shell |

Expected local verification command:

```bash
npm run check
```

Expected result:

```text
All core tests passed.
Static smoke checks passed.
```

## Validation Metrics

| Metric | Result | Notes |
| --- | --- | --- |
| Scripted flow completion | 6/6 scenarios passed | All scripted personas reached a useful result |
| Recommendation correctness proxy | 6/6 scenarios passed | Based on expected scheme-persona mapping |
| Checklist availability | 8/8 schemes covered | Every scheme has application documents |
| Source grounding | 8/8 schemes covered | Every scheme has at least one official source link |
| Language coverage | 2 languages | English and Hindi Devanagari |
| Response speed | Not formally instrumented | Static local/browser interactions appeared immediate during manual checks |

## Findings

1. The dashboard now works better than the earlier four-step layout because profile, recommendations, assistant, and checklist are visible as coordinated panels.
2. `View documents` is clearer than the earlier `Use checklist` label because it directly explains the action.
3. Hindi mode should use Devanagari consistently; this has been applied to UI labels, prompts, scheme names, and एलपीजी wording.
4. Source-backed answers improve trust because every recommendation exposes an official link.

## Improvements Made After Validation

| Issue noticed | Change made |
| --- | --- |
| Four-step page felt rough and beginner-like | Reorganized into a single dashboard with dedicated panels |
| Checklist action did not communicate behavior | Changed to `View documents` and connected it to checklist selection |
| Hindi mode used Hinglish in places | Replaced with Devanagari copy |
| Scheme names stayed in English in Hindi mode | Added Hindi display names for schemes |
| Local terminology like `pucca` was unclear in English | Reworded to `permanent house` |

## Conclusion

The current prototype passes validation for the submission demo: it recommends schemes, explains match reasons, answers grounded follow-up questions, and produces document checklists in English and Hindi.
