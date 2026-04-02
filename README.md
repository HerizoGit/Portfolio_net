# Portfolio Herizo — Next.js

Portfolio développeur fullstack .NET prêt à déployer, construit avec **Next.js (App Router)** et **TypeScript**.

## 1) Installation

```bash
npm install
npm run dev
```

Application disponible ensuite sur `http://localhost:3000`.

## 2) Build production

```bash
npm run build
npm run start
```

## 3) Déploiement Vercel

1. Crée un dépôt GitHub avec ce projet.
2. Importe le dépôt dans Vercel.
3. Vercel détectera automatiquement Next.js.
4. Lance le déploiement.

## 4) Personnalisation rapide

Le contenu principal se trouve dans :

- `components/data.ts`

Tu peux y modifier :

- les liens GitHub / LinkedIn / Email
- les projets
- les expériences
- les compétences
- les textes du hero

## 5) Structure

- `app/layout.tsx` : layout global + metadata SEO
- `app/page.tsx` : page d’accueil du portfolio
- `app/globals.css` : design global
- `components/data.ts` : toutes les données à éditer

## 6) Remarque

Les liens GitHub, LinkedIn et Email sont des placeholders et doivent être remplacés avant publication.
