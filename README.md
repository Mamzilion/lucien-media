# Site — Lucien Billong (Media Buyer & formateur Meta Ads / Google Ads)

Landing page Next.js 15 + Tailwind CSS 4, thème clair/sombre, prête pour Vercel.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Personnaliser

Tout le contenu est dans **`src/content/site.ts`** :

- `config.whatsappNumber` : numéro WhatsApp de Lucien (format international sans `+`, ex. `237690000000`).
- `config.email`, `config.photo` (mettre la photo dans `/public`, ex. `/lucien.jpg`).
- `formation.offers` : prix des offres.
- `results` : remplacer les témoignages d'exemple par de vrais avis (avec accord des élèves), puis passer `isExample` à `false`.

Les couleurs sont dans `src/app/globals.css` (variables `--accent`, `--deep`, etc.).

## Variables d'environnement (Vercel → Settings → Environment Variables)

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_BOOKING_URL` | Lien Calendly / Cal.com. Si défini, le calendrier s'affiche à la place du formulaire WhatsApp. |
| `NEXT_PUBLIC_GUIDE_URL` | Lien du guide gratuit (PDF, Notion…), affiché après l'inscription. |
| `LEAD_WEBHOOK_URL` | Webhook (Make, Zapier, n8n, Google Apps Script) qui reçoit les contacts. Sans lui, les contacts apparaissent dans les logs Vercel. |

## Déployer sur Vercel

1. Pousser le dossier sur un dépôt GitHub.
2. Sur vercel.com : **Add New → Project**, importer le dépôt (Next.js est détecté automatiquement).
3. Ajouter les variables d'environnement, puis **Deploy**.

## Structure

```
src/
  app/
    layout.tsx        # polices, métadonnées SEO, script du thème
    page.tsx          # assemblage des sections
    globals.css       # couleurs, animations
    api/lead/route.ts # réception des inscriptions
  components/
    Navbar.tsx        # navigation + bascule clair/sombre
    Sections.tsx      # hero, histoire, métier, formation, résultats, méthode, footer
    Interactive.tsx   # guide gratuit, FAQ, appel découverte, bouton WhatsApp
    ui.tsx            # composants réutilisables
  content/site.ts     # TOUT le contenu
```
