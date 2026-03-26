"use client";

import { motion } from "framer-motion";

const techStack = [
  "OpenAI Realtime API",
  "FastAPI",
  "Telnyx",
  "Supabase",
  "Next.js",
  "React",
  "WebSocket",
  "Deepgram",
  "ElevenLabs",
  "PostgreSQL",
  "LiveKit",
];

export default function Marquee() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Top & bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-center text-sm text-dark-400 mb-10 tracking-widest uppercase">
          Technologies de pointe
        </p>

        {/* Marquee track */}
        <div className="relative flex overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10" />

          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full glass text-sm text-dark-200 hover:text-gold-400 hover:border-gold-500/30 transition-colors duration-300 shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-gold-500/50" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
