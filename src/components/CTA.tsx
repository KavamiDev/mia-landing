"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto relative">
        {/* Parallax background glow */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-accent-blue/5 rounded-3xl blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold-500/20 to-transparent rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold-500/20 to-transparent rounded-br-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-dark-50">Prêt à</span>{" "}
              <span className="text-gold-gradient">
                ne plus jamais manquer un appel ?
              </span>
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto mb-10 text-lg">
              Rejoignez les restaurants qui font confiance à MIA pour leur
              accueil téléphonique. Installation en moins de 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 font-bold text-base shadow-[0_0_50px_rgba(212,168,83,0.3)] hover:shadow-[0_0_70px_rgba(212,168,83,0.4)] transition-shadow duration-300"
                >
                  Prendre un rendez-vous
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-10 py-4 rounded-full glass text-gold-400 font-semibold text-base"
                >
                  Prendre un rendez-vous
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
