const assert = require("node:assert/strict");
const { schemes, labels } = require("../src/data");
const core = require("../src/core");

function ids(results) {
  return results.map((result) => result.scheme.id);
}

const farmer = {
  area: "rural",
  occupation: "farmer",
  gender: "male",
  ageGroup: "40_59",
  incomeGroup: "bpl",
  ownsLand: "yes",
  hasPuccaHouse: "no",
  hasLpg: "no",
  hasBank: "yes",
  specialCategories: []
};

const womanHead = {
  area: "urban",
  occupation: "informal_worker",
  gender: "female",
  ageGroup: "40_59",
  incomeGroup: "ews",
  ownsLand: "no",
  hasPuccaHouse: "no",
  hasLpg: "no",
  hasBank: "yes",
  specialCategories: ["widowed", "girl_child_parent"]
};

const vendor = {
  area: "urban",
  occupation: "street_vendor",
  gender: "female",
  ageGroup: "18_40",
  incomeGroup: "ews",
  ownsLand: "no",
  hasPuccaHouse: "no",
  hasLpg: "yes",
  hasBank: "yes",
  specialCategories: []
};

assert.equal(schemes.length, 8, "MVP should include 8 schemes");
assert.ok(schemes.every((scheme) => scheme.sourceUrls.length > 0), "Every scheme needs at least one source");

const farmerIds = ids(core.recommendSchemes(farmer, schemes));
assert.equal(farmerIds[0], "pm-kisan", "Farmer with land should rank PM-KISAN first");
assert.ok(farmerIds.includes("pmjay"), "Low-income farmer should also see PM-JAY");

const womanIds = ids(core.recommendSchemes(womanHead, schemes));
assert.ok(womanIds.includes("pmuy"), "Woman without LPG should see Ujjwala");
assert.ok(womanIds.includes("pmay-u"), "Urban household without permanent house should see PMAY-U");
assert.ok(womanIds.includes("ssa"), "Parent/guardian of girl child should see Sukanya");

const vendorIds = ids(core.recommendSchemes(vendor, schemes));
assert.equal(vendorIds[0], "pmsvanidhi", "Street vendor should rank PM SVANidhi first");
assert.ok(vendorIds.includes("apy"), "Young informal worker with bank account should see APY");

const docsAnswer = core.answerQuestion("What documents do I need for Ayushman Bharat?", farmer, schemes, "en", labels);
assert.equal(docsAnswer.type, "answer");
assert.equal(docsAnswer.scheme.id, "pmjay");
assert.match(docsAnswer.text, /Documents to prepare/);
assert.ok(docsAnswer.citations[0].startsWith("https://"));

const hindiDocsAnswer = core.answerQuestion("आयुष्मान के लिए कौन से दस्तावेज चाहिए?", farmer, schemes, "hi", labels);
assert.equal(hindiDocsAnswer.type, "answer");
assert.equal(hindiDocsAnswer.scheme.id, "pmjay");
assert.match(hindiDocsAnswer.text, /तैयार रखने वाले दस्तावेज/);
assert.match(hindiDocsAnswer.text, /आधिकारिक पोर्टल/);
assert.match(hindiDocsAnswer.text, /आधार या पहचान दस्तावेज/);

const hindiWidowQuestion = "मैं 55 वर्ष की विधवा हूं, मेरे लिए कौन सी योजना बेहतर है?";
const hindiWidowMatches = core.retrieveSchemes(hindiWidowQuestion, schemes, 3);
assert.equal(hindiWidowMatches[0].scheme.id, "nsap", "Devanagari widow follow-up should retrieve NSAP first");

const hindiWidowProfile = core.inferProfileFromQuestion(hindiWidowQuestion, farmer);
assert.equal(hindiWidowProfile.ageGroup, "40_59");
assert.ok(hindiWidowProfile.specialCategories.includes("widowed"));

const hindiWidowAnswer = core.answerQuestion(hindiWidowQuestion, hindiWidowProfile, schemes, "hi", labels);
assert.equal(hindiWidowAnswer.type, "answer");
assert.equal(hindiWidowAnswer.scheme.id, "nsap");
assert.match(hindiWidowAnswer.text, /विधवा/);
assert.match(hindiWidowAnswer.text, /कारण/);

const vendorAnswer = core.answerQuestion("Can I get PM SVANidhi loan as a street vendor?", vendor, schemes, "en", labels);
assert.equal(vendorAnswer.type, "answer");
assert.equal(vendorAnswer.scheme.id, "pmsvanidhi");
assert.match(vendorAnswer.text, /latest eligibility and amount details should be rechecked/);

const widowQuestion = "I am widow of age 55 which scheme is best for me?";
const widowMatches = core.retrieveSchemes(widowQuestion, schemes, 3);
assert.equal(widowMatches[0].scheme.id, "nsap", "Widow follow-up should retrieve NSAP first");

const inferredWidowProfile = core.inferProfileFromQuestion(widowQuestion, {
  area: "urban",
  occupation: "informal_worker",
  gender: "female",
  ageGroup: "18_40",
  incomeGroup: "bpl",
  ownsLand: "no",
  hasPuccaHouse: "no",
  hasLpg: "yes",
  hasBank: "yes",
  specialCategories: []
});
assert.equal(inferredWidowProfile.ageGroup, "40_59");
assert.ok(inferredWidowProfile.specialCategories.includes("widowed"));

const widowAnswer = core.answerQuestion(widowQuestion, inferredWidowProfile, schemes, "en", labels);
assert.equal(widowAnswer.type, "answer");
assert.equal(widowAnswer.scheme.id, "nsap");
assert.match(widowAnswer.text, /widow/i);

const parsedProfile = core.createProfileFromEntries([
  ["area", "urban"],
  ["occupation", "informal_worker"],
  ["specialCategories", "girl_child_parent"]
]);
assert.deepEqual(parsedProfile.specialCategories, ["girl_child_parent"]);

const pmuyChecklist = core.getChecklist("pmuy", schemes);
assert.ok(pmuyChecklist.includes("KYC application form"));
assert.ok(pmuyChecklist.includes("Bank account details"));

const pmuyChecklistText = core.formatChecklist("pmuy", schemes);
assert.match(pmuyChecklistText, /Pradhan Mantri Ujjwala Yojana document checklist/);
assert.match(pmuyChecklistText, /- KYC application form/);
assert.match(pmuyChecklistText, /Source: https:\/\/www\.pmuy\.gov\.in\//);

const stats = core.getKnowledgeStats(schemes);
assert.deepEqual(stats, {
  schemes: 8,
  languages: 2,
  verified: 5,
  recheckNeeded: 3,
  sourceCount: 13
});

const unknown = core.answerQuestion("Can I get a drone subsidy for my startup?", farmer, schemes, "en", labels);
assert.equal(unknown.type, "fallback");

console.log("All core tests passed.");
