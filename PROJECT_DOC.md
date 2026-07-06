# Documentation du Projet - candidature_suisse

Ce projet est conçu pour soutenir la candidature de Paul MOTTET en Suisse pour des postes de **Vendeur en Boulangerie / Employé Polyvalent**. Il combine un dossier physique avec une vitrine numérique accessible par QR Code (hébergée sur GitHub Pages).

---

## 🏗️ Structure des Fichiers

```text
candidature_suisse/
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
  websiteUrl: "https://paul-mottet.github.io/candidature_suisse/",
  bio: "..."
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

### 3. Ajouter des Photos de vos Chantiers (Bâtiment)
Le site gère un nombre illimité de photos. 
1. Placez votre photo (par exemple `travail_peinture.jpg`) dans le dossier `photos/batiment/`.
2. Ajoutez une ligne dans le tableau `batimentPhotos` dans `data.js` :
```javascript
{
  title: "Peinture et Enduits",
  description: "Préparation des plaques de plâtre et application de peinture mate.",
  category: "Finitions",
  file: "photos/batiment/travail_peinture.jpg"
}
```

---

## 💡 Solutions Créatives & Techniques Retenues

1. **Architecture "No-Build" & Centralisation (`data.js`)** :
   Pour éliminer le besoin de frameworks complexes (Vite/Next.js) qui ralentissent le chargement et compliquent les éditions par des tiers, le site utilise du Vanilla JS. L'objet `DATA` sert d'unique source de vérité pour le site et la devanture de dossier.
   
2. **Visualisation Double-Couche du CV** :
   Sur grand écran, le CV s'affiche directement dans un cadre stylisé en format papier grâce à une balise `<iframe>`. Sur mobile (où les navigateurs peinent à afficher les PDF de manière interactive), le CSS désactive le cadre et affiche un bouton de téléchargement et de consultation plein écran très ergonomique.

3. **Devanture de Dossier Imprimable (`cover.html`)** :
   Création d'une page A4 autonome qui n'est pas liée sur la navigation du site. Elle intègre un script qui génère un QR code à la volée vers l'URL du site en utilisant l'API `qrserver.com`. 
   Grâce aux règles CSS `@media print` dans `style.css`, l'utilisateur n'a qu'à cliquer sur "Imprimer en A4" ou faire `Ctrl+P` dans son navigateur : les boutons disparaissent, les marges de la page A4 sont parfaitement centrées et la devanture s'imprime dans une qualité premium.

4. **Lightbox d'images Native et Légère** :
   Au lieu d'importer une bibliothèque lourde, un système de Lightbox a été implémenté en JavaScript natif (20 lignes de code) pour permettre l'agrandissement plein écran des photos de travaux manuels avec gestion de la touche Échap et des clics extérieurs pour la fermeture.

5. **Photos de Remplacement Haut de Gamme** :
   En attendant les vraies photos de Paul Mottet, nous avons injecté des URL Unsplash thématiques (charpente, maçonnerie, rénovation) libres de droits pour offrir une démo visuelle parfaite et professionnelle au premier démarrage.

---

## 📈 Tâches pour les Prochains Agents
- [ ] Remplacer les URL d'images Unsplash dans `data.js` par les chemins locaux des vraies photos de chantiers fournies par Paul.
- [ ] Une fois que Paul aura téléversé sa lettre de recommandation et ses certificats de travail physiques, mettre à jour leur `status: "disponible"` dans `data.js`.
- [ ] Aider Paul à configurer son Git et à déployer le site sur GitHub Pages (branche `main` ou `gh-pages` pointant vers le dépôt `paul-mottet/candidature_suisse`).
