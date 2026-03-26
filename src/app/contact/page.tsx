"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, submitContactForm } from "@/lib/contactSubmit";

const requestTypes = [
  { value: "devis", label: "Demande de devis" },
  { value: "demo", label: "Démonstration produit" },
  { value: "support", label: "Support technique" },
  { value: "partenariat", label: "Partenariat / presse" },
  { value: "autre", label: "Autre" },
] as const;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const website = (fd.get("website") as string) || "";

    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: (fd.get("phone") as string) || "",
      company: (fd.get("company") as string) || "",
      type: fd.get("type") as string,
      message: fd.get("message") as string,
      website,
    };

    try {
      const result = await submitContactForm(payload);
      if (!result.ok) {
        setStatus("error");
        setErrorMessage(result.error);
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Connexion impossible. Réessayez ou écrivez-nous par e-mail.");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(212,168,83,0.12)_0%,transparent_55%)] pointer-events-none" />

      <section className="relative pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-gold-400 transition-colors mb-8"
            >
              <span aria-hidden>←</span> Retour à l&apos;accueil
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-dark-50">Contact &</span>{" "}
              <span className="text-gold-gradient">devis</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl leading-relaxed">
              Une question sur MIA, un devis pour votre restaurant ou une
              démo ? Envoyez-nous un message : l&apos;équipe produit vous
              répond sous 1 à 2 jours ouvrés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-strong rounded-2xl p-6 md:p-8">
                <h2 className="text-sm font-semibold text-gold-500 tracking-widest uppercase mb-4">
                  Écrire directement
                </h2>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Contact MIA")}`}
                  className="text-lg font-semibold text-gold-400 hover:text-gold-300 break-all transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="text-sm text-dark-400 mt-4 leading-relaxed">
                  Pour un devis précis, indiquez le nom de votre établissement,
                  la ville, le nombre de couverts environ et le plan qui vous
                  intéresse (Standard ou Premium).
                </p>
              </div>

              <div className="glass rounded-2xl p-6 md:p-8">
                <h2 className="text-sm font-semibold text-dark-100 mb-4">
                  Avant d&apos;écrire
                </h2>
                <ul className="space-y-3 text-sm text-dark-300">
                  <li className="flex gap-3">
                    <span className="text-gold-500 shrink-0">✓</span>
                    Les essais et tarifs affichés sur le site sont indicatifs ;
                    nous personnalisons selon votre volume d&apos;appels.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-500 shrink-0">✓</span>
                    Pensez à laisser un numéro joignable si vous souhaitez un
                    rappel téléphonique.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-500 shrink-0">✓</span>
                    Données traitées pour répondre à votre demande —
                    pas de revente à des tiers.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dark-600/40 bg-dark-800/40 px-6 py-5 text-sm text-dark-400">
                <strong className="text-dark-200">Horaires indicatifs</strong>
                <p className="mt-2">
                  Lundi — vendredi, 9h — 18h (heure de La Réunion). Les demandes
                  hors créneau sont traitées dès le prochain jour ouvré.
                </p>
              </div>

            </motion.aside>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="glass-strong rounded-2xl p-6 md:p-10 space-y-6"
              >
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                  aria-hidden
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-200 mb-2"
                    >
                      Nom complet <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl bg-dark-800/80 border border-dark-600/50 px-4 py-3 text-dark-50 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/40 transition-shadow"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-200 mb-2"
                    >
                      E-mail <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl bg-dark-800/80 border border-dark-600/50 px-4 py-3 text-dark-50 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/40 transition-shadow"
                      placeholder="vous@restaurant.re"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark-200 mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full rounded-xl bg-dark-800/80 border border-dark-600/50 px-4 py-3 text-dark-50 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/40 transition-shadow"
                      placeholder="+262 …"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-dark-200 mb-2"
                    >
                      Établissement / société
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="w-full rounded-xl bg-dark-800/80 border border-dark-600/50 px-4 py-3 text-dark-50 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/40 transition-shadow"
                      placeholder="Nom du restaurant"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-dark-200 mb-2"
                  >
                    Type de demande
                  </label>
                  <select
                    id="type"
                    name="type"
                    defaultValue="devis"
                    className="w-full rounded-xl bg-dark-800/80 border border-dark-600/50 px-4 py-3 text-dark-50 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/40"
                  >
                    {requestTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-200 mb-2"
                  >
                    Message <span className="text-gold-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full rounded-xl bg-dark-800/80 border border-dark-600/50 px-4 py-3 text-dark-50 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/40 transition-shadow resize-y min-h-[140px]"
                    placeholder="Décrivez votre besoin : nombre de couverts, volume d'appels, intégration souhaitée…"
                  />
                </div>

                {status === "ok" && (
                  <p
                    className="rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-sm px-4 py-3"
                    role="status"
                  >
                    Message envoyé. Nous vous répondons très bientôt sur votre
                    adresse e-mail.
                  </p>
                )}

                {status === "error" && (
                  <p
                    className="rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-sm px-4 py-3"
                    role="alert"
                  >
                    {errorMessage}{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="underline text-gold-400 hover:text-gold-300"
                    >
                      Écrire à {CONTACT_EMAIL}
                    </a>
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 font-bold text-base shadow-[0_0_40px_rgba(212,168,83,0.25)] disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                >
                  {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
                </motion.button>

                <p className="text-xs text-dark-500">
                  En envoyant ce formulaire, vous acceptez que nous utilisions
                  ces informations uniquement pour traiter votre demande,
                  conformément à notre politique de confidentialité.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
