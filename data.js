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
    bio: "Professionnel dynamique et polyvalent, avec une expérience confirmée en vente en boulangerie et en restauration. Passionné par le contact client, habitué au rythme soutenu des coups de feu et rigoureux sur les normes HACCP. Vivant à Ferney-Voltaire, je suis disponible immédiatement.",
    batimentBio: "Au-delà de la vente et de la restauration, j'ai également de l'expérience dans les métiers du bâtiment. J'y ai travaillé un peu comme salarié, mais surtout comme sous-traitant (pour des entreprises comme Carrelage Mallisard, SARL Melconfort, Alena, Mobilier Singulier...) puis comme indépendant. Cela m'a permis d'acquérir un savoir-faire dans différents corps de métier et de réaliser des projets personnels, comme l'acquisition et la rénovation d'un appartement en Ardèche. Ces expériences témoignent de ma rigueur, de mon habileté manuelle et de ma capacité à travailler physiquement.",
    programmingBio: "Autodidacte en informatique et programmation, j'aime développer des outils pour structurer et analyser des données littéraires ou créer des applications mobiles."
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
      id: "lettre_recommandation_buffalo",
      name: "Lettre de Recommandation - Buffalo Grill",
      file: "documents/lettre_recommendation_buffalo.pdf",
      status: "disponible",
      description: "Lettre rédigée par la directrice du restaurant Buffalo Grill de Bourg-lès-Valence."
    },
    {
      id: "certificat_valmar",
      name: "Certificat de travail - Fournil de Valmar",
      file: "documents/certificat_travail_valmar.pdf",
      status: "disponible",
      description: "Certificat pour mon poste de vendeur en boulangerie."
    },
    {
      id: "certificat_cle_de_sol",
      name: "Certificat de travail - La Clé de Sol",
      file: "documents/certificat_travail_clee_de_sol.pdf",
      status: "disponible",
      description: "Certificat pour mon poste de serveur."
    },
    {
      id: "certificat_lounge",
      name: "Certificat de travail - Le Lounge",
      file: "documents/certificat_travail_le_lounge.pdf",
      status: "disponible",
      description: "Certificat pour mon poste de cuisinier, dans cet établissement j'étais initialement serveur et mon passage en cuisine n'a pas été formalisé administrativement."
    },
    {
      id: "certificat_buffalo",
      name: "Certificat de travail - Buffalo Grill",
      file: "documents/certificat_travail_buffalo.pdf",
      status: "disponible",
      description: "Certificat pour mon poste d'agent de restauration et grillardin."
    },
    {
      id: "certificat_lidl",
      name: "Certificat de travail - Lidl",
      file: "documents/certificat_travail_lidl.pdf",
      status: "disponible",
      description: "Certificat de travail pour mon poste d'opérateur logistique."
    },
    {
      id: "certificat_aml_plongeur",
      name: "Certificat de travail - Le Coulant Baraqué",
      file: "documents/certificat_travail_fondu.pdf",
      status: "disponible",
      description: "Certificat de travail pour mon poste de plongeur."
    },
    {
      id: "diplome_bac",
      name: "Attestation de réussite - Baccalauréat",
      file: "documents/BACCALAUREAT GENERAL_240226_204710.pdf",
      status: "disponible",
      description: "Diplôme du Baccalauréat Général, série Scientifique."
    }
  ],

  // Vos projets informatiques/programmation
  projects: [
    {
      title: "Lexica Android",
      description: "Codé avec Copilot. Application Android native de gestion de vocabulaire et d'extraits littéraires. Inclut des scripts d'analyse de données en Python.",
      tags: ["Kotlin", "Android SDK", "Python"],
      link: "https://github.com/paul-mottet/LexicaAndroid2"
    },
    {
      title: "Pipeline de traitement OCR",
      description: "Codé avec Copilot. Scripts Python automatisés pour le traitement, le nettoyage et le comptage d'extraits issus de scans OCR de livres.",
      tags: ["Python", "JSON", "Data Extraction"],
      link: "https://github.com/paul-mottet/LexicaAndroid2/tree/master/mots_et_extraits"
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

  // Galerie de photos pour vos travaux dans le bâtiment (regroupés par projet)
  batimentProjects: [
    {
      id: "appartement-annonay",
      title: "Rénovation d'Appartement (Annonay)",
      description: "Achat et rénovation complète d'un appartement. Travaux réalisés : démolition, isolation, plaques de plâtre (placo), électricité générale, plomberie, réstauration du plancher, création d'une salle de bain.",
      category: "Rénovation complète",
      folder: "photos/batiment/Appart-Annonay",
      photos: [
        "photos/batiment/Appart-Annonay/photo1.jpg",
        "photos/batiment/Appart-Annonay/20230227_125731.jpg",
        "photos/batiment/Appart-Annonay/20230227_125740.jpg",
        "photos/batiment/Appart-Annonay/20230227_130107.jpg",
        "photos/batiment/Appart-Annonay/20230227_173039.jpg",
        "photos/batiment/Appart-Annonay/20230228_135421.jpg",
        "photos/batiment/Appart-Annonay/20230310_093251.jpg",
        "photos/batiment/Appart-Annonay/20240516_105858.jpg",
        "photos/batiment/Appart-Annonay/20250805_172428.jpg"
      ]
    },
    {
      id: "construction-dependance",
      title: "Construction d'une Dépendance",
      description: "Dépendance habitable de 20m² : terrassement, coulage des fondations et de la valide en béton armé, élévation des murs en parpaings, conception et pose d'une charpente bois traditionnelle, réalisation de la couverture de toiture et câblage de l'installation électrique. C'est le plus gros chantier que j'ai réalisé à mon compte.",
      category: "Gros œuvre & Second œuvre",
      folder: "photos/batiment/construction-dependance",
      photos: [
        "photos/batiment/construction-dependance/photooo1.jpg",
        "photos/batiment/construction-dependance/20230417_115145.jpg",
        "photos/batiment/construction-dependance/20230603_193448.jpg",
        "photos/batiment/construction-dependance/20231207_094218.jpg",
        "photos/batiment/construction-dependance/20240210_143042.jpg",
        "photos/batiment/construction-dependance/20240418_104243.jpg",
        "photos/batiment/construction-dependance/20240418_153136.jpg"
      ]
    },
    {
      id: "renovation-grange",
      title: "Rénovation d'une Grange (Atelier)",
      description: "Rénovation lourde d'une ancienne grange en pierre brute pour la transformer en atelier. Travaux réalisés : restauration et rejointoiement des murs de pierre traditionnelle, maçonnerie, pose des linteaux et coulages des arase,dépose complète de l'ancienne toiture dégradée, pose de la nouvelle charpente bois et couverture.",
      category: "Rénovation & Charpente",
      folder: "photos/batiment/renovation-grange",
      photos: [
        "photos/batiment/renovation-grange/photooooo1.jpg",
        "photos/batiment/renovation-grange/20220726_151937.jpg",
        "photos/batiment/renovation-grange/20220920_121245.jpg",
        "photos/batiment/renovation-grange/20221031_145742.jpg",
        "photos/batiment/renovation-grange/20221031_145758.jpg",
        "photos/batiment/renovation-grange/20231003_121513.jpg",
        "photos/batiment/renovation-grange/20231003_122103.jpg",
        "photos/batiment/renovation-grange/20231003_122240.jpg"
      ]
    },
    {
      id: "tiny-house",
      title: "Construction de Tiny House",
      description: "Construction d'une Tiny House de 12 m² avec mezzanine à partir de matériaux de récupération. Conception et montage de la structure en acier soudé, charpente bois, aménagement et réseaux.",
      category: "Ossature Bois",
      folder: "photos/batiment/tiny-house",
      photos: [
        "photos/batiment/tiny-house/photooooo1.jpg",
        "photos/batiment/tiny-house/20260407_181058.jpg",
        "photos/batiment/tiny-house/20260410_123634.jpg",
        "photos/batiment/tiny-house/20260707_135403.jpg"
      ]
    },
    {
      id: "autres-travaux",
      title: "Autres chantiers & interventions",
      description: "quelque uns des autres chantier auxquels j'ai pu participer à mon compte ou dans le cadre de sous-traitances : ragréage et pose de carrelage au sol, travaux maçonnerie, réalisation et pose de plateau en bois pour restaurant, et finitions diverses.",
      category: "Polyvalent & Finitions",
      folder: "photos/batiment/autres",
      photos: [
        "photos/batiment/autres/photoo1.jpg",
        "photos/batiment/autres/20210823_163645.jpg",
        "photos/batiment/autres/20210825_152518.jpg",
        "photos/batiment/autres/20210826_082801.jpg",
        "photos/batiment/autres/20210826_082809.jpg",
        "photos/batiment/autres/20210826_082819.jpg",
        "photos/batiment/autres/20220922_134236.jpg",
        "photos/batiment/autres/20221005_141932.jpg",
        "photos/batiment/autres/20221005_141942.jpg",
        "photos/batiment/autres/20221020_174925.jpg",
        "photos/batiment/autres/20221101_155731.jpg"
      ]
    }
  ]
};
