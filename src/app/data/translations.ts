export type Lang = 'fr' | 'en';

// Chaque clé pointe vers un objet { fr, en }.
// Convention : on nomme les clés "section.element" pour s'y retrouver.
export const TRANSLATIONS: Record<string, { fr: string; en: string }> = {
  // --- Header (navigation) ---
  'nav.about':    { fr: 'Profil',       en: 'About' },
  'nav.skills':   { fr: 'Compétences',  en: 'Skills' },
  'nav.projects': { fr: 'Projets',      en: 'Projects' },
  'nav.contact':  { fr: 'Contact',      en: 'Contact' },

  // --- Hero ---
  'hero.badge':      { fr: 'Ouverte aux opportunités', en: 'Open to opportunities' },
  'hero.title1':    { fr: 'Développeuse',           en: 'Full-stack' },
  'hero.titleGrad': { fr: 'full-stack',             en: 'developer' },
  'hero.title2':    { fr: '.',                      en: '.' },
  'hero.lead': {
      fr: "Ingénieure informatique et développeuse full-stack. Je conçois des applications web complètes — du frontend à la base de données — et j'y intègre l'intelligence artificielle pour créer des produits utiles, fiables et pensés pour l'utilisateur.",
      en: 'Software engineer and full-stack developer. I build complete web applications — from frontend to database — and integrate AI to create useful, reliable, user-focused products.',
    },


  'hero.ctaProjects': { fr: 'Découvrir mes projets', en: 'View my projects' },
  'hero.ctaContact':  { fr: 'Me contacter',          en: 'Get in touch' },

  // --- About ---
  'about.eyebrow':  { fr: '01 — Profil', en: '01 — About' },
  'about.title1':    { fr: 'Développeuse',   en: 'Full-stack' },
  'about.titleGrad': { fr: 'full-stack',     en: 'developer' },
  'about.p1': {
    fr: "Ingénieure informatique, je donne vie à des produits web complets : une interface élégante et fluide côté frontend, une API robuste et une base de données bien pensée côté backend. Et parce que l'IA change la donne, je l'intègre pour rendre les applications plus intelligentes et plus utiles.",
    en: 'Software engineer, I bring complete web products to life: an elegant, fluid interface on the frontend, a robust API and a well-designed database on the backend. And because AI is changing the game, I integrate it to make applications smarter and more useful.',
  },
  'about.p2': {
    fr: "Ce qui m'anime : un code lisible, une architecture qui respire, et ces détails d'interface qu'on ne remarque pas mais qui rendent un produit agréable à utiliser.",
    en: 'What drives me: readable code, an architecture that breathes, and the interface details you never notice but that make a product a pleasure to use.',
  },
  'about.cv':    { fr: 'Télécharger mon CV', en: 'Download my resume' },
  'about.stat1': { fr: "années d'expérience en développement", en: 'years of development experience' },
  'about.stat2': { fr: 'projets livrés', en: 'projects shipped' },
  'about.stat3': { fr: 'orientée détail & qualité de code', en: 'focused on detail & code quality' },

  // --- Skills ---
  'skills.eyebrow': { fr: '02 — Compétences', en: '02 — Skills' },
  'skills.title':   { fr: 'La boîte à outils', en: 'The toolbox' },
  'skills.lead': {
    fr: "Les technologies que j'utilise au quotidien, du frontend au backend.",
    en: 'The technologies I use daily, from frontend to backend.',
  },

  // --- Projects ---
  'projects.eyebrow': { fr: '03 — Projets', en: '03 — Projects' },
  'projects.title':   { fr: 'Réalisations sélectionnées', en: 'Selected work' },
  'projects.lead': {
    fr: "Une sélection de projets qui montrent ma façon de résoudre des problèmes.",
    en: 'A selection of projects that show how I solve problems.',
  },
  'projects.featured': { fr: 'Projet phare', en: 'Featured' },
  'projects.demo':     { fr: 'Démo', en: 'Live demo' },
  'projects.code':     { fr: 'Code', en: 'Source code' },

  // --- Contact ---
  'contact.eyebrow':   { fr: '04 — Contact', en: '04 — Contact' },
  'contact.title1':    { fr: 'Travaillons', en: "Let's work" },
  'contact.titleGrad': { fr: 'ensemble', en: 'together' },
  'contact.lead': {
    fr: "Un projet, une opportunité, ou juste envie d'échanger ? Écris-moi.",
    en: 'A project, an opportunity, or just want to chat? Reach out.',
  },
  'contact.fieldName':    { fr: 'Nom', en: 'Name' },
  'contact.fieldEmail':   { fr: 'Email', en: 'Email' },
  'contact.fieldMessage': { fr: 'Message', en: 'Message' },
  'contact.phName':       { fr: 'Votre nom', en: 'Your name' },
  'contact.phMessage':    { fr: 'Votre message...', en: 'Your message...' },
  'contact.send':         { fr: 'Envoyer le message', en: 'Send message' },
  'contact.confirm':      { fr: "Votre client mail s'est ouvert. À bientôt !", en: 'Your mail client just opened. Talk soon!' },
  'contact.seeProfile': { fr: 'Voir mon profil ↗', en: 'View my profile ↗' },
  'contact.seeCode':    { fr: 'Voir mon code ↗',   en: 'View my code ↗' },
  // --- Footer ---
  'footer.note': { fr: 'Conçu avec Angular', en: 'Built with Angular' },
  'footer.top':  { fr: 'Haut de page', en: 'Back to top' },
};