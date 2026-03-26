"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📞",
    title: "Accueil vocal intelligent",
    description:
      "MIA décroche et identifie automatiquement votre restaurant. Voix naturelle, ton chaleureux, conversation fluide.",
  },
  {
    icon: "📅",
    title: "Réservations automatiques",
    description:
      "Nombre de couverts, date, heure, nom — MIA capture tout en une conversation naturelle et confirme par SMS.",
  },
  {
    icon: "🥡",
    title: "Commandes à emporter",
    description:
      "Prise de commande complète avec calcul du total. Chaque commande reçoit un code de confirmation unique.",
  },
  {
    icon: "💬",
    title: "SMS de confirmation",
    description:
      "Client et restaurant reçoivent un SMS récapitulatif avec code de suivi. Zéro malentendu.",
  },
  {
    icon: "🔒",
    title: "Gestion des quotas",
    description:
      "Limites de tables et commandes respectées automatiquement. MIA propose des alternatives si complet.",
  },
  {
    icon: "🏪",
    title: "Multi-restaurants",
    description:
      "Un seul système, plusieurs établissements. Chaque restaurant a son numéro, son menu, ses horaires.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function Features() {
  return (
    <section id="fonctionnalités" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-gold-500 tracking-widest uppercase">
            Fonctionnalités
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-dark-50">Tout ce dont votre</span>
            <br />
            <span className="text-gold-gradient">restaurant a besoin</span>
          </h2>
          <p className="text-dark-300 max-w-xl mx-auto">
            MIA gère vos appels de A à Z, pour que vous puissiez vous
            concentrer sur l&apos;essentiel : vos clients.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl glass hover:glow-gold transition-all duration-500 cursor-default"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/0 to-gold-700/0 group-hover:from-gold-500/5 group-hover:to-gold-700/10 transition-all duration-500" />

              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-dark-50 mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
