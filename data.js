// Fichier de configuration et de données pour le site de Paul Mottet
// Vous pouvez modifier les textes et les listes ci-dessous pour mettre à jour le site instantanément.

const DATA = {
  profile: {
    name: "Paul MOTTET",
    title: "Vendeur en Boulangerie / Employé Polyvalent",
    phone: "+33 7 74 52 49 10",
    email: "mottet2.paul6@outlook.fr",
    address: "9 Rue Choiseul, 01210 Ferney-Voltaire",
    github: "https://github.com/r0xef", // Votre GitHub principal
    websiteUrl: "https://paul-mottet.github.io/candidature_suisse/", // URL GitHub Pages
    bio: "Professionnel dynamique et polyvalent, avec une expérience confirmée en vente de boulangerie et en restauration. Passionné par le contact client, habitué au rythme soutenu des coups de feu et rigoureux sur les normes HACCP. Vivant à Ferney-Voltaire, je suis entièrement disponible pour des horaires matinaux et physiques en Suisse."
  },
  
  // Liste des documents officiels (CV, lettres de recommandation, certificats de travail)
  // - status: "disponible" (le document est accessible et téléchargeable)
  // - status: "a_venir" (le document s'affiche avec la mention "Bientôt disponible")
  documents: [
    {
      id: "cv",
      name: "Curriculum Vitae",
      file: "CV_boulangerie _01-07-2026.pdf",
      status: "disponible",
      description: "Mon CV détaillé avec mon parcours en vente, boulangerie et restauration."
    },
    {
      id: "lettre_recommandation",
      name: "Lettre de Recommandation",
      file: "documents/lettre_recommandation.pdf",
      status: "a_venir",
      description: "Lettre de recommandation rédigée par un ancien employeur dans la restauration / vente."
    },
    {
      id: "certificat_valmar",
      name: "Certificat de travail - Fournil de Valmar",
      file: "documents/certificat_valmar.pdf",
      status: "a_venir",
      description: "Certificat officiel attestant de mon rôle de vendeur en boulangerie (façonnage, caisse, accueil)."
    },
    {
      id: "certificat_cle_de_sol",
      name: "Certificat de travail - La Clé de Sol",
      file: "documents/certificat_cle_de_sol.pdf",
      status: "a_venir",
      description: "Certificat pour mon poste de serveur en établissement à haute exigence."
    },
    {
      id: "certificat_lounge",
      name: "Certificat de travail - Le Lounge",
      file: "documents/certificat_lounge.pdf",
      status: "a_venir",
      description: "Certificat pour mon poste de cuisinier et gestion autonome de la cuisine."
    }
  ],
  
  // Vos projets informatiques/programmation
  projects: [
    {
      title: "Lexica Android",
      description: "Codé avec Copilot. Application Android native de gestion de vocabulaire et d'extraits littéraires. Inclut des scripts d'analyse de données en Python.",
      tags: ["Kotlin", "Android SDK", "Python"],
      link: "https://github.com/r0xef/LexicaAndroid2"
    },
    {
      title: "Pipeline de traitement OCR",
      description: "Codé avec Copilot. Scripts Python automatisés pour le traitement, le nettoyage et le comptage d'extraits issus de scans OCR de livres.",
      tags: ["Python", "JSON", "Data Extraction"],
      link: "https://github.com/r0xef/LexicaAndroid2/tree/master/mots_et_extraits"
    },
    {
      title: "Site web révision et QCM",
      description: "Codé avec Copilot. Plateforme web interactive d'entraînement aux examens et questionnaires à choix multiples.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      link: "#",
      requiresAuth: true
    },
    {
      title: "Site de Candidature & Dossier Numérique",
      description: "Codé avec Copilot. Conception de ce site web de présentation de profil et de la devanture de dossier A4 avec QR Code dynamique.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "https://github.com/paul-mottet/candidature_suisse"
    }
  ],
  
  // Galerie de photos pour vos travaux dans le bâtiment
  // Par défaut, nous utilisons des images professionnelles libres de droits (Unsplash) pour le rendu visuel.
  // Pour mettre vos propres photos : placez-les dans 'photos/batiment/' et changez l'adresse dans la propriété 'file' (ex: "photos/batiment/ma_photo.jpg")
  batimentPhotos: [
    {
      title: "Rénovation d'Appartement (Ardèche)",
      description: "Rénovation complète : plomberie, électricité, doublage de cloisons et finitions.",
      category: "Rénovation",
      file: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Charpente Traditionnelle",
      description: "Travaux de structure bois et assemblage de charpente de toiture.",
      category: "Charpente",
      file: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pose de Parquet & Menuiserie",
      description: "Pose de revêtement de sol et ajustements des ouvertures bois.",
      category: "Menuiserie",
      file: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Rénovation de Salle de Bain",
      description: "Pose de faïence murale et raccordements de plomberie sanitaire.",
      category: "Carrelage & Plomberie",
      file: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Isolation et Plaquage",
      description: "Mise en place de l'isolation thermique et montage des rails de plaque de plâtre.",
      category: "Isolation",
      file: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Finitions & Peinture",
      description: "Préparation des supports, ponçage et mise en peinture des murs.",
      category: "Finitions",
      file: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
