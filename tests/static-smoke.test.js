const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const appJs = fs.readFileSync(path.join(root, "src", "app.js"), "utf8");
const pagesWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "pages.yml"), "utf8");

assert.match(indexHtml, /<h1>Sahayak<\/h1>/, "Home page should identify the product");
assert.doesNotMatch(indexHtml, /NSS AI Project/, "Home page should not show the internal project tag");
assert.match(indexHtml, /id="metrics"/, "Home page should include knowledge base metrics");
assert.match(indexHtml, /class="dashboard"/, "Home page should use a dashboard layout");
assert.match(indexHtml, /id="profileForm"/, "Home page should include the eligibility form");
assert.match(indexHtml, /id="recommendations"/, "Home page should include recommendations");
assert.match(indexHtml, /id="chatForm"/, "Home page should include the chat form");
assert.match(indexHtml, /id="checklistSelect"/, "Home page should include the checklist selector");
assert.match(indexHtml, /id="downloadChecklist"/, "Home page should include checklist download");
assert.match(indexHtml, /class="panel assistant-panel"/, "Home page should show assistant as its own panel");
assert.match(indexHtml, /class="panel checklist-panel"/, "Home page should show checklist as its own panel");
assert.doesNotMatch(indexHtml, /role="tab"/, "Assistant and checklist should not be hidden behind tabs");
assert.match(indexHtml, /data-language="hi"/, "Home page should expose Hindi mode");
assert.match(indexHtml, /Woman-led household/, "Home page should use clear persona labels");
assert.match(indexHtml, /Permanent house\?/, "English form should avoid unexplained local terminology");
assert.doesNotMatch(indexHtml, />Step \d</, "Dashboard should not present as a rough numbered flow");
assert.match(appJs, /View documents/, "Recommendation action should clearly describe the document action");
assert.match(appJs, /scrollIntoView/, "Recommendation action should bring the checklist panel into view");
assert.doesNotMatch(appJs, /setToolPanel/, "Assistant and checklist panels should not need tab switching");

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

assert.match(pagesWorkflow, /branches: \[main\]/, "Pages workflow should deploy from main");
assert.match(pagesWorkflow, /pages: write/, "Pages workflow should grant pages write permission");
assert.match(pagesWorkflow, /id-token: write/, "Pages workflow should grant id-token write permission");
assert.match(pagesWorkflow, /actions\/configure-pages@v5/, "Pages workflow should configure GitHub Pages");
assert.match(pagesWorkflow, /actions\/upload-pages-artifact@v4/, "Pages workflow should upload a Pages artifact");
assert.match(pagesWorkflow, /actions\/deploy-pages@v4/, "Pages workflow should deploy the Pages artifact");

console.log("Static smoke checks passed.");
