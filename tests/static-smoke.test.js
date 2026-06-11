const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");

assert.match(indexHtml, /<h1>Sahayak<\/h1>/, "Home page should identify the product");
assert.match(indexHtml, /id="profileForm"/, "Home page should include the eligibility form");
assert.match(indexHtml, /id="recommendations"/, "Home page should include recommendations");
assert.match(indexHtml, /id="chatForm"/, "Home page should include the chat form");
assert.match(indexHtml, /id="checklistSelect"/, "Home page should include the checklist selector");
assert.match(indexHtml, /id="downloadChecklist"/, "Home page should include checklist download");
assert.match(indexHtml, /data-language="hi"/, "Home page should expose Hindi mode");

const referencedFiles = [
  ...Array.from(indexHtml.matchAll(/<link[^>]+href="([^"]+)"/g), (match) => match[1]),
  ...Array.from(indexHtml.matchAll(/<script[^>]+src="([^"]+)"/g), (match) => match[1])
];

assert.deepEqual(
  referencedFiles.sort(),
  ["src/app.js", "src/core.js", "src/data.js", "styles.css"].sort(),
  "Index should reference the expected static assets"
);

for (const file of referencedFiles) {
  assert.ok(fs.existsSync(path.join(root, file)), `Referenced asset should exist: ${file}`);
}

assert.doesNotMatch(indexHtml, /details\.md|plan\.md|schemes\.md/, "Local-only planning docs should not be referenced by the app");

console.log("Static smoke checks passed.");
