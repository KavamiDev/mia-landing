"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Voix naturelle",
    description:
      "Propulsée par OpenAI Realtime API. Une conversation si fluide que vos clients ne feront pas la différence.",
    size: "lg",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Temps réel",
    description: "Réponse en moins d'une seconde. Streaming audio bidirectionnel via WebSocket.",
    size: "sm",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Multi-langue",
    description: "Français natif, avec support multilingue prévu pour le plan Premium.",
    size: "sm",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138A47.63 47.63 0 0115 5.621m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Dashboard",
    description: "Interface d'administration complète pour gérer menus, réservations et commandes en temps réel.",
    size: "sm",
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Intelligence contextuelle",
    description:
      "MIA connaît votre carte, vos horaires, vos quotas. Elle adapte chaque conversation au contexte de votre établissement et sait gérer les situations imprévues avec naturel.",
    size: "lg",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function BentoGrid() {
  return (
    <section id="capacités" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-gold-500 tracking-widest uppercase">
            Capacités
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-dark-50">Propulsée par</span>{" "}
            <span className="text-gold-gradient">l&apos;IA</span>
          </h2>
          <p className="text-dark-300 max-w-xl mx-auto">
            Une stack technologique de pointe pour une expérience vocale sans
            compromis.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl glass overflow-hidden p-6 flex flex-col justify-between hover:glow-gold transition-all duration-500 ${
                cap.size === "lg" ? "lg:col-span-2 row-span-1" : ""
              }`}
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  cap.accent === "gold"
                    ? "bg-gradient-to-br from-gold-500/10 to-transparent"
                    : "bg-gradient-to-br from-accent-blue/10 to-transparent"
                }`}
              />

              <div className="relative z-10">
                <div
                  className={`mb-3 ${
                    cap.accent === "gold"
                      ? "text-gold-400"
                      : "text-accent-blue"
                  }`}
                >
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark-50 mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>

              {/* Decorative line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  cap.accent === "gold"
                    ? "bg-gradient-to-r from-gold-500 to-transparent"
                    : "bg-gradient-to-r from-accent-blue to-transparent"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
