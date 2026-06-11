(function () {
  const { schemes, labels } = window.SahayakData;
  const core = window.SahayakCore;
  const state = {
    language: "en",
    profile: {
      area: "rural",
      occupation: "farmer",
      gender: "female",
      ageGroup: "18_40",
      incomeGroup: "bpl",
      ownsLand: "yes",
      hasPuccaHouse: "no",
      hasLpg: "no",
      hasBank: "yes",
      specialCategories: []
    },
    recommendations: []
  };

  const copy = {
    en: {
      profileTitle: "Eligibility Profile",
      area: "Area",
      occupation: "Occupation",
      gender: "Gender",
      age: "Age Group",
      income: "Income Category",
      ownsLand: "Cultivable land?",
      pucca: "Pucca house?",
      lpg: "LPG connection?",
      bank: "Bank account?",
      special: "Special category",
      widow: "Widow",
      disabled: "Person with disability",
      girlChildParent: "Parent/guardian of girl child",
      findSchemes: "Find Schemes",
      recommendations: "Recommendations",
      askTitle: "Ask a Follow-Up",
      askPlaceholder: "Ask about eligibility, benefits, or documents",
      ask: "Ask",
      checklistTitle: "Document Checklist",
      chooseScheme: "Choose scheme",
      copyChecklist: "Copy checklist",
      downloadChecklist: "Download checklist",
      useChecklist: "Use checklist",
      checklistReady: "Checklist ready for",
      copied: "Checklist copied.",
      copyFailed: "Copy failed. Select and copy the list manually.",
      areaRural: "Rural",
      areaUrban: "Urban",
      farmer: "Farmer",
      streetVendor: "Street vendor",
      informalWorker: "Informal worker",
      constructionWorker: "Construction worker",
      domesticWorker: "Domestic worker",
      student: "Student",
      other: "Other",
      female: "Female",
      male: "Male",
      otherGender: "Other",
      age18_40: "18-40",
      age40_59: "40-59",
      age60_79: "60-79",
      age80Plus: "80+",
      incomeBpl: "BPL / very low income",
      incomeEws: "EWS",
      incomeLig: "LIG",
      incomeMig: "MIG",
      incomeOther: "Other / unknown",
      yes: "Yes",
      no: "No"
    },
    hi: {
      profileTitle: "Eligibility Profile",
      area: "Area",
      occupation: "Rozgar / kaam",
      gender: "Gender",
      age: "Age group",
      income: "Income category",
      ownsLand: "Kheti ki zameen?",
      pucca: "Pucca ghar?",
      lpg: "LPG connection?",
      bank: "Bank account?",
      special: "Special category",
      widow: "Vidhwa",
      disabled: "Divyang vyakti",
      girlChildParent: "Ladki ke parent/guardian",
      findSchemes: "Schemes dhoondhein",
      recommendations: "Recommendations",
      askTitle: "Follow-up poochhein",
      askPlaceholder: "Eligibility, benefits, ya documents ke baare mein poochhein",
      ask: "Poochhein",
      checklistTitle: "Document Checklist",
      chooseScheme: "Scheme chunen",
      copyChecklist: "Checklist copy karein",
      downloadChecklist: "Checklist download karein",
      useChecklist: "Checklist dekhein",
      checklistReady: "Checklist ready hai",
      copied: "Checklist copied.",
      copyFailed: "Copy failed. List ko manually select karke copy karein.",
      areaRural: "Rural",
      areaUrban: "Urban",
      farmer: "Kisan",
      streetVendor: "Street vendor",
      informalWorker: "Informal worker",
      constructionWorker: "Construction worker",
      domesticWorker: "Domestic worker",
      student: "Student",
      other: "Other",
      female: "Mahila",
      male: "Purush",
      otherGender: "Other",
      age18_40: "18-40",
      age40_59: "40-59",
      age60_79: "60-79",
      age80Plus: "80+",
      incomeBpl: "BPL / bahut low income",
      incomeEws: "EWS",
      incomeLig: "LIG",
      incomeMig: "MIG",
      incomeOther: "Other / pata nahi",
      yes: "Haan",
      no: "Nahi"
    }
  };

  const personas = {
    farmer: {
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
    },
    woman: {
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
    },
    vendor: {
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
    }
  };

  const form = document.querySelector("#profileForm");
  const recommendationsEl = document.querySelector("#recommendations");
  const checklistSelect = document.querySelector("#checklistSelect");
  const checklistEl = document.querySelector("#checklist");
  const chatForm = document.querySelector("#chatForm");
  const chatInput = document.querySelector("#chatInput");
  const chatAnswer = document.querySelector("#chatAnswer");
  const copyStatus = document.querySelector("#copyStatus");
  const downloadChecklist = document.querySelector("#downloadChecklist");

  function setLanguage(language) {
    state.language = language;
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.classList.toggle("active", button.dataset.language === language);
    });
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = copy[language][node.dataset.i18n] || node.textContent;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", copy[language][node.dataset.i18nPlaceholder] || node.getAttribute("placeholder"));
    });
    document.querySelectorAll("[data-i18n-option]").forEach((node) => {
      node.textContent = copy[language][node.dataset.i18nOption] || node.textContent;
    });
    renderRecommendations();
    renderChecklist();
  }

  function profileFromForm() {
    return core.createProfileFromEntries(new FormData(form).entries());
  }

  function setFormProfile(profile) {
    Object.entries(profile).forEach(([key, value]) => {
      if (key === "specialCategories") return;
      const input = form.elements[key];
      if (input) input.value = value;
    });
    form.querySelectorAll("input[name='specialCategories']").forEach((input) => {
      input.checked = profile.specialCategories.includes(input.value);
    });
  }

  function runRecommendations() {
    state.profile = profileFromForm();
    state.recommendations = core.recommendSchemes(state.profile, schemes).slice(0, 5);
    renderRecommendations();
    renderChecklistOptions();
    renderChecklist();
  }

  function statusLabel(status) {
    const languageLabels = labels[state.language] || labels.en;
    if (status === "eligible") return languageLabels.eligible;
    if (status === "possible") return languageLabels.possible;
    return languageLabels.low;
  }

  function verificationLabel(scheme) {
    const languageLabels = labels[state.language] || labels.en;
    return scheme.verificationStatus === "verified" ? languageLabels.verified : languageLabels.recheck;
  }

  function verificationClass(scheme) {
    return scheme.verificationStatus === "verified" ? "verified" : "recheck";
  }

  function uiText(key) {
    return copy[state.language][key] || copy.en[key] || key;
  }

  function renderRecommendations() {
    if (!state.recommendations.length) {
      recommendationsEl.innerHTML = '<div class="empty">Fill the profile and find schemes to see recommendations.</div>';
      return;
    }

    recommendationsEl.innerHTML = state.recommendations
      .map(({ scheme, status, reasons }) => {
        const summary = state.language === "hi" ? scheme.hindiSummary : scheme.summary;
        const statusClass = status === "eligible" ? "" : status === "possible" ? "possible" : "low";
        return `
          <article class="scheme-card ${statusClass}">
            <div class="scheme-title">
              <h3>${scheme.name}</h3>
              <span class="badge">${statusLabel(status)}</span>
            </div>
            <p class="verification ${verificationClass(scheme)}">${verificationLabel(scheme)}</p>
            <p>${summary}</p>
            <ul>${reasons.slice(0, 3).map((reason) => `<li>${reason}</li>`).join("")}</ul>
            <div class="scheme-actions">
              <button class="secondary checklist-action" data-scheme-id="${scheme.id}" type="button">${uiText("useChecklist")}</button>
              <a class="source-link" href="${scheme.sourceUrls[0]}" target="_blank" rel="noreferrer">Source: ${scheme.sourceUrls[0]}</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderChecklistOptions() {
    const source = state.recommendations.length ? state.recommendations.map((item) => item.scheme) : schemes;
    checklistSelect.innerHTML = source.map((scheme) => `<option value="${scheme.id}">${scheme.name}</option>`).join("");
  }

  function renderChecklist() {
    const selectedId = checklistSelect.value || (schemes[0] && schemes[0].id);
    const docs = core.getChecklist(selectedId, schemes);
    checklistEl.innerHTML = docs.map((doc) => `<li>${doc}</li>`).join("");
  }

  function selectChecklist(schemeId) {
    checklistSelect.value = schemeId;
    renderChecklist();
    const selected = schemes.find((scheme) => scheme.id === schemeId);
    copyStatus.textContent = selected ? `${uiText("checklistReady")} ${selected.name}.` : "";
  }

  function selectedChecklistText() {
    return core.formatChecklist(checklistSelect.value, schemes);
  }

  function selectedChecklistFileName() {
    const selected = schemes.find((scheme) => scheme.id === checklistSelect.value);
    const slug = selected ? core.normalize(selected.name).replace(/\s+/g, "-") : "scheme";
    return `${slug}-checklist.txt`;
  }

  function askQuestion(question) {
    const answer = core.answerQuestion(question, state.profile, schemes, state.language, labels);
    if (answer.type === "fallback") {
      chatAnswer.innerHTML = `<p>${answer.text}</p>`;
      return;
    }
    chatAnswer.innerHTML = `
      <h3>${answer.scheme.name}</h3>
      <p>${answer.text}</p>
      ${answer.citations.map((url) => `<a class="source-link" href="${url}" target="_blank" rel="noreferrer">Source: ${url}</a>`).join("<br />")}
    `;
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  document.querySelectorAll("[data-persona]").forEach((button) => {
    button.addEventListener("click", () => {
      setFormProfile(personas[button.dataset.persona]);
      runRecommendations();
    });
  });

  document.querySelectorAll(".prompt").forEach((button) => {
    button.addEventListener("click", () => {
      chatInput.value = button.textContent;
      askQuestion(chatInput.value);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    runRecommendations();
  });

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (chatInput.value.trim()) askQuestion(chatInput.value);
  });

  checklistSelect.addEventListener("change", renderChecklist);

  recommendationsEl.addEventListener("click", (event) => {
    const action = event.target.closest(".checklist-action");
    if (!action) return;
    selectChecklist(action.dataset.schemeId);
  });

  document.querySelector("#copyChecklist").addEventListener("click", async () => {
    const text = selectedChecklistText();
    try {
      await navigator.clipboard.writeText(text);
      copyStatus.textContent = uiText("copied");
    } catch (error) {
      copyStatus.textContent = uiText("copyFailed");
    }
  });

  downloadChecklist.addEventListener("click", () => {
    const blob = new Blob([selectedChecklistText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = selectedChecklistFileName();
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  setFormProfile(state.profile);
  runRecommendations();
  renderChecklistOptions();
  renderChecklist();
  setLanguage("en");
})();
