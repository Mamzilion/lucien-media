import type { Metadata } from "next";
// Polices auto-hébergées (aucun appel externe à Google Fonts)
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucien Billong | Media Buyer & formateur Meta Ads / Google Ads",
  description:
    "De salarié à freelance media buyer : formation Meta Ads et Google Ads et accompagnement jusqu'à la signature de ton premier client, en parallèle de ton CDI.",
  openGraph: {
    title: "Lucien Billong | De salarié à freelance media buyer",
    description: "Formation Meta Ads / Google Ads et accompagnement jusqu'à ton premier client.",
    locale: "fr_FR",
    type: "website",
  },
};

// Applique le thème avant l'affichage pour éviter un flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
