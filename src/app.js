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
      findSchemes: "Find Schemes",
      recommendations: "Recommendations",
      askTitle: "Ask a Follow-Up",
      askPlaceholder: "Ask about eligibility, benefits, or documents",
      ask: "Ask",
      checklistTitle: "Document Checklist",
      chooseScheme: "Choose scheme",
      copyChecklist: "Copy checklist"
    },
    hi: {
      profileTitle: "Eligibility Profile",
      area: "Area",
      occupation: "Occupation",
      gender: "Gender",
      age: "Age Group",
      income: "Income Category",
      ownsLand: "Kheti ki zameen?",
      pucca: "Pucca ghar?",
      lpg: "LPG connection?",
      bank: "Bank account?",
      special: "Special category",
      findSchemes: "Schemes dhoondhein",
      recommendations: "Recommendations",
      askTitle: "Follow-up poochhein",
      askPlaceholder: "Eligibility, benefits, ya documents ke baare mein poochhein",
      ask: "Poochhein",
      checklistTitle: "Document Checklist",
      chooseScheme: "Scheme chunen",
      copyChecklist: "Checklist copy karein"
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
            <a class="source-link" href="${scheme.sourceUrls[0]}" target="_blank" rel="noreferrer">Source: ${scheme.sourceUrls[0]}</a>
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

  document.querySelector("#copyChecklist").addEventListener("click", async () => {
    const items = Array.from(checklistEl.querySelectorAll("li")).map((item) => `- ${item.textContent}`);
    const selected = schemes.find((scheme) => scheme.id === checklistSelect.value);
    const text = `${selected.name} document checklist\n${items.join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      copyStatus.textContent = "Checklist copied.";
    } catch (error) {
      copyStatus.textContent = "Copy failed. Select and copy the list manually.";
    }
  });

  setFormProfile(state.profile);
  runRecommendations();
  renderChecklistOptions();
  renderChecklist();
  setLanguage("en");
})();
