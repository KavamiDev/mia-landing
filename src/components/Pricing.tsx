"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Standard",
    price: "290",
    description: "L'essentiel pour automatiser votre accueil téléphonique.",
    features: [
      "Accueil vocal IA",
      "Réservations automatiques",
      "Commandes à emporter",
      "SMS de confirmation",
      "Gestion des quotas",
      "Dashboard de gestion",
    ],
    cta: "Commencer",
    popular: false,
  },
  {
    name: "Premium",
    price: "490",
    description: "L'expérience complète pour les restaurants ambitieux.",
    features: [
      "Tout du plan Standard",
      "Support multilingue",
      "Mémoire clients VIP",
      "Upselling intelligent",
      "Suivi appels manqués",
      "Liste d'attente",
      "Analytics avancées",
      "Support prioritaire",
    ],
    cta: "Contacter l'équipe",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-gold-500 tracking-widest uppercase">
            Tarifs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-dark-50">Simple et</span>{" "}
            <span className="text-gold-gradient">transparent</span>
          </h2>
          <p className="text-dark-300 max-w-xl mx-auto">
            Pas de frais cachés. Choisissez le plan adapté à vos besoins.
            Mise en service en moins de 24h — on s&apos;occupe de tout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "glass-strong glow-gold-strong border-gold-500/30"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 text-xs font-bold">
                  Populaire
                </div>
              )}

              <h3 className="text-xl font-bold text-dark-50 mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-dark-400 mb-6">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-gold-gradient">
                  {plan.price}
                </span>
                <span className="text-dark-400 text-sm">€ / mois</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-dark-200"
                  >
                    <svg
                      className="w-4 h-4 text-gold-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="block w-full">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex w-full justify-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 shadow-[0_0_30px_rgba(212,168,83,0.2)]"
                      : "glass text-gold-400 hover:bg-gold-400/10"
                  }`}
                >
                  {plan.cta}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-dark-400">
          Vous gérez plusieurs établissements ?{" "}
          <Link href="/contact" className="text-gold-400 hover:text-gold-300 transition-colors">
            Contactez-nous pour une offre groupe.
          </Link>
        </p>
      </div>
    </section>
  );
}
