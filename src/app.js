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
      profileHelp: "Tell Sahayak about the beneficiary.",
      area: "Area",
      occupation: "Occupation",
      gender: "Gender",
      age: "Age Group",
      income: "Income Category",
      ownsLand: "Cultivable land?",
      permanentHouse: "Permanent house?",
      lpg: "LPG connection?",
      bank: "Bank account?",
      special: "Special category",
      widow: "Widow",
      disabled: "Person with disability",
      girlChildParent: "Parent/guardian of girl child",
      demoPresets: "Demo presets",
      sampleFarmer: "Farmer",
      sampleWoman: "Woman-led household",
      sampleVendor: "Street vendor",
      findSchemes: "Find Schemes",
      recommendations: "Recommendations",
      recommendationsHelp: "Ranked scheme matches with reasons.",
      askTitle: "Ask Assistant",
      askHelp: "Grounded follow-up answers.",
      promptAyushman: "What documents do I need for Ayushman Bharat?",
      promptKisan: "Am I eligible for PM-KISAN?",
      promptWidow: "I am widow of age 55 which scheme is best for me?",
      askPlaceholder: "Ask about eligibility, benefits, or documents",
      ask: "Ask",
      checklistTitle: "Document Checklist",
      checklistHelp: "Required application documents.",
      chooseScheme: "Choose scheme",
      copyChecklist: "Copy checklist",
      downloadChecklist: "Download checklist",
      useChecklist: "View documents",
      checklistReady: "Checklist ready for",
      copied: "Checklist copied.",
      copyFailed: "Copy failed. Select and copy the list manually.",
      emptyRecommendations: "Fill the profile and find schemes to see recommendations.",
      sourceLabel: "Source",
      metricsSchemes: "schemes",
      metricsLanguages: "languages",
      metricsVerified: "verified scheme entries",
      metricsCitations: "official links",
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
      profileTitle: "पात्रता प्रोफ़ाइल",
      profileHelp: "लाभार्थी की मूल जानकारी भरें.",
      area: "क्षेत्र",
      occupation: "रोजगार / काम",
      gender: "लिंग",
      age: "आयु समूह",
      income: "आय वर्ग",
      ownsLand: "खेती योग्य जमीन?",
      permanentHouse: "स्थायी घर?",
      lpg: "एलपीजी कनेक्शन?",
      bank: "बैंक खाता?",
      special: "विशेष श्रेणी",
      widow: "विधवा",
      disabled: "दिव्यांग व्यक्ति",
      girlChildParent: "बालिका के माता-पिता/अभिभावक",
      demoPresets: "डेमो प्रोफ़ाइल",
      sampleFarmer: "किसान",
      sampleWoman: "महिला-नेतृत्व वाला परिवार",
      sampleVendor: "स्ट्रीट वेंडर",
      findSchemes: "योजनाएं खोजें",
      recommendations: "सुझाई गई योजनाएं",
      recommendationsHelp: "कारणों के साथ क्रमबद्ध योजना मिलान.",
      askTitle: "सहायक से पूछें",
      askHelp: "स्रोत-आधारित फॉलो-अप जवाब.",
      promptAyushman: "आयुष्मान भारत के लिए कौन से दस्तावेज चाहिए?",
      promptKisan: "क्या मैं पीएम-किसान के लिए पात्र हूं?",
      promptWidow: "मैं 55 वर्ष की विधवा हूं, मेरे लिए कौन सी योजना बेहतर है?",
      askPlaceholder: "पात्रता, लाभ या दस्तावेजों के बारे में पूछें",
      ask: "पूछें",
      checklistTitle: "दस्तावेज चेकलिस्ट",
      checklistHelp: "आवेदन के लिए जरूरी दस्तावेज.",
      chooseScheme: "योजना चुनें",
      copyChecklist: "चेकलिस्ट कॉपी करें",
      downloadChecklist: "चेकलिस्ट डाउनलोड करें",
      useChecklist: "दस्तावेज देखें",
      checklistReady: "चेकलिस्ट तैयार है",
      copied: "चेकलिस्ट कॉपी हो गई.",
      copyFailed: "कॉपी नहीं हो पाया. सूची को चुनकर मैन्युअली कॉपी करें.",
      emptyRecommendations: "प्रोफ़ाइल भरें और योजनाएं खोजें.",
      sourceLabel: "स्रोत",
      metricsSchemes: "योजनाएं",
      metricsLanguages: "भाषाएं",
      metricsVerified: "सत्यापित योजना प्रविष्टियां",
      metricsCitations: "आधिकारिक लिंक",
      areaRural: "ग्रामीण",
      areaUrban: "शहरी",
      farmer: "किसान",
      streetVendor: "स्ट्रीट वेंडर",
      informalWorker: "असंगठित कामगार",
      constructionWorker: "निर्माण कामगार",
      domesticWorker: "घरेलू कामगार",
      student: "विद्यार्थी",
      other: "अन्य",
      female: "महिला",
      male: "पुरुष",
      otherGender: "अन्य",
      age18_40: "18-40",
      age40_59: "40-59",
      age60_79: "60-79",
      age80Plus: "80+",
      incomeBpl: "BPL / बहुत कम आय",
      incomeEws: "EWS",
      incomeLig: "LIG",
      incomeMig: "MIG",
      incomeOther: "अन्य / पता नहीं",
      yes: "हां",
      no: "नहीं"
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
  const metricsEl = document.querySelector("#metrics");
  const checklistPanel = document.querySelector("#checklistPanel");

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
    renderMetrics();
    renderRecommendations();
    renderChecklistOptions();
    renderChecklist();
  }

  function renderMetrics() {
    const stats = core.getKnowledgeStats(schemes);
    const metrics = [
      [stats.schemes, uiText("metricsSchemes")],
      [stats.languages, uiText("metricsLanguages")],
      [stats.verified, uiText("metricsVerified")],
      [stats.sourceCount, uiText("metricsCitations")]
    ];
    metricsEl.innerHTML = metrics
      .map(([value, label]) => `<span class="metric"><strong>${value}</strong> ${label}</span>`)
      .join("");
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

  function languageLabels() {
    return labels[state.language] || labels.en || {};
  }

  function localizedReason(reason) {
    const reasonMap = languageLabels().reasons || {};
    return reasonMap[reason] || reason;
  }

  function localizedDocument(documentName) {
    const documentMap = languageLabels().documents || {};
    return documentMap[documentName] || documentName;
  }

  function schemeDisplayName(scheme) {
    return state.language === "hi" && scheme.hindiName ? scheme.hindiName : scheme.name;
  }

  function renderRecommendations() {
    if (!state.recommendations.length) {
      recommendationsEl.innerHTML = `<div class="empty">${uiText("emptyRecommendations")}</div>`;
      return;
    }

    recommendationsEl.innerHTML = state.recommendations
      .map(({ scheme, status, reasons }) => {
        const summary = state.language === "hi" ? scheme.hindiSummary : scheme.summary;
        const statusClass = status === "eligible" ? "" : status === "possible" ? "possible" : "low";
        return `
          <article class="scheme-card ${statusClass}">
            <div class="scheme-title">
              <h3>${schemeDisplayName(scheme)}</h3>
              <span class="badge">${statusLabel(status)}</span>
            </div>
            <p class="verification ${verificationClass(scheme)}">${verificationLabel(scheme)}</p>
            <p>${summary}</p>
            <ul>${reasons.slice(0, 3).map((reason) => `<li>${localizedReason(reason)}</li>`).join("")}</ul>
            <div class="scheme-actions">
              <button class="secondary checklist-action" data-scheme-id="${scheme.id}" type="button">${uiText("useChecklist")}</button>
              <a class="source-link" href="${scheme.sourceUrls[0]}" target="_blank" rel="noreferrer">${uiText("sourceLabel")}: ${scheme.sourceUrls[0]}</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderChecklistOptions() {
    const source = state.recommendations.length ? state.recommendations.map((item) => item.scheme) : schemes;
    const selectedValue = checklistSelect.value;
    checklistSelect.innerHTML = source
      .map((scheme) => `<option value="${scheme.id}">${schemeDisplayName(scheme)}</option>`)
      .join("");
    if (source.some((scheme) => scheme.id === selectedValue)) {
      checklistSelect.value = selectedValue;
    }
  }

  function renderChecklist() {
    const selectedId = checklistSelect.value || (schemes[0] && schemes[0].id);
    const docs = core.getChecklist(selectedId, schemes);
    checklistEl.innerHTML = docs.map((doc) => `<li>${localizedDocument(doc)}</li>`).join("");
  }

  function selectChecklist(schemeId, options = {}) {
    checklistSelect.value = schemeId;
    renderChecklist();
    const selected = schemes.find((scheme) => scheme.id === schemeId);
    copyStatus.textContent = selected ? `${uiText("checklistReady")} ${schemeDisplayName(selected)}.` : "";

    if (options.reveal) {
      checklistPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      checklistPanel.classList.add("attention");
      window.setTimeout(() => checklistPanel.classList.remove("attention"), 1200);
    }
  }

  function selectedChecklistText() {
    const selected = schemes.find((scheme) => scheme.id === checklistSelect.value);
    if (!selected) return "";
    const title =
      state.language === "hi"
        ? `${schemeDisplayName(selected)} दस्तावेज चेकलिस्ट`
        : `${schemeDisplayName(selected)} document checklist`;
    const documents = selected.documents.map((documentName) => `- ${localizedDocument(documentName)}`).join("\n");
    return `${title}\n\n${documents}\n\n${uiText("sourceLabel")}: ${selected.sourceUrls[0]}`;
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
      <h3>${schemeDisplayName(answer.scheme)}</h3>
      <p>${answer.text}</p>
      ${answer.citations.map((url) => `<a class="source-link" href="${url}" target="_blank" rel="noreferrer">${uiText("sourceLabel")}: ${url}</a>`).join("<br />")}
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
    selectChecklist(action.dataset.schemeId, { reveal: true });
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
