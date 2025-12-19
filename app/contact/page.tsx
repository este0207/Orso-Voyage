// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ajouter l'envoi via nodemailer
    console.log("Form submitted:", formData);
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex mt-10 flex-col md:flex-row items-center justify-center p-6 gap-8 dark:bg-black">
      {/* Formulaire */}
      <motion.div
        className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Envoyer
          </button>
        </form>
      </motion.div>

      {/* Carte */}
      <motion.div
        className="w-full md:w-1/2 h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Ici tu peux intégrer Google Maps, Mapbox ou autre */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.4217572086673!2d2.0606447!3d48.6974192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e42a9efab3e8bb%3A0xca859b840871c27!2sORSO&#39;S%20VOYAGE%20MONGOLIE!5e0!3m2!1sfr!2sfr!4v1765919152161!5m2!1sfr!2sfr" loading="lazy" className="w-full h-full"></iframe>
        </div>
      </motion.div>
    </div>
  );
}
