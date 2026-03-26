import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & devis — MIA",
  description:
    "Demande de devis, démo ou support pour MIA. Contactez l'équipe produit par formulaire ou e-mail.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
