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
        "योग्य भूमिधारक किसान परिवारों को हर साल Rs. 6,000 की आर्थिक सहायता तीन किस्तों में मिलती है.",
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
      searchText: "kisan farmer land agriculture kheti fasal paisa dbt income support किसान खेती जमीन फसल पैसा आय सहायता"
    },
    {
      id: "pmjay",
      name: "Ayushman Bharat PM-JAY",
      category: ["health", "insurance"],
      verificationStatus: "verified",
      summary:
        "Cashless health cover for eligible poor and vulnerable families at empanelled hospitals.",
      hindiSummary:
        "योग्य गरीब और कमजोर परिवारों को सूचीबद्ध अस्पतालों में इलाज के लिए हर साल Rs. 5 लाख तक का कैशलेस कवर मिलता है.",
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
      searchText: "ayushman health hospital medical insurance treatment bimari ilaj pmjay card आयुष्मान स्वास्थ्य अस्पताल इलाज बीमारी कार्ड"
    },
    {
      id: "pmuy",
      name: "Pradhan Mantri Ujjwala Yojana",
      category: ["clean_fuel", "women"],
      verificationStatus: "verified",
      summary:
        "LPG connection support for eligible adult women from poor households without an LPG connection.",
      hindiSummary:
        "गरीब परिवार की 18 वर्ष या उससे अधिक आयु की महिला को LPG कनेक्शन मिल सकता है, अगर घर में पहले से LPG कनेक्शन नहीं है.",
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
      searchText: "ujjwala lpg gas cylinder chulha cooking fuel mahila woman उज्ज्वला गैस सिलेंडर चूल्हा महिला"
    },
    {
      id: "pmay-u",
      name: "Pradhan Mantri Awas Yojana - Urban 2.0",
      category: ["housing", "urban"],
      verificationStatus: "verified",
      summary:
        "Urban housing assistance for eligible EWS, LIG, and MIG families without a permanent house in India.",
      hindiSummary:
        "शहरी EWS/LIG/MIG परिवारों को घर बनाने, खरीदने या किफायती आवास सहायता के लिए मदद मिल सकती है.",
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
      searchText: "awas ghar house home housing rent pucca makaan urban ews lig mig आवास घर मकान शहरी किराया"
    },
    {
      id: "nsap",
      name: "National Social Assistance Programme",
      category: ["pension", "social_assistance"],
      verificationStatus: "verified",
      summary:
        "Social assistance for BPL persons or households facing old age, widowhood, disability, or death of the primary breadwinner.",
      hindiSummary:
        "गरीब परिवारों के बुजुर्ग, विधवा, दिव्यांग व्यक्ति और मुख्य कमाने वाले सदस्य की मृत्यु के बाद परिवार को पेंशन या सहायता मिल सकती है.",
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
      searchText: "pension widow vidhwa old age buzurg disability divyang bpl death benefit पेंशन विधवा बुजुर्ग दिव्यांग मृत्यु सहायता"
    },
    {
      id: "pmsvanidhi",
      name: "PM Street Vendor's AtmaNirbhar Nidhi",
      category: ["livelihood", "credit"],
      verificationStatus: "official_source_recheck_needed",
      summary:
        "Working capital credit support for eligible urban and peri-urban street vendors.",
      hindiSummary:
        "स्ट्रीट वेंडर को छोटे व्यापार के लिए बिना गारंटी वर्किंग कैपिटल लोन और रीपेमेंट प्रोत्साहन मिल सकते हैं.",
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
      searchText: "street vendor hawker loan pmsvanidhi dukaan thela working capital स्ट्रीट वेंडर ठेला दुकान लोन"
    },
    {
      id: "apy",
      name: "Atal Pension Yojana",
      category: ["pension", "financial_inclusion"],
      verificationStatus: "official_source_recheck_needed",
      summary:
        "Pension scheme mainly for unorganised-sector workers who contribute regularly and receive pension after age 60.",
      hindiSummary:
        "असंगठित क्षेत्र के कामगार नियमित योगदान करके 60 वर्ष के बाद मासिक पेंशन पा सकते हैं.",
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
      searchText: "atal pension yojana apy retirement budhapa informal worker bank अटल पेंशन रिटायरमेंट असंगठित कामगार बैंक"
    },
    {
      id: "ssa",
      name: "Sukanya Samriddhi Account",
      category: ["savings", "girl_child"],
      verificationStatus: "official_source_recheck_needed",
      summary:
        "Government-backed savings account for a girl child, opened by a parent or legal guardian.",
      hindiSummary:
        "बालिका के भविष्य, शिक्षा और विवाह के लिए माता-पिता या अभिभावक सरकारी समर्थित बचत खाता खोल सकते हैं.",
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
      searchText: "sukanya girl child ladki beti savings education marriage account सुकन्या बालिका बेटी बचत शिक्षा विवाह खाता"
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
      eligible: "मजबूत मिलान",
      possible: "संभावित मिलान",
      low: "जानकारी देखें",
      fallback:
        "इस प्रोटोटाइप नॉलेज बेस में इसका भरोसेमंद जवाब नहीं मिला. यह डेमो अभी सिर्फ सूचीबद्ध योजनाओं को कवर करता है.",
      disclaimer: "आवेदन करने से पहले आधिकारिक पोर्टल पर अंतिम पात्रता जरूर जांचें.",
      verified: "सत्यापित आधिकारिक स्रोत",
      recheck: "आधिकारिक स्रोत, ताजा नियम फिर जांचें",
      recheckNote: "इस योजना का आधिकारिक स्रोत जोड़ा गया है, लेकिन ताजा पात्रता और राशि विवरण फिर से जांचने चाहिए.",
      strongProfile: "यह प्रोफ़ाइल मजबूत मिलान लगती है.",
      possibleProfile: "यह प्रोफ़ाइल मिल सकती है.",
      limitedProfile: "इस प्रोफ़ाइल में सीमित मिलान संकेत हैं.",
      reasonPrefix: "कारण",
      documentsPrefix: "तैयार रखने वाले दस्तावेज",
      benefitsPrefix: "मुख्य लाभ",
      reasons: {
        "The user is a farmer.": "उपयोगकर्ता किसान है.",
        "The household has cultivable land in its name.": "परिवार के नाम खेती योग्य जमीन है.",
        "The user is in a rural area.": "उपयोगकर्ता ग्रामीण क्षेत्र में है.",
        "The household is low income/BPL/EWS.": "परिवार कम आय/BPL/EWS वर्ग में है.",
        "The occupation is one of the vulnerable urban/informal worker categories.": "रोजगार शहरी/असंगठित कमजोर कामगार श्रेणी में आता है.",
        "Disability can be an important vulnerability signal.": "दिव्यांगता एक महत्वपूर्ण संवेदनशीलता संकेत हो सकती है.",
        "The applicant is an adult woman.": "आवेदक वयस्क महिला है.",
        "The household does not already have an LPG connection.": "परिवार के पास पहले से LPG कनेक्शन नहीं है.",
        "The household is in an urban area.": "परिवार शहरी क्षेत्र में है.",
        "The household does not already have a permanent house.": "परिवार के पास पहले से स्थायी घर नहीं है.",
        "The income category fits the EWS/LIG/MIG style targeting.": "आय वर्ग EWS/LIG/MIG लक्षित श्रेणी से मेल खाता है.",
        "NSAP generally targets BPL persons or households.": "NSAP आम तौर पर BPL व्यक्तियों या परिवारों को लक्षित करता है.",
        "The user is a senior citizen.": "उपयोगकर्ता वरिष्ठ नागरिक है.",
        "The user is marked as widowed.": "उपयोगकर्ता विधवा श्रेणी में है.",
        "The user is marked as a person with disability.": "उपयोगकर्ता दिव्यांग व्यक्ति श्रेणी में है.",
        "The user is a street vendor.": "उपयोगकर्ता स्ट्रीट वेंडर है.",
        "The scheme is focused on urban/peri-urban vendors.": "योजना शहरी/परि-शहरी वेंडरों पर केंद्रित है.",
        "The user is in the usual APY joining age range.": "उपयोगकर्ता APY में जुड़ने की सामान्य आयु सीमा में है.",
        "The user has a bank account for contributions.": "योगदान के लिए उपयोगकर्ता के पास बैंक खाता है.",
        "The user works in an informal/unorganised occupation.": "उपयोगकर्ता असंगठित रोजगार में काम करता है.",
        "The user is a parent/guardian of a girl child.": "उपयोगकर्ता बालिका का माता-पिता/अभिभावक है.",
        "The profile has limited direct signals for this scheme.": "इस योजना के लिए प्रोफ़ाइल में सीमित सीधे संकेत हैं."
      },
      documents: {
        "Aadhaar number": "आधार नंबर",
        "Bank account details": "बैंक खाता विवरण",
        "Land record details": "भूमि रिकॉर्ड विवरण",
        "Mobile number": "मोबाइल नंबर",
        "eKYC": "eKYC",
        "Aadhaar or identity document": "आधार या पहचान दस्तावेज",
        "Ration card or family ID where accepted": "जहां मान्य हो राशन कार्ड या परिवार ID",
        "Occupation/household details": "रोजगार/परिवार विवरण",
        "KYC application form": "KYC आवेदन फॉर्म",
        "Aadhaar copy": "आधार कॉपी",
        "Address proof if current address differs from Aadhaar": "अगर मौजूदा पता आधार से अलग है तो पता प्रमाण",
        "Ration card or state family composition document": "राशन कार्ड या राज्य परिवार संरचना दस्तावेज",
        "Aadhaar copies of adult family members": "वयस्क परिवार सदस्यों की आधार कॉपी",
        "Deprivation declaration": "वंचना घोषणा",
        "Aadhaar or identity proof": "आधार या पहचान प्रमाण",
        "Address proof": "पता प्रमाण",
        "Income proof or declaration": "आय प्रमाण या घोषणा",
        "Family details": "परिवार विवरण",
        "Proof of not owning a permanent house": "स्थायी घर न होने का प्रमाण",
        "Age proof": "आयु प्रमाण",
        "BPL proof or eligibility certificate": "BPL प्रमाण या पात्रता प्रमाणपत्र",
        "Aadhaar": "आधार",
        "Bank/post office account details": "बैंक/डाकघर खाता विवरण",
        "Widow certificate or spouse death certificate where needed": "जहां जरूरी हो विधवा प्रमाणपत्र या पति/पत्नी मृत्यु प्रमाणपत्र",
        "Disability certificate where needed": "जहां जरूरी हो दिव्यांगता प्रमाणपत्र",
        "Certificate of Vending, vendor ID card, or Letter of Recommendation": "वेंडिंग प्रमाणपत्र, वेंडर ID कार्ड या सिफारिश पत्र",
        "Nominee details": "नामांकित व्यक्ति का विवरण",
        "Spouse details if applicable": "यदि लागू हो तो पति/पत्नी का विवरण",
        "Date of birth proof": "जन्म तिथि प्रमाण",
        "Birth certificate of girl child": "बालिका का जन्म प्रमाणपत्र",
        "Identity proof of parent/guardian": "माता-पिता/अभिभावक का पहचान प्रमाण",
        "Address proof of parent/guardian": "माता-पिता/अभिभावक का पता प्रमाण",
        "Initial deposit amount": "प्रारंभिक जमा राशि",
        "Account opening form": "खाता खोलने का फॉर्म"
      },
      benefits: {
        "Rs. 6,000 per year": "हर साल Rs. 6,000",
        "Three instalments of Rs. 2,000": "Rs. 2,000 की तीन किस्तें",
        "Direct Benefit Transfer": "डायरेक्ट बेनिफिट ट्रांसफर",
        "Health cover up to Rs. 5 lakh per family per year": "प्रति परिवार प्रति वर्ष Rs. 5 लाख तक स्वास्थ्य कवर",
        "Cashless treatment at empanelled hospitals": "सूचीबद्ध अस्पतालों में कैशलेस इलाज",
        "No cap on family size, age, or gender": "परिवार आकार, आयु या लिंग पर सीमा नहीं",
        "Pre-existing diseases covered from day one": "पहले से मौजूद बीमारियां पहले दिन से कवर",
        "Deposit-free LPG connection": "बिना जमा राशि LPG कनेक्शन",
        "Cash assistance for new connection": "नए कनेक्शन के लिए नकद सहायता",
        "First LPG refill and stove/hotplate support by Oil Marketing Companies": "पहली LPG रिफिल और चूल्हा/हॉटप्लेट सहायता",
        "Support through Beneficiary Led Construction": "लाभार्थी-नेतृत्व निर्माण के तहत सहायता",
        "Affordable Housing in Partnership": "साझेदारी में किफायती आवास",
        "Affordable Rental Housing": "किफायती किराये का आवास",
        "Interest Subsidy Scheme": "ब्याज सब्सिडी योजना",
        "Old age pension for eligible BPL seniors": "योग्य BPL वरिष्ठ नागरिकों के लिए वृद्धावस्था पेंशन",
        "Widow pension for eligible BPL widows": "योग्य BPL विधवाओं के लिए विधवा पेंशन",
        "Disability pension for eligible BPL persons with severe/multiple disabilities": "गंभीर/एकाधिक दिव्यांगता वाले योग्य BPL व्यक्तियों के लिए दिव्यांगता पेंशन",
        "Family benefit assistance after death of primary breadwinner": "मुख्य कमाने वाले सदस्य की मृत्यु के बाद पारिवारिक सहायता",
        "Food grain support under Annapurna for eligible uncovered senior citizens": "योग्य छूटे हुए वरिष्ठ नागरिकों के लिए अन्नपूर्णा के तहत खाद्यान्न सहायता",
        "Collateral-free working capital loan": "बिना गारंटी वर्किंग कैपिटल लोन",
        "Higher subsequent loans after timely repayment": "समय पर भुगतान के बाद अधिक राशि के अगले लोन",
        "Interest subsidy and digital transaction incentives where applicable": "जहां लागू हो ब्याज सब्सिडी और डिजिटल लेनदेन प्रोत्साहन",
        "Guaranteed pension after age 60": "60 वर्ष के बाद गारंटीड पेंशन",
        "Subscriber-selected pension slab": "सब्सक्राइबर द्वारा चुना गया पेंशन स्लैब",
        "Auto-debit contributions": "ऑटो-डेबिट योगदान",
        "Spouse and nominee benefits as per rules": "नियमों के अनुसार जीवनसाथी और नामांकित व्यक्ति को लाभ",
        "Government-backed savings account": "सरकारी समर्थित बचत खाता",
        "Interest rate notified under small savings rules": "लघु बचत नियमों के तहत अधिसूचित ब्याज दर",
        "Partial withdrawal for higher education under scheme rules": "योजना नियमों के तहत उच्च शिक्षा के लिए आंशिक निकासी",
        "Tax benefits may apply under current rules": "मौजूदा नियमों के तहत टैक्स लाभ लागू हो सकते हैं"
      }
    }
  };

  return { schemes, labels };
});
