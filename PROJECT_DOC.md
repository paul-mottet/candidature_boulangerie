# Documentation du Projet - candidature

Ce projet est conçu pour soutenir la candidature de Paul MOTTET en Suisse pour des postes de **Vendeur en Boulangerie / Employé Polyvalent**. Il combine un dossier physique avec une vitrine numérique accessible par QR Code (hébergée sur GitHub Pages).

---

## 🏗️ Structure des Fichiers

```text
candidature/
├── index.html                 # Page web principale (vitrine / portfolio)
├── cover.html                 # Devanture du dossier de candidature (A4 imprimable)
├── style.css                  # Styles CSS unifiés (Charte graphique & Impression)
├── data.js                    # Base de données et configuration simplifiée
├── PROJECT_DOC.md             # Cette documentation (à tenir à jour)
├── CV_boulangerie _01-07-2026.pdf  # Fichier du CV principal
├── documents/                 # Certificats de travail et recommandation (.pdf)
└── photos/
    └── batiment/              # Photos de vos réalisations manuelles (.jpg/.png)
```

---

## 🛠️ Comment Mettre à Jour le Site ?

Tout a été centralisé dans le fichier [`data.js`](file:///c:/Users/r0xef/Desktop/candidature%20_suisse/data.js) pour que les futurs agents IA ou vous-même n'ayez pas à manipuler le HTML complexe d'[`index.html`](file:///c:/Users/r0xef/Desktop/candidature%20_suisse/index.html).

### 1. Modifier vos Coordonnées ou votre Titre
Dans `data.js`, mettez simplement à jour les propriétés de l'objet `profile` :
```javascript
profile: {
  name: "Paul MOTTET",
  title: "Vendeur en Boulangerie / Employé Polyvalent",
  phone: "+33 7 74 52 49 10",
  email: "mottet2.paul6@outlook.fr",
  address: "9 Rue Choiseul, 01210 Ferney-Voltaire",
  github: "https://github.com/r0xef",
  websiteUrl: "https://paul-mottet.github.io/candidature/",
  bio: "...", // Votre biographie d'en-tête
  batimentBio: "...", // Description de la section Bâtiment
  programmingBio: "..." // Description de la section Informatique
}
```

### 2. Ajouter ou Rendre Disponible un Document (Certificats / Lettres)
1. Déposez votre document PDF dans le dossier `documents/`.
2. Ouvrez `data.js` et trouvez l'entrée correspondante dans la liste `documents`.
3. Modifiez le nom du fichier (`file`) si nécessaire, et passez son `status` de `"a_venir"` à `"disponible"`.
*Exemple :*
```diff
    {
      id: "lettre_recommandation",
      name: "Lettre de Recommandation",
-     file: "documents/lettre_recommandation.pdf",
-     status: "a_venir",
+     file: "documents/lettre_recommandation_boulanger.pdf",
+     status: "disponible",
      description: "Lettre de recommandation rédigée par un ancien employeur dans la restauration / vente."
    }
```
Le site affichera automatiquement le bouton **"Consulter le document"** avec un badge vert au lieu du message d'attente.

### 3. Ajouter des Photos ou des Projets de vos Chantiers (Bâtiment)
Le site organise vos réalisations sous forme de **projets** pour éviter de surcharger la page.
1. Créez un dossier pour votre projet dans `photos/batiment/` (ex: `photos/batiment/peinture/`).
2. Déposez-y vos photos. Nommez la photo principale (de couverture) `photo1.jpg` (ou similaire).
3. Ouvrez `data.js` et modifiez ou ajoutez une entrée dans le tableau `batimentProjects` :
```javascript
{
  id: "peinture-finitions",
  title: "Peinture et Enduits",
  description: "Préparation des supports en plaques de plâtre et application de peinture mate.",
  category: "Finitions",
  folder: "photos/batiment/peinture",
  photos: [
    "photos/batiment/peinture/photo1.jpg",
    "photos/batiment/peinture/etape_enduit.jpg",
    "photos/batiment/peinture/rendu_final.jpg"
  ]
}
```

---

## 💡 Solutions Créatives & Techniques Retenues

1. **Architecture "No-Build" & Centralisation (`data.js`)** :
   Pour éliminer le besoin de frameworks complexes (Vite/Next.js) qui ralentissent le chargement et compliquent les éditions par des tiers, le site utilise du Vanilla JS. L'objet `DATA` sert d'unique source de vérité pour le site et la devanture de dossier.
   
2. **Rendu Universel de CV via PDF.js** :
   Pour résoudre les problèmes d'affichage des fichiers PDF (les balises `<iframe>` ou `<embed>` étant souvent bloquées, mal dimensionnées ou forçant le téléchargement sur mobiles iOS/Android), le site charge la bibliothèque standard **PDF.js**. Le document PDF est converti dynamiquement en canevas d'images (canvas) directement sur la page, offrant un aperçu défilable natif, net et identique sur tous les types d'écrans (ordinateurs et téléphones).

3. **Devanture de Dossier Imprimable (`cover.html`)** :
   Création d'une page A4 autonome qui n'est pas liée sur la navigation du site. Elle intègre un script qui génère un QR code à la volée vers l'URL du site en utilisant l'API `qrserver.com`. 
   Grâce aux règles CSS `@media print` dans `style.css`, l'utilisateur n'a qu'à cliquer sur "Imprimer en A4" ou faire `Ctrl+P` dans son navigateur : les boutons disparaissent, les marges de la page A4 sont parfaitement centrées et la devanture s'imprime dans une qualité premium.

4. **Carrousel & Lightbox par Projet sans Dépendances** :
   Pour gérer proprement les dizaines de photos fournies tout en gardant une interface épurée, les images sont regroupées par projet réel. La Lightbox native en Vanilla JS a été étendue pour intégrer une navigation par carrousel (boutons graphiques stylisés avec effet de flou et support des flèches Gauche/Droite du clavier) permettant de faire défiler toutes les photos du projet choisi de manière fluide.

5. **Passage aux Vraies Réalisations Locales** :
   Remplacement complet des images de démonstration Unsplash par les vraies photos locales de Paul Mottet classées par dossiers (Appartement Annonay, Dépendance, Rénovation de Grange, Tiny House, etc.) pour un portfolio 100% authentique.

6. **Positionnement Dynamique des Blocs de la Devanture A4** :
   Le bloc contenant le QR Code, la phrase d'explication et l'adresse URL a été sorti du conteneur central `.cover-body` pour devenir un descendant direct de `.cover-sheet`. Grâce au `display: flex` et `justify-content: space-between` appliqué au format A4, le titre et le sommaire se recentrent agréablement au milieu de la page tandis que le QR Code s'aligne automatiquement au pied du document physique.

---

## 📈 Tâches pour les Prochains Agents
- [x] Remplacer les URL d'images Unsplash dans `data.js` par les chemins locaux des vraies photos de chantiers fournies par Paul.
- [x] Une fois que Paul aura téléversé sa lettre de recommandation et ses certificats de travail physiques, mettre à jour leur `status: "disponible"` dans `data.js`.
- [ ] Aider Paul à configurer son Git et à déployer le site sur GitHub Pages (branche `main` ou `gh-pages` pointant vers le dépôt `paul-mottet/candidature`).
