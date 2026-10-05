# 🌿 Bien-être en Combrailles

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=github&logoColor=white)](https://pages.github.com/)
[![Formspree](https://img.shields.io/badge/Formspree-E5122E?logo=formspree&logoColor=white)](https://formspree.io/)

🌐 **https://bienetreencombrailles.fr**

**[🇫🇷 Français](#-français)** · **[🇬🇧 English](#-english)**

---

## 🇫🇷 Français

### Présentation

**Bien-être en Combrailles** est le site vitrine d'une activité d'aide à domicile et d'accompagnement bienveillant dans les Combrailles (Puy-de-Dôme). Il présente les prestations, les tarifs, la présence de nuit et permet aux familles de prendre contact via un formulaire.

Le site est **100 % statique** (HTML, CSS, un peu de JavaScript), sans framework ni étape de build, et il est hébergé sur **GitHub Pages** avec un nom de domaine personnalisé.

### Fonctionnalités

- **Page d'accueil** en une seule page avec ancres : accueil, prestations, présence de nuit, tarifs, avis, contact
- **Formulaire de contact** envoyé via [Formspree](https://formspree.io/) (aucun serveur à gérer)
- **Responsive** : menu mobile (burger) accessible (`aria-expanded`, `aria-label`)
- **Navigation active** au défilement (IntersectionObserver) sur la page d'accueil
- **Année du pied de page** mise à jour automatiquement
- **SEO** : balises meta, Open Graph / Twitter Card, `sitemap.xml`, `robots.txt`, vérification Google Search Console
- **Pages légales** : mentions légales, CGV (avec médiation de la consommation CM2C), politique de confidentialité, RGPD
- Liens vers les réseaux sociaux (Facebook, Instagram, TikTok) et les avis Google

### Structure du projet

```
/
├── index.html               # Page d'accueil (one-page)
├── FORM.html                # Formulaire de contact (Formspree)
├── cgv.html                 # Conditions générales de vente
├── mentions-legales.html    # Mentions légales
├── confidentialite.html     # Politique de confidentialité
├── rgpd.html                # Informations RGPD
├── styles.css               # Feuille de style unique
├── script.js                # Menu mobile, année, lien actif
├── images/                  # Logos, photos, visuels (prestations, tarifs…)
├── sitemap.xml              # Plan du site pour les moteurs de recherche
├── robots.txt               # Règles d'exploration
├── CNAME                    # Domaine personnalisé GitHub Pages
├── googleafc7aaf282d06be8.html  # Vérification Google Search Console
└── README.md
```

### Technologies

| Outil | Rôle |
|---|---|
| HTML5 / CSS3 | Structure et mise en page |
| JavaScript (vanilla) | Interactions légères (`script.js`) |
| Google Fonts | Polices *Fraunces* et *Work Sans* |
| Formspree | Réception des messages du formulaire |
| GitHub Pages | Hébergement + HTTPS |

### Lancer le site en local

Aucune installation n'est nécessaire.

```bash
git clone https://github.com/Moldu77/BienetreeCombrailles.fr.git
cd BienetreeCombrailles.fr
```

Puis, au choix :

- ouvrir `index.html` directement dans le navigateur ;
- ou lancer un petit serveur local (recommandé, pour que les liens se comportent comme en ligne) :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

L'extension **Live Server** de VS Code fonctionne aussi.

### Déploiement (GitHub Pages)

1. Pousser les modifications sur la branche `main`.
2. Dans le dépôt GitHub : **Settings → Pages**.
3. Source : **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Le fichier `CNAME` contient le domaine `bienetreencombrailles.fr` ; cocher **Enforce HTTPS**.
5. Côté registrar, faire pointer le DNS du domaine vers GitHub Pages (enregistrements `A` / `CNAME`).

Chaque push sur `main` redéploie automatiquement le site en quelques minutes.

### Maintenance

- **Ajouter une page** : copier une page existante (en-tête, menu et pied de page inclus), puis l'ajouter à `sitemap.xml`.
- **Modifier le formulaire** : l'adresse Formspree se trouve dans l'attribut `action` du `<form>` de `FORM.html`.
- **Images** : placer les fichiers dans `images/`. Attention : GitHub Pages est **sensible à la casse** et les noms contenant des espaces ou accents doivent être référencés exactement.
- **Pages légales** : à tenir à jour en cas de changement d'adresse, de SIRET, de tarifs ou de médiateur.

### Auteur

Site conçu et développé par **Moldu77** (Maxym Duculty).

### Contact

Pour toute question concernant le site : maxym.duculty15@gmail.com

---

## 🇬🇧 English

### Overview

**Bien-être en Combrailles** is the showcase website for a home-assistance and caring-support business in the Combrailles area (Puy-de-Dôme, France). It presents the services, pricing and overnight presence, and lets families get in touch through a contact form.

The site is **100% static** (HTML, CSS, a little JavaScript), with no framework and no build step. It is hosted on **GitHub Pages** with a custom domain.

### Features

- **One-page home** with anchors: home, services, overnight presence, pricing, reviews, contact
- **Contact form** powered by [Formspree](https://formspree.io/) (no server to maintain)
- **Responsive**: accessible mobile burger menu (`aria-expanded`, `aria-label`)
- **Active nav link** on scroll (IntersectionObserver) on the home page
- **Footer year** updated automatically
- **SEO**: meta tags, Open Graph / Twitter Card, `sitemap.xml`, `robots.txt`, Google Search Console verification
- **Legal pages**: legal notice, terms of sale (CGV, incl. CM2C consumer mediation), privacy policy, GDPR
- Links to social networks (Facebook, Instagram, TikTok) and Google reviews

> The site content itself is in French, as it targets a local French audience.

### Project structure

```
/
├── index.html               # Home page (one-page)
├── FORM.html                # Contact form (Formspree)
├── cgv.html                 # Terms and conditions of sale
├── mentions-legales.html    # Legal notice
├── confidentialite.html     # Privacy policy
├── rgpd.html                # GDPR information
├── styles.css               # Single stylesheet
├── script.js                # Mobile menu, footer year, active link
├── images/                  # Logos, photos, visuals (services, pricing…)
├── sitemap.xml              # Sitemap for search engines
├── robots.txt               # Crawler rules
├── CNAME                    # GitHub Pages custom domain
├── googleafc7aaf282d06be8.html  # Google Search Console verification
└── README.md
```

### Tech stack

| Tool | Purpose |
|---|---|
| HTML5 / CSS3 | Structure and layout |
| Vanilla JavaScript | Light interactions (`script.js`) |
| Google Fonts | *Fraunces* and *Work Sans* typefaces |
| Formspree | Receives contact form submissions |
| GitHub Pages | Hosting + HTTPS |

### Run locally

Nothing to install.

```bash
git clone https://github.com/Moldu77/BienetreeCombrailles.fr.git
cd BienetreeCombrailles.fr
```

Then either:

- open `index.html` directly in your browser;
- or start a small local server (recommended, so links behave like in production):

```bash
python -m http.server 8000
# then open http://localhost:8000
```

The VS Code **Live Server** extension works too.

### Deployment (GitHub Pages)

1. Push your changes to the `main` branch.
2. In the GitHub repository: **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The `CNAME` file holds the domain `bienetreencombrailles.fr`; tick **Enforce HTTPS**.
5. At your registrar, point the domain's DNS to GitHub Pages (`A` / `CNAME` records).

Every push to `main` redeploys the site automatically within a few minutes.

### Maintenance

- **Add a page**: copy an existing page (header, menu and footer included), then add it to `sitemap.xml`.
- **Change the form endpoint**: the Formspree URL is in the `action` attribute of the `<form>` in `FORM.html`.
- **Images**: put files in `images/`. Note that GitHub Pages is **case-sensitive**, and file names with spaces or accents must be referenced exactly.
- **Legal pages**: keep them up to date if the address, SIRET number, prices or mediator change.

### Author

Designed and developed by **Moldu77** (Maxym Duculty).

### Contact

For any question about the website: maxym.duculty15@gmail.com
