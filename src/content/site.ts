/**
 * TOUT le contenu du site est ici.
 * Pour adapter le site, modifie ce fichier : textes, prix, liens, numéro WhatsApp.
 * Les éléments marqués « EXEMPLE » sont des espaces réservés à remplacer
 * par les vraies informations de Lucien avant la mise en ligne publique.
 */

export const config = {
  name: "Lucien Billong",
  role: "Media Buyer & formateur Meta Ads / Google Ads",
  // Numéro WhatsApp au format international, sans + ni espaces. À REMPLACER.
  whatsappNumber: "33600000000",
  // Lien Calendly (ou Cal.com) pour l'appel découverte. Laisse vide pour utiliser
  // le formulaire qui envoie la demande sur WhatsApp. Peut aussi être défini via
  // la variable d'environnement NEXT_PUBLIC_BOOKING_URL sur Vercel.
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  // Lien vers le guide gratuit (PDF, Notion…). Affiché après l'inscription.
  guideUrl: process.env.NEXT_PUBLIC_GUIDE_URL ?? "",
  // Photo de Lucien : place le fichier dans /public (ex. /lucien.jpg) puis indique son chemin.
  photo: "/lucien.png",
  instagram:"https://www.instagram.com/lucienbillong/",
  email: "contact@exemple.com", // À REMPLACER
};

export const nav = [
  { label: "Mon histoire", href: "#histoire" },
  { label: "Formation", href: "#formation" },
  { label: "Résultats", href: "#resultats" },
  { label: "Méthode", href: "#methode" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  kicker: "Media buying · Meta Ads · Google Ads",
  titleStart: "De salarié à",
  titleAccent: "freelance media buyer",
  titleEnd: ", sans quitter ton CDI.",
  subtitle:
    "Je te forme au media buying et je t'accompagne jusqu'à la signature de ton premier client, en parallèle de ton travail.",
  primaryCta: "Réserver mon appel découverte",
  secondaryCta: "Recevoir le guide gratuit",
  stats: [
    { value: "2 000 – 4 000 €", label: "par mois générés à côté de mon CDI" },
    { value: "Meta + Google", label: "les deux régies maîtrisées" },
    { value: "1er client", label: "l'objectif concret de l'accompagnement" },
  ],
  tags: [
    "Meta Ads",
    "Google Ads",
    "Choix de niche",
    "Prospection",
    "Tracking & reporting",
    "Signature client",
    "Liberté géographique",
  ],
};

export const story = {
  label: "Mon histoire",
  title: "À 24 ans, je gagnais trop peu pour me loger.",
  accent: "Deux ans plus tard, je voyage tous les deux mois.",
  paragraphs: [
    "Comme beaucoup, j'étais salarié avec un salaire qui ne suivait pas. Je n'avais pas le capital pour monter une grosse entreprise, ni le temps de tout quitter.",
    "Le media buying m'a permis de générer un revenu complémentaire le soir et le week-end, en gérant les publicités Meta et Google d'entreprises locales. Puis d'en vivre.",
    "Aujourd'hui, je transmets exactement ce chemin : une compétence qui se vend, une méthode pour trouver ses clients, et un accompagnement jusqu'au premier contrat signé.",
  ],
  values: [
    {
      code: "V.01",
      title: "Concret avant tout",
      text: "On apprend sur de vraies campagnes et de vrais prospects, pas sur des slides.",
    },
    {
      code: "V.02",
      title: "Compatible CDI",
      text: "Le programme est pensé pour quelques heures par semaine, le soir et le week-end.",
    },
    {
      code: "V.03",
      title: "Transparence",
      text: "Je montre mes chiffres, mes erreurs et ce qui marche vraiment aujourd'hui.",
    },
    {
      code: "V.04",
      title: "Résultat mesurable",
      text: "L'objectif n'est pas un certificat : c'est ton premier client signé.",
    },
  ],
};

export const mediaBuying = {
  label: "Le métier",
  title: "Le media buying, c'est quoi ?",
  intro:
    "Les entreprises veulent des clients. Le media buyer achète de l'espace publicitaire sur Facebook, Instagram et Google, et le transforme en rendez-vous, en appels ou en ventes. Une compétence rare, rentable et 100 % en ligne.",
  points: [
    { title: "Une demande forte", text: "Artisans, restaurants, cliniques, e-commerce : toutes les entreprises locales ont besoin de clients." },
    { title: "Pas de stock, pas de capital", text: "Ton outil de travail, c'est un ordinateur et le budget publicitaire de ton client." },
    { title: "Des revenus récurrents", text: "Les clients paient chaque mois pour la gestion de leurs campagnes." },
    { title: "Depuis n'importe où", text: "Tout se gère en ligne : tu choisis où et quand tu travailles." },
  ],
};

export const formation = {
  label: "La formation",
  title: "Un programme en six modules,",
  accent: "du zéro au premier client.",
  modules: [
    {
      title: "Les fondations du media buying",
      text: "Comprendre le métier, le marché et comment un freelance se rémunère.",
      tags: ["Mindset", "Business model", "Tarifs"],
    },
    {
      title: "Meta Ads de A à Z",
      text: "Gestionnaire de publicités, structure de campagne, audiences, créas et optimisation.",
      tags: ["Facebook", "Instagram", "Pixel"],
    },
    {
      title: "Google Ads pour les entreprises locales",
      text: "Campagnes Search, mots-clés, annonces et suivi des appels.",
      tags: ["Search", "Mots-clés", "Conversions"],
    },
    {
      title: "Choisir sa niche",
      text: "Les niches les plus rentables en freelance (plomberie, santé, immobilier…) et comment se positionner.",
      tags: ["Niches", "Offre", "Positionnement"],
    },
    {
      title: "Prospecter et signer",
      text: "Scripts de prospection, appel de vente, proposition et contrat.",
      tags: ["Prospection", "Closing", "Contrat"],
    },
    {
      title: "Délivrer et fidéliser",
      text: "Lancer les campagnes du client, faire un reporting clair et garder ses clients dans la durée.",
      tags: ["Reporting", "Rétention", "Scaling"],
    },
  ],
  offers: [
    {
      name: "Guide gratuit",
      price: "0 €",
      note: "Pour découvrir le métier",
      features: ["Les bases du media buying", "Les meilleures niches pour débuter", "Ma checklist de lancement"],
      cta: "Recevoir le guide",
      href: "#guide",
      highlight: false,
    },
    {
      name: "Formation complète",
      price: "Prix à définir", // EXEMPLE — à remplacer
      note: "Accès aux 6 modules",
      features: ["Vidéos et templates", "Communauté d'élèves", "Sessions de questions-réponses", "Accès à vie aux mises à jour"],
      cta: "Réserver un appel",
      href: "#appel",
      highlight: true,
    },
    {
      name: "Accompagnement 1:1",
      price: "Sur candidature",
      note: "Jusqu'au 1er client signé",
      features: ["Tout le contenu de la formation", "Suivi individuel chaque semaine", "Relecture de tes prospections", "Aide à la signature"],
      cta: "Candidater",
      href: "#appel",
      highlight: false,
    },
  ],
};

/**
 * EXEMPLES — à remplacer par les vrais témoignages et captures des élèves
 * (avec leur accord). Le badge « Exemple » disparaît quand isExample = false.
 */
export const results = {
  label: "Résultats des élèves",
  title: "Ils ont signé leur",
  accent: "premier client.",
  isExample: true,
  testimonials: [
    {
      name: "Prénom N.",
      role: "Salarié en CDI · niche à préciser",
      quote: "Texte du témoignage à remplacer : situation de départ, ce que la formation a changé, premier client signé.",
      result: "Résultat à compléter",
    },
    {
      name: "Prénom N.",
      role: "Étudiante · niche à préciser",
      quote: "Texte du témoignage à remplacer : situation de départ, ce que la formation a changé, premier client signé.",
      result: "Résultat à compléter",
    },
    {
      name: "Prénom N.",
      role: "Reconversion · niche à préciser",
      quote: "Texte du témoignage à remplacer : situation de départ, ce que la formation a changé, premier client signé.",
      result: "Résultat à compléter",
    },
  ],
  screenshots: [
    "Capture : premier contrat signé",
    "Capture : tableau de bord Meta Ads",
    "Capture : message d'un élève",
    "Capture : virement client",
  ],
};

export const method = {
  label: "La méthode",
  title: "Du CDI au premier client,",
  accent: "en quatre temps.",
  steps: [
    { title: "Apprendre", text: "Tu maîtrises Meta Ads et Google Ads avec des cas concrets." },
    { title: "Se positionner", text: "Tu choisis une niche rentable et tu construis une offre claire." },
    { title: "Prospecter", text: "Tu contactes les bonnes entreprises avec des scripts éprouvés." },
    { title: "Signer et délivrer", text: "Tu signes ton premier client et tu lances ses campagnes avec mon aide." },
  ],
};

export const leadMagnet = {
  label: "Guide gratuit",
  title: "Le guide pour démarrer",
  accent: "le media buying.",
  text: "Les niches qui paient, les outils indispensables et la checklist que j'aurais aimé avoir à mes débuts. Gratuit, envoyé directement.",
  bullets: ["Les 5 niches les plus simples pour débuter", "Combien facturer ton premier client", "La checklist de lancement d'une campagne"],
};

export const faq = {
  label: "FAQ",
  title: "Questions fréquentes.",
  items: [
    {
      q: "Je n'ai aucune compétence en marketing, c'est pour moi ?",
      a: "Oui. Le programme part de zéro. Ce qui compte, c'est ta régularité et quelques heures disponibles chaque semaine.",
    },
    {
      q: "Combien de temps faut-il y consacrer avec un CDI ?",
      a: "Compte 5 à 8 heures par semaine, le soir et le week-end. Le programme est construit pour ça.",
    },
    {
      q: "Faut-il un budget publicitaire de départ ?",
      a: "Non. Tu travailles avec le budget publicitaire de tes clients. Ton seul investissement est la formation et ton temps.",
    },
    {
      q: "En combien de temps peut-on signer un premier client ?",
      a: "Cela dépend de ton implication et de ta niche. On fixe ensemble un objectif réaliste lors de l'appel découverte.",
    },
    {
      q: "Comment se passe l'appel découverte ?",
      a: "C'est un appel gratuit d'environ 30 minutes pour faire le point sur ta situation et voir si l'accompagnement te correspond. Sans engagement.",
    },
  ],
};

export const booking = {
  label: "Appel découverte",
  title: "Parlons de ton",
  accent: "premier client.",
  text: "Un appel gratuit de 30 minutes pour faire le point sur ta situation, ton objectif et la meilleure façon d'y arriver. Sans engagement.",
  situations: ["Salarié en CDI", "Étudiant", "Déjà freelance", "En recherche d'emploi", "Autre"],
  slots: ["En semaine, le soir", "Le samedi", "Le dimanche", "Peu importe"],
};
