"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-dark-600/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center">
                <span className="text-dark-900 font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-gold-gradient">mia</span>
            </div>
            <p className="text-sm text-dark-400 leading-relaxed">
              My Intelligent Assistant.
              <br />
              L&apos;IA vocale pour restaurants.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Produit",
              links: [
                { label: "Fonctionnalités", href: "/#fonctionnalités" },
                { label: "Tarifs", href: "/#tarifs" },
                { label: "Démo", href: "/contact" },
                { label: "API", href: "/contact" },
              ],
            },
            {
              title: "Entreprise",
              links: [
                { label: "À propos", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Carrières", href: "#" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Légal",
              links: [
                { label: "Confidentialité", href: "#" },
                { label: "Conditions", href: "#" },
                { label: "Mentions légales", href: "#" },
                { label: "RGPD", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-dark-100 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-dark-400 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-dark-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">
            &copy; 2026 MIA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-dark-500 hover:text-gold-400 transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
