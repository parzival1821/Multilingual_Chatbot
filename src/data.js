(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  root.SahayakData = data;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const schemes = [
    {
      id: "pm-kisan",
      name: "PM-KISAN Samman Nidhi",
      category: ["agriculture", "income_support"],
      verificationStatus: "verified",
      summary:
        "Income support for eligible landholding farmer families, paid directly into the beneficiary bank account.",
      hindiSummary:
        "Yogya bhoomi-dharak kisan parivar ko har saal Rs. 6,000 ki aarthik sahayata teen kiston mein milti hai.",
      targetBeneficiary: "Landholding farmer families with cultivable land in their name.",
      benefits: ["Rs. 6,000 per year", "Three instalments of Rs. 2,000", "Direct Benefit Transfer"],
      eligibility: [
        "Applicant family should be a landholding farmer family.",
        "Cultivable land should be recorded in the farmer/family name.",
        "State/UT governments identify eligible farmer families using land records."
      ],
      exclusions: [
        "Institutional landholders",
        "Income tax payers",
        "Higher economic status groups listed by the scheme"
      ],
      documents: ["Aadhaar number", "Bank account details", "Land record details", "Mobile number", "eKYC"],
      applicationPath: ["PM-KISAN portal", "Common Service Centre", "State/UT agriculture department"],
      sourceUrls: ["https://pmkisan.gov.in/", "https://pmkisan.gov.in/Documents/RevisedFAQ.pdf"],
      tags: ["farmer", "agriculture", "landholder", "rural", "income support", "dbt", "kisan"],
      searchText: "kisan farmer land agriculture kheti fasal paisa dbt income support"
    },
    {
      id: "pmjay",
      name: "Ayushman Bharat PM-JAY",
      category: ["health", "insurance"],
      verificationStatus: "verified",
      summary:
        "Cashless health cover for eligible poor and vulnerable families at empanelled hospitals.",
      hindiSummary:
        "Yogya gareeb aur kamzor parivaron ko listed hospital treatment ke liye har saal Rs. 5 lakh tak ka cashless cover milta hai.",
      targetBeneficiary: "Poor and vulnerable families identified through official beneficiary criteria.",
      benefits: [
        "Health cover up to Rs. 5 lakh per family per year",
        "Cashless treatment at empanelled hospitals",
        "No cap on family size, age, or gender",
        "Pre-existing diseases covered from day one"
      ],
      eligibility: [
        "Eligibility is based on official beneficiary databases and deprivation/occupation criteria.",
        "Rural signals include landless casual labour, SC/ST household, disability with no able-bodied adult, and other deprivation categories.",
        "Urban signals include street vendors, domestic workers, construction workers, sanitation workers, transport workers, and similar vulnerable occupations."
      ],
      exclusions: [],
      documents: ["Aadhaar or identity document", "Ration card or family ID where accepted", "Mobile number", "Occupation/household details"],
      applicationPath: ["PM-JAY beneficiary portal", "Call 14555", "Common Service Centre", "Empanelled hospital help desk"],
      sourceUrls: ["https://pmjay.gov.in/about/pmjay"],
      tags: ["health", "hospital", "insurance", "cashless treatment", "poor household", "medical", "ayushman"],
      searchText: "ayushman health hospital medical insurance treatment bimari ilaj pmjay card"
    },
    {
      id: "pmuy",
      name: "Pradhan Mantri Ujjwala Yojana",
      category: ["clean_fuel", "women"],
      verificationStatus: "verified",
      summary:
        "LPG connection support for eligible adult women from poor households without an LPG connection.",
      hindiSummary:
        "18 saal ya usse adhik umra ki gareeb parivar ki mahila ko LPG connection mil sakta hai, agar ghar mein pehle se LPG connection nahi hai.",
      targetBeneficiary: "Adult women from poor households without an existing household LPG connection.",
      benefits: [
        "Deposit-free LPG connection",
        "Cash assistance for new connection",
        "First LPG refill and stove/hotplate support by Oil Marketing Companies"
      ],
      eligibility: [
        "Applicant should be a woman aged 18 years or above.",
        "Household should not already have an LPG connection.",
        "Applicant should belong to a poor household based on prescribed criteria/declaration."
      ],
      exclusions: ["Household already has an LPG connection"],
      documents: [
        "KYC application form",
        "Aadhaar copy",
        "Address proof if current address differs from Aadhaar",
        "Ration card or state family composition document",
        "Aadhaar copies of adult family members",
        "Bank account details",
        "Deprivation declaration"
      ],
      applicationPath: ["PMUY portal", "Nearest LPG distributor", "Oil Marketing Company portal"],
      sourceUrls: ["https://www.pmuy.gov.in/"],
      tags: ["woman", "lpg", "gas", "cooking fuel", "poor household", "clean fuel", "ujjwala"],
      searchText: "ujjwala lpg gas cylinder chulha cooking fuel mahila woman"
    },
    {
      id: "pmay-u",
      name: "Pradhan Mantri Awas Yojana - Urban 2.0",
      category: ["housing", "urban"],
      verificationStatus: "verified",
      summary:
        "Urban housing assistance for eligible EWS, LIG, and MIG families without a permanent house in India.",
      hindiSummary:
        "Shahri EWS/LIG/MIG parivar ko ghar banane, kharidne ya kiraye ke affordable housing support ke liye sahayata mil sakti hai.",
      targetBeneficiary: "Urban EWS, LIG, and MIG families without a permanent house anywhere in India.",
      benefits: [
        "Support through Beneficiary Led Construction",
        "Affordable Housing in Partnership",
        "Affordable Rental Housing",
        "Interest Subsidy Scheme"
      ],
      eligibility: [
        "Family should belong to EWS, LIG, or MIG segment.",
        "Family should live in an urban area covered by the scheme.",
        "Applicant or family member should not own a permanent house anywhere in India.",
        "Family should not have received central/state/local government housing benefit in the last 20 years."
      ],
      exclusions: ["Already owns a permanent house", "Received housing scheme benefit recently as per scheme rules"],
      documents: ["Aadhaar or identity proof", "Address proof", "Income proof or declaration", "Family details", "Proof of not owning a permanent house", "Bank account details"],
      applicationPath: ["PMAY-U 2.0 portal", "Urban Local Body", "State/UT nodal agency", "Primary lending institution for interest subsidy"],
      sourceUrls: ["https://pmay-urban.gov.in/", "https://pmaymis.gov.in/PMAYMIS2_2024/PmayDefault.aspx"],
      tags: ["housing", "urban", "home", "awas", "rent", "ews", "lig", "mig", "permanent house", "pucca house"],
      searchText: "awas ghar house home housing rent pucca makaan urban ews lig mig"
    },
    {
      id: "nsap",
      name: "National Social Assistance Programme",
      category: ["pension", "social_assistance"],
      verificationStatus: "verified",
      summary:
        "Social assistance for BPL persons or households facing old age, widowhood, disability, or death of the primary breadwinner.",
      hindiSummary:
        "Gareeb parivar ke buzurg, vidhwa, divyang vyakti aur primary breadwinner ki death ke baad parivar ko pension ya sahayata mil sakti hai.",
      targetBeneficiary: "BPL persons or households meeting scheme-specific age, widowhood, disability, or family benefit criteria.",
      benefits: [
        "Old age pension for eligible BPL seniors",
        "Widow pension for eligible BPL widows",
        "Disability pension for eligible BPL persons with severe/multiple disabilities",
        "Family benefit assistance after death of primary breadwinner",
        "Food grain support under Annapurna for eligible uncovered senior citizens"
      ],
      eligibility: [
        "BPL status is generally required.",
        "Old age pension applies from age 60 onward.",
        "Widow pension applies to eligible widows in the notified age group.",
        "Disability pension applies to eligible persons with severe and multiple disabilities."
      ],
      exclusions: [],
      documents: ["Age proof", "BPL proof or eligibility certificate", "Aadhaar", "Bank/post office account details", "Widow certificate or spouse death certificate where needed", "Disability certificate where needed"],
      applicationPath: ["Gram Panchayat or municipality", "State social welfare portal", "Block or district office", "NSAP/Sambal app where available"],
      sourceUrls: ["https://nsap.nic.in/", "https://nsap.nic.in/circular.do?method=aboutus"],
      tags: ["old age", "pension", "widow", "disability", "bpl", "senior citizen", "social assistance"],
      searchText: "pension widow vidhwa old age buzurg disability divyang bpl death benefit"
    },
    {
      id: "pmsvanidhi",
      name: "PM Street Vendor's AtmaNirbhar Nidhi",
      category: ["livelihood", "credit"],
      verificationStatus: "official_source_recheck_needed",
      summary:
        "Working capital credit support for eligible urban and peri-urban street vendors.",
      hindiSummary:
        "Street vendors ko chhote vyapar ke liye collateral-free working capital loan aur repayment incentives mil sakte hain.",
      targetBeneficiary: "Street vendors identified by Urban Local Bodies or Town Vending Committees.",
      benefits: ["Collateral-free working capital loan", "Higher subsequent loans after timely repayment", "Interest subsidy and digital transaction incentives where applicable"],
      eligibility: [
        "Applicant should be a street vendor.",
        "Vendor should be identified by ULB/Town Vending Committee survey or have a certificate, ID card, or letter of recommendation."
      ],
      exclusions: [],
      documents: ["Aadhaar or identity proof", "Mobile number", "Bank account details", "Certificate of Vending, vendor ID card, or Letter of Recommendation"],
      applicationPath: ["PM SVANidhi portal", "Urban Local Body", "Common Service Centre", "Lending institution or bank"],
      sourceUrls: ["https://pmsvanidhi.mohua.gov.in/"],
      tags: ["street vendor", "hawker", "urban", "working capital", "loan", "small business"],
      searchText: "street vendor hawker loan pmsvanidhi dukaan thela working capital"
    },
    {
      id: "apy",
      name: "Atal Pension Yojana",
      category: ["pension", "financial_inclusion"],
      verificationStatus: "official_source_recheck_needed",
      summary:
        "Pension scheme mainly for unorganised-sector workers who contribute regularly and receive pension after age 60.",
      hindiSummary:
        "Unorganised sector ke workers contribution karke 60 saal ke baad monthly pension paa sakte hain.",
      targetBeneficiary: "Working-age Indian citizens, especially unorganised-sector workers, with a bank account.",
      benefits: ["Guaranteed pension after age 60", "Subscriber-selected pension slab", "Auto-debit contributions", "Spouse and nominee benefits as per rules"],
      eligibility: [
        "Age should generally be between 18 and 40 years at joining.",
        "Applicant should have a savings bank or post office savings bank account.",
        "Income tax payer restriction should be rechecked before final application."
      ],
      exclusions: ["Latest income tax payer restriction should be verified before final guidance"],
      documents: ["Bank account details", "Aadhaar", "Mobile number", "Nominee details", "Spouse details if applicable", "Date of birth proof"],
      applicationPath: ["Bank branch", "Post office or bank offering APY", "Net banking or banking app where available"],
      sourceUrls: ["https://www.jansuraksha.gov.in/", "https://www.pfrda.org.in/"],
      tags: ["pension", "retirement", "unorganised worker", "age 18-40", "bank account"],
      searchText: "atal pension yojana apy retirement budhapa informal worker bank"
    },
    {
      id: "ssa",
      name: "Sukanya Samriddhi Account",
      category: ["savings", "girl_child"],
      verificationStatus: "official_source_recheck_needed",
      summary:
        "Government-backed savings account for a girl child, opened by a parent or legal guardian.",
      hindiSummary:
        "Ladki ke bhavishya, education aur marriage ke liye government-backed savings account parent ya guardian khol sakte hain.",
      targetBeneficiary: "Girl child, with account opened by parent or legal guardian.",
      benefits: ["Government-backed savings account", "Interest rate notified under small savings rules", "Partial withdrawal for higher education under scheme rules", "Tax benefits may apply under current rules"],
      eligibility: [
        "Account is for a girl child.",
        "Girl child should generally be below 10 years at account opening.",
        "Parent or legal guardian opens the account.",
        "Usually one account per girl child and maximum two girl-child accounts per family, with exception rules."
      ],
      exclusions: [],
      documents: ["Birth certificate of girl child", "Identity proof of parent/guardian", "Address proof of parent/guardian", "Initial deposit amount", "Account opening form"],
      applicationPath: ["Post office", "Authorised bank branch"],
      sourceUrls: ["https://www.indiapost.gov.in/", "https://www.indiapost.gov.in/banking-services/savings"],
      tags: ["girl child", "savings", "education", "marriage", "parent", "guardian", "sukanya"],
      searchText: "sukanya girl child ladki beti savings education marriage account"
    }
  ];

  const labels = {
    en: {
      eligible: "Strong match",
      possible: "Possible match",
      low: "Explore",
      fallback:
        "I could not find a grounded answer in the current prototype knowledge base. This demo currently covers only the listed schemes.",
      disclaimer: "Please verify final eligibility on the official portal before applying.",
      verified: "Verified official source",
      recheck: "Official source, recheck latest rules",
      recheckNote: "This scheme entry uses an official source, but latest eligibility and amount details should be rechecked.",
      strongProfile: "This profile is a strong match.",
      possibleProfile: "This profile may be a match.",
      limitedProfile: "This profile has limited matching signals.",
      reasonPrefix: "Reason",
      documentsPrefix: "Documents to prepare",
      benefitsPrefix: "Key benefits"
    },
    hi: {
      eligible: "Majboot match",
      possible: "Sambhavit match",
      low: "Jankari dekhein",
      fallback:
        "Is prototype knowledge base mein iska pakka jawab nahi mila. Demo abhi sirf listed schemes cover karta hai.",
      disclaimer: "Apply karne se pehle official portal par final eligibility zaroor verify karein.",
      verified: "Official source verified",
      recheck: "Official source, latest rules recheck karein",
      recheckNote: "Is scheme ka official source listed hai, lekin latest eligibility aur amount details recheck karni chahiye.",
      strongProfile: "Yeh profile strong match lagti hai.",
      possibleProfile: "Yeh profile match ho sakti hai.",
      limitedProfile: "Is profile mein limited matching signals hain.",
      reasonPrefix: "Karan",
      documentsPrefix: "Documents taiyaar rakhein",
      benefitsPrefix: "Main benefits"
    }
  };

  return { schemes, labels };
});
