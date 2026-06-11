(function (root, factory) {
  const core = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = core;
  }
  root.SahayakCore = core;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(value) {
    const stopwords = new Set([
      "the",
      "and",
      "for",
      "with",
      "what",
      "which",
      "how",
      "need",
      "does",
      "can",
      "get",
      "my",
      "mein",
      "mujhe",
      "kaunsi",
      "kya",
      "hai",
      "ke",
      "liye"
    ]);
    return normalize(value)
      .split(" ")
      .filter((token) => token.length > 2 && !stopwords.has(token));
  }

  function getSpecial(profile, value) {
    return Array.isArray(profile.specialCategories) && profile.specialCategories.includes(value);
  }

  function evaluateScheme(profile, scheme) {
    const reasons = [];
    let score = 0;

    const lowIncome = ["bpl", "ews"].includes(profile.incomeGroup);
    const urbanWorker = ["street_vendor", "domestic_worker", "construction_worker", "informal_worker"].includes(
      profile.occupation
    );
    const senior = ["60_79", "80_plus"].includes(profile.ageGroup);

    switch (scheme.id) {
      case "pm-kisan":
        if (profile.occupation === "farmer") {
          score += 3;
          reasons.push("The user is a farmer.");
        }
        if (profile.ownsLand === "yes") {
          score += 3;
          reasons.push("The household has cultivable land in its name.");
        }
        if (profile.area === "rural") {
          score += 1;
          reasons.push("The user is in a rural area.");
        }
        break;
      case "pmjay":
        if (lowIncome) {
          score += 3;
          reasons.push("The household is low income/BPL/EWS.");
        }
        if (urbanWorker) {
          score += 2;
          reasons.push("The occupation is one of the vulnerable urban/informal worker categories.");
        }
        if (getSpecial(profile, "disabled")) {
          score += 1;
          reasons.push("Disability can be an important vulnerability signal.");
        }
        break;
      case "pmuy":
        if (profile.gender === "female") {
          score += 2;
          reasons.push("The applicant is an adult woman.");
        }
        if (profile.hasLpg === "no") {
          score += 3;
          reasons.push("The household does not already have an LPG connection.");
        }
        if (lowIncome) {
          score += 2;
          reasons.push("The household is low income/BPL/EWS.");
        }
        break;
      case "pmay-u":
        if (profile.area === "urban") {
          score += 2;
          reasons.push("The household is in an urban area.");
        }
        if (profile.hasPuccaHouse === "no") {
          score += 3;
          reasons.push("The household does not already have a pucca house.");
        }
        if (["ews", "lig", "mig", "bpl"].includes(profile.incomeGroup)) {
          score += 2;
          reasons.push("The income category fits the EWS/LIG/MIG style targeting.");
        }
        break;
      case "nsap":
        if (profile.incomeGroup === "bpl") {
          score += 3;
          reasons.push("NSAP generally targets BPL persons or households.");
        }
        if (senior) {
          score += 3;
          reasons.push("The user is a senior citizen.");
        }
        if (getSpecial(profile, "widowed")) {
          score += 3;
          reasons.push("The user is marked as widowed.");
        }
        if (getSpecial(profile, "disabled")) {
          score += 3;
          reasons.push("The user is marked as a person with disability.");
        }
        break;
      case "pmsvanidhi":
        if (profile.occupation === "street_vendor") {
          score += 7;
          reasons.push("The user is a street vendor.");
        }
        if (profile.area === "urban") {
          score += 1;
          reasons.push("The scheme is focused on urban/peri-urban vendors.");
        }
        break;
      case "apy":
        if (profile.ageGroup === "18_40") {
          score += 3;
          reasons.push("The user is in the usual APY joining age range.");
        }
        if (profile.hasBank === "yes") {
          score += 2;
          reasons.push("The user has a bank account for contributions.");
        }
        if (["informal_worker", "street_vendor", "domestic_worker", "construction_worker"].includes(profile.occupation)) {
          score += 2;
          reasons.push("The user works in an informal/unorganised occupation.");
        }
        break;
      case "ssa":
        if (getSpecial(profile, "girl_child_parent")) {
          score += 6;
          reasons.push("The user is a parent/guardian of a girl child.");
        }
        break;
      default:
        score = 0;
    }

    let status = "low";
    if (score >= 6) status = "eligible";
    else if (score >= 3) status = "possible";

    return {
      scheme,
      score,
      status,
      reasons: reasons.length ? reasons : ["The profile has limited direct signals for this scheme."]
    };
  }

  function recommendSchemes(profile, schemes) {
    return schemes
      .map((scheme) => evaluateScheme(profile, scheme))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score || a.scheme.name.localeCompare(b.scheme.name));
  }

  function schemeSearchText(scheme) {
    return [
      scheme.name,
      scheme.summary,
      scheme.hindiSummary,
      scheme.targetBeneficiary,
      scheme.benefits.join(" "),
      scheme.eligibility.join(" "),
      scheme.documents.join(" "),
      scheme.tags.join(" "),
      scheme.searchText
    ].join(" ");
  }

  function retrieveSchemes(question, schemes, limit = 3) {
    const queryTokens = tokenize(question);
    if (!queryTokens.length) return [];

    return schemes
      .map((scheme) => {
        const textTokens = new Set(tokenize(schemeSearchText(scheme)));
        let score = 0;
        const matchedTokens = [];
        for (const token of queryTokens) {
          if (textTokens.has(token)) {
            score += token.length > 5 ? 2 : 1;
            matchedTokens.push(token);
          }
        }
        return { scheme, score, matchedTokens };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  function wantsDocuments(question) {
    return /(document|documents|doc|paper|papers|kagaz|aadhaar|checklist|required)/i.test(question);
  }

  function wantsEligibility(question) {
    return /(eligible|eligibility|qualify|apply|mil|milega|kaunsi|which|am i)/i.test(question);
  }

  function answerQuestion(question, profile, schemes, language = "en", labelsByLanguage = {}) {
    const labels = labelsByLanguage[language] || labelsByLanguage.en || {};
    const matches = retrieveSchemes(question, schemes, 3);
    const strongSingleToken = new Set([
      "kisan",
      "ayushman",
      "ujjwala",
      "lpg",
      "gas",
      "ghar",
      "awas",
      "pension",
      "sukanya",
      "vendor",
      "svanidhi"
    ]);
    const topMatch = matches[0];
    const enoughContext =
      topMatch && (topMatch.matchedTokens.length >= 2 || topMatch.matchedTokens.some((token) => strongSingleToken.has(token)));
    if (!matches.length || matches[0].score < 2 || !enoughContext) {
      return {
        type: "fallback",
        text: labels.fallback || "I could not find a grounded answer in the current knowledge base.",
        citations: []
      };
    }

    const top = matches[0].scheme;
    const evaluation = evaluateScheme(profile, top);
    const citation = top.sourceUrls[0];
    const summary = language === "hi" ? top.hindiSummary : top.summary;
    const parts = [];

    parts.push(summary);

    if (wantsEligibility(question)) {
      const statusText =
        evaluation.status === "eligible"
          ? labels.strongProfile || "This profile is a strong match."
          : evaluation.status === "possible"
            ? labels.possibleProfile || "This profile may be a match."
            : labels.limitedProfile || "This profile has limited matching signals.";
      parts.push(statusText);
      parts.push(`${labels.reasonPrefix || "Reason"}: ${evaluation.reasons.slice(0, 2).join(" ")}`);
    }

    if (wantsDocuments(question)) {
      parts.push(`${labels.documentsPrefix || "Documents to prepare"}: ${top.documents.join(", ")}.`);
    } else {
      parts.push(`${labels.benefitsPrefix || "Key benefits"}: ${top.benefits.slice(0, 3).join(", ")}.`);
    }

    if (top.verificationStatus !== "verified") {
      parts.push(
        labels.recheckNote ||
          "This scheme entry uses an official source, but latest eligibility and amount details should be rechecked."
      );
    }

    parts.push(labels.disclaimer || "Please verify final eligibility on the official portal before applying.");

    return {
      type: "answer",
      scheme: top,
      text: parts.join(" "),
      citations: [citation]
    };
  }

  function getChecklist(schemeId, schemes) {
    const scheme = schemes.find((item) => item.id === schemeId);
    return scheme ? scheme.documents : [];
  }

  function formatChecklist(schemeId, schemes) {
    const scheme = schemes.find((item) => item.id === schemeId);
    if (!scheme) return "";
    const documents = scheme.documents.map((document) => `- ${document}`).join("\n");
    return `${scheme.name} document checklist\n\n${documents}\n\nSource: ${scheme.sourceUrls[0]}`;
  }

  function getKnowledgeStats(schemes) {
    const verified = schemes.filter((scheme) => scheme.verificationStatus === "verified").length;
    const sourceCount = schemes.reduce((count, scheme) => count + scheme.sourceUrls.length, 0);
    return {
      schemes: schemes.length,
      languages: 2,
      verified,
      recheckNeeded: schemes.length - verified,
      sourceCount
    };
  }

  function createProfileFromEntries(entries) {
    const profile = {};
    for (const [key, value] of entries) {
      if (key === "specialCategories") {
        if (!profile.specialCategories) profile.specialCategories = [];
        profile.specialCategories.push(value);
      } else {
        profile[key] = value;
      }
    }
    if (!profile.specialCategories) profile.specialCategories = [];
    return profile;
  }

  return {
    normalize,
    tokenize,
    evaluateScheme,
    recommendSchemes,
    retrieveSchemes,
    answerQuestion,
    getChecklist,
    formatChecklist,
    getKnowledgeStats,
    createProfileFromEntries
  };
});
