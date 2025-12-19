"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Links from "./link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08 },
    },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed z-20 w-full p-4 bg-white/40 dark:bg-gray-800/20 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="hover:scale-105 transition-transform">
          <Link href="/"><img src="/logo-orso-voyage.png" alt="orso-voyage-logo" className="h-10 w-auto"/></Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Links name="Accueil" href="/" />
          <Links name="Intervenants" href="/nos-intervenants" />
          <Links name="Voyages 2026" href="/nos-voyageq" />
          <Links name="Chamanes Mongols" href="/chamanes-mongols" />
          <Links name="Equipe Locale" href="/equipe-locale" />
          <Links name="Contact" href="/contact" />
        </div>

        {/* Burger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="absolute w-6 h-0.5 bg-gray-800 dark:bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-6 h-0.5 bg-gray-800 dark:bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="absolute w-6 h-0.5 bg-gray-800 dark:bg-white"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden mt-4 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-6 backdrop-blur-md"
          >
            <motion.div variants={itemVariants} onClick={() => setOpen(false)}>
              <Links name="Home" href="/" />
            </motion.div>
            <motion.div variants={itemVariants} onClick={() => setOpen(false)}>
              <Links name="Nos Intervenants" href="/nos-intervenants" />
            </motion.div>
            <motion.div variants={itemVariants} onClick={() => setOpen(false)}>
              <Links name="Nos Voyages 2026" href="/contact" />
            </motion.div>
            <motion.div variants={itemVariants} onClick={() => setOpen(false)}>
              <Links name="Chamanes Mongols" href="/chamanes-mongols" />
            </motion.div>
            <motion.div variants={itemVariants} onClick={() => setOpen(false)}>
              <Links name="Equipe Locale" href="/equipe-locale" />
            </motion.div>
            <motion.div variants={itemVariants} onClick={() => setOpen(false)}>
              <Links name="Contact" href="/contact" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
