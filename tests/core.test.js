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
assert.ok(womanIds.includes("pmay-u"), "Urban household without pucca house should see PMAY-U");
assert.ok(womanIds.includes("ssa"), "Parent/guardian of girl child should see Sukanya");

const vendorIds = ids(core.recommendSchemes(vendor, schemes));
assert.equal(vendorIds[0], "pmsvanidhi", "Street vendor should rank PM SVANidhi first");
assert.ok(vendorIds.includes("apy"), "Young informal worker with bank account should see APY");

const docsAnswer = core.answerQuestion("What documents do I need for Ayushman Bharat?", farmer, schemes, "en", labels);
assert.equal(docsAnswer.type, "answer");
assert.equal(docsAnswer.scheme.id, "pmjay");
assert.match(docsAnswer.text, /Documents to prepare/);
assert.ok(docsAnswer.citations[0].startsWith("https://"));

const unknown = core.answerQuestion("Can I get a drone subsidy for my startup?", farmer, schemes, "en", labels);
assert.equal(unknown.type, "fallback");

console.log("All core tests passed.");
