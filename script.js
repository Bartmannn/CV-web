const translations = {
  pl: {
    pageTitle: "Bartosz Bohdziewicz — profil zawodowy",
    pageDescription: "Profil zawodowy Bartosza Bohdziewicza — doświadczenie praktyczne i techniczne.",
  },
  en: {
    pageTitle: "Bartosz Bohdziewicz — professional profile",
    pageDescription: "Bartosz Bohdziewicz's professional profile — practical and technical experience.",
    skipLink: "Skip to content",
    languageSwitcherLabel: "Language selection",
    heroEyebrow: "Professional profile",
    heroTitle: "Computer Science Engineer with a practical approach to work",
    heroCopy: "I am an Algorithmic Computer Science Engineer. I have experience in warehouse work, hardware servicing, and software development, so I am open to physical and technical work as well as IT positions. I plan to relocate to Bydgoszcz and can start in September 2026.",
    heroFactsLabel: "Key information",
    heroFactLocation: "Świecie → planned relocation to Bydgoszcz",
    heroFactAvailability: "Available from September 2026",
    heroFactWork: "Physical, technical, or IT work",
    contactActionsLabel: "Contact",
    callButton: "Call",
    emailButton: "Send an email",
    githubButton: "GitHub",
    githubProfile: "GitHub profile",
    copyContactLabel: "Copy contact details",
    phoneLabel: "Phone",
    copyPhone: "Copy phone",
    copyEmail: "Copy email",
    copyPhoneSuccess: "Phone number copied to the clipboard.",
    copyEmailSuccess: "Email address copied to the clipboard.",
    copyFailure: "Copying failed. Please select and copy the text manually.",
    externalLinkNotice: " (opens in a new tab)",
    overviewEyebrow: "Key information",
    overviewTitle: "Availability and profile",
    availabilityLabel: "Availability",
    availabilityValue: "From September 2026 · shift work",
    weekendsNote: "Weekends unavailable.",
    locationLabel: "Location",
    locationValue: "Świecie · planned relocation to Bydgoszcz",
    commuteNote: "Public transport commute, depending on the location and working hours.",
    employmentLabel: "Employment type",
    employmentValue: "Preferred: mandate contract",
    employmentNote: "I am open to other forms of employment.",
    mobilityLabel: "Mobility",
    mobilityValue: "No car or driving licence",
    mobilityNote: "I am not available for business travel or regular travel.",
    rolesEyebrow: "Professional openness",
    rolesTitle: "Areas of work I am considering",
    roleWarehouse: "Warehouse and physical work",
    roleTechnical: "Servicing, technical support, and testing",
    roleBackend: "Junior backend and other IT roles",
    experienceEyebrow: "Professional practice",
    experienceTitle: "Experience",
    notbugPeriod: "July–October 2025 · remote / Wrocław",
    notbugLength: "4 months",
    notbugMeta: "Intern · NotBug · Angular and Django",
    notbugDutyOne: "Implementing new features and fixes.",
    notbugDutyTwo: "Creating documentation in Polish.",
    mediaPeriod: "August 2022 · Świecie",
    mediaRole: "Warehouse worker",
    mediaMeta: "Seasonal worker · Media Expert",
    mediaDutyOne: "Receiving deliveries and stocking goods.",
    mediaDutyTwo: "Keeping the area tidy and packing and issuing bulky products.",
    ivyPeriod: "July 2019 · Bydgoszcz",
    ivyRole: "Dell laptop servicing",
    ivyMeta: "Intern · Ivy Technology",
    ivyDutyOne: "Replacing components and diagnosing Dell laptops.",
    ivyDutyTwo: "Keeping the work area tidy.",
    talemPeriod: "November 2018 · Bydgoszcz",
    talemRole: "SEO Analyst / WordPress",
    talemMeta: "Intern · Talem Technologies",
    talemDutyOne: "SEO optimisation.",
    talemDutyTwo: "Developing WordPress-based client websites.",
    skillsEyebrow: "Tools and work style",
    skillsTitle: "Competencies",
    environmentTitle: "Environment and tools",
    environmentText: "Linux/Ubuntu, Windows, terminal, Git, and Docker.",
    developmentTitle: "Programming and data",
    developmentText: "Python, Django/Django REST Framework, and relational databases.",
    aiToolsTitle: "AI tools in code work",
    aiToolsText: "I use Codex and Gemini CLI while working on projects: I break down tasks, prepare precise prompts, control context, and verify results.",
    workStyleTitle: "Work style",
    workStyleText: "I complete assigned tasks carefully, communicate agreements clearly, clarify ambiguities, and value punctuality.",
    projectsEyebrow: "Technical projects",
    projectsTitle: "Selected projects",
    inProgress: "In progress",
    finapsoDescription: "Team project: contributing to the creation, release preparation, and further development of a mobile application, including its lifecycle in Google Play.",
    staticAnalysis: "static code analysis",
    privateProjectNote: "The project is private, so it has no public link.",
    engineeringProject: "Engineering degree project",
    pconfigurerDescription: "An application for building PC sets, with component filtering by compatibility and price, a REST API, and an administration panel.",
    repositoryLink: "Repository",
    applikacjaDescription: "A native Android app for preparing for entry examinations for the legal traineeship, working offline and downloading versioned content packages.",
    showcaseLink: "Showcase",
    microservicesProject: "Microservices architecture",
    sudokuDescription: "An application where React handles the interface, Go acts as the API gateway, and Prolog solves Sudoku using constraint programming.",
    moreProjectsSummary: "Other projects",
    guessDescription: " — a multiplayer browser game with rooms, scoring, and real-time communication.",
    ticketDescription: " — a CRUD ticket management system with a REST API.",
    sieveDescription: " — an implementation of a segmented Sieve of Eratosthenes in Go.",
    tspDescription: " — a travelling salesperson problem solver in Go with a Python visualisation.",
    concurrentDescription: " — a terminal concurrent simulation built with goroutines and channels.",
    puzzleDescription: " — a console game and A* solver in Java.",
    organizerDescription: " — a configurable Python CLI tool for organising directories.",
    rc4Description: " — an educational implementation of a stream cipher in Python.",
    educationEyebrow: "Education",
    educationTitle: "Education and certificates",
    degreeTitle: "Engineer, Algorithmic Computer Science",
    degreeDetails: "Wrocław University of Science and Technology · completed February 2026",
    technicianTitle: "IT Technician",
    technicianDetails: "Electronic Schools Complex in Bydgoszcz · completed 2021",
    certificatesTitle: "Certificates",
    ee09: "· Web programming, development and administration of websites and databases · 2021",
    ee08: "· Assembly and operation of computer systems, peripheral devices, and networks · 2020",
    interestsEyebrow: "Outside work",
    interestsTitle: "Interests",
    interestSwimming: "swimming and freediving",
    interestArchery: "archery",
    interestCalisthenics: "calisthenics",
    interestFinance: "finance",
    interestPodcasts: "podcasts",
    interestMusic: "music and electronic piano",
    contactEyebrow: "Contact",
    contactTitle: "Let’s talk",
    contactCopy: "I will be happy to answer questions about my availability and working together.",
  },
};

const defaultLanguage = "pl";
const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const ariaTranslatableElements = document.querySelectorAll("[data-i18n-aria-label]");
const description = document.querySelector('meta[name="description"]');
const copyButtons = document.querySelectorAll("[data-copy]");
const copyStatus = document.querySelector("#copy-status");
const polishText = new Map(
  [...translatableElements].map((element) => [element, element.textContent]),
);
const polishAriaLabels = new Map(
  [...ariaTranslatableElements].map((element) => [element, element.getAttribute("aria-label")]),
);
const copyMessages = {
  pl: {
    phone: "Numer telefonu skopiowany do schowka.",
    email: "Adres e-mail skopiowany do schowka.",
    failure: "Kopiowanie się nie udało. Zaznacz i skopiuj tekst ręcznie.",
  },
  en: {
    phone: translations.en.copyPhoneSuccess,
    email: translations.en.copyEmailSuccess,
    failure: translations.en.copyFailure,
  },
};
let currentLanguage = defaultLanguage;

function hasTranslation(language) {
  return Object.prototype.hasOwnProperty.call(translations, language);
}

function getStoredLanguage() {
  try {
    return localStorage.getItem("cv-web-language");
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem("cv-web-language", language);
  } catch {
    // The page remains usable if the browser blocks storage.
  }
}

function translatePage(language) {
  const dictionary = translations[language] ?? translations[defaultLanguage];

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    const text = dictionary[key] ?? polishText.get(element);

    if (text) {
      element.textContent = text;
    }
  });

  ariaTranslatableElements.forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const label = dictionary[key] ?? polishAriaLabels.get(element);

    if (label) {
      element.setAttribute("aria-label", label);
    }
  });

  document.documentElement.lang = language;
  currentLanguage = language;
  document.title = dictionary.pageTitle;
  description.setAttribute("content", dictionary.pageDescription);

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const temporaryInput = document.createElement("textarea");
  temporaryInput.value = value;
  temporaryInput.setAttribute("readonly", "");
  temporaryInput.style.position = "fixed";
  temporaryInput.style.opacity = "0";
  document.body.append(temporaryInput);
  temporaryInput.select();
  const copied = document.execCommand("copy");
  temporaryInput.remove();

  if (!copied) {
    throw new Error("Copy command was not accepted.");
  }
}

function setLanguage(language) {
  const nextLanguage = hasTranslation(language) ? language : defaultLanguage;
  translatePage(nextLanguage);
  storeLanguage(nextLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await copyText(button.dataset.copy);
      copyStatus.textContent = copyMessages[currentLanguage][button.dataset.copyType];
    } catch {
      copyStatus.textContent = copyMessages[currentLanguage].failure;
    }
  });
});

const savedLanguage = getStoredLanguage();
translatePage(hasTranslation(savedLanguage) ? savedLanguage : defaultLanguage);
