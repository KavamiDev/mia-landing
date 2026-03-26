import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIA — My Intelligent Assistant",
  description:
    "L'assistante téléphonique IA pour restaurants. Réservations, commandes et accueil automatisés.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative font-sans antialiased">{children}</body>
    </html>
  );
}
