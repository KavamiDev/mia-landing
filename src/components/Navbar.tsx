"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Fonctionnalités", href: "/#fonctionnalités" },
  { label: "Capacités", href: "/#capacités" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Contact", href: "/contact" },
  { label: "Connexion", href: process.env.NEXT_PUBLIC_APP_URL || "https://app.kavami.re" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center">
            <span className="text-dark-900 font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold text-gold-gradient">mia</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.label === "Connexion" ? "_blank" : undefined}
              rel={item.label === "Connexion" ? "noopener noreferrer" : undefined}
              className="text-sm text-dark-200 hover:text-gold-400 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/contact">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-700 text-dark-900 text-sm font-semibold hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] transition-shadow duration-300"
          >
            Essayer MIA
          </motion.span>
        </Link>
      </div>
    </motion.nav>
  );
}
