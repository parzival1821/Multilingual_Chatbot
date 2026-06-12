# Visual Diagrams Appendix

Project: **Sahayak - Welfare Scheme Discovery Assistant**

This appendix contains diagram-ready visuals for the README, report, and final presentation. The diagrams are written in Mermaid so they render on GitHub and can be recreated in Google Docs or slides if needed.

## System Architecture

```mermaid
flowchart LR
  User["Beneficiary / NSS volunteer"] --> UI["Sahayak web dashboard"]
  UI --> Profile["Eligibility profile form"]
  UI --> Assistant["Follow-up assistant"]
  UI --> Checklist["Document checklist panel"]

  Profile --> Engine["Recommendation engine<br/>src/core.js"]
  Assistant --> Retrieval["Grounded retrieval<br/>scheme keyword matching"]
  Checklist --> Docs["Checklist formatter"]

  KB["Curated scheme knowledge base<br/>8 schemes, eligibility, documents, sources<br/>src/data.js"] --> Engine
  KB --> Retrieval
  KB --> Docs

  Engine --> Results["Ranked recommendations<br/>reasons + match labels"]
  Retrieval --> Answer["Grounded answer<br/>source citation"]
  Docs --> Handoff["Copy / download checklist"]

  Results --> UI
  Answer --> UI
  Handoff --> User
```

## Beneficiary Journey

```mermaid
flowchart TD
  Start["Open Sahayak"] --> Language["Choose English or Hindi"]
  Language --> Profile["Fill eligibility profile<br/>or use a demo preset"]
  Profile --> Recommend["Find schemes"]
  Recommend --> Compare["Compare ranked recommendations"]
  Compare --> Reason["Read match reasons and official source links"]
  Reason --> Documents["View documents for selected scheme"]
  Documents --> Checklist["Copy or download checklist"]
  Reason --> Question["Ask a follow-up question"]
  Question --> Grounded["Receive grounded answer with citation"]
  Checklist --> Apply["Apply through official portal / local office"]
  Grounded --> Apply
```

## Persona-To-Scheme Coverage

```mermaid
flowchart LR
  Farmer["Landholding farmer<br/>rural, land, bank"] --> PMK["PM-KISAN<br/>income support"]
  Farmer --> PMJAY["PM-JAY<br/>health cover"]

  Woman["Woman-led household<br/>low income, no LPG, no house"] --> PMUY["Ujjwala<br/>LPG connection"]
  Woman --> PMAY["PMAY-U<br/>urban housing"]
  Woman --> SSA["Sukanya<br/>girl-child savings"]

  Vendor["Street vendor<br/>urban, bank account"] --> SV["PM SVANidhi<br/>working capital"]
  Vendor --> APY["APY<br/>pension option"]
  Vendor --> PMJAY

  Widow["Widow / social assistance case<br/>BPL or low income"] --> NSAP["NSAP<br/>widow, old age, disability support"]
```

## Grounded Answer Flow

```mermaid
sequenceDiagram
  participant U as User
  participant UI as Sahayak UI
  participant Core as Retrieval + Scoring
  participant KB as Scheme Knowledge Base
  participant Source as Official Source Link

  U->>UI: Ask follow-up question
  UI->>Core: Send question + current profile
  Core->>KB: Match query against scheme text and tags
  KB-->>Core: Return best scheme candidates
  Core->>Core: Combine retrieval score with profile fit
  Core-->>UI: Answer with reason, documents, and citation
  UI-->>U: Show grounded answer
  U->>Source: Verify final eligibility before applying
```

## Low-Bandwidth Handoff Flow

```mermaid
flowchart TD
  Rec["Recommendation card"] --> View["Click View documents"]
  View --> Select["Checklist panel selects same scheme"]
  Select --> Items["Show required documents"]
  Items --> Copy["Copy checklist as plain text"]
  Items --> Download["Download checklist as .txt"]
  Copy --> Offline["Share through WhatsApp, SMS, print, or field notes"]
  Download --> Offline
  Offline --> Office["Beneficiary visits CSC, local office, bank, or portal"]
```

## Submission Deliverable Map

```mermaid
flowchart LR
  App["Functional prototype"] --> Demo["Live GitHub Pages demo"]
  App --> Tests["Automated checks"]

  Docs["Submission documents"] --> Problem["Problem analysis"]
  Docs --> Framework["Solution framework"]
  Docs --> Plan["Implementation plan"]
  Docs --> Impact["Impact projection"]
  Docs --> Pilot["Internal validation report"]
  Docs --> Deck["Presentation outline"]
  Docs --> Diagrams["Visual diagrams appendix"]

  Demo --> Submit["NSS submission link"]
  Tests --> Submit
  Docs --> Submit
```
