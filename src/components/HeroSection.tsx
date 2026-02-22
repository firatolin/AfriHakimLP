"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b4c80] via-[#0E5E9C] to-[#1a7abf]" />
      
      {/* Floating Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#0E5E9C]/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-white/60 rounded-full"
          style={{
            top: `${15 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/30">
            🌍 Transforming African Healthcare with AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          AI-Powered Healthcare
          <br />
          <span className="text-white/90">for Africa — and Beyond</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 font-light"
        >
          Connecting patients, doctors, hospitals, pharmacies, and labs in one
          intelligent ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#cta"
            className="bg-white text-[#0E5E9C] px-8 py-4 rounded-full text-base font-bold hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:-translate-y-1 inline-block"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-white/70 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm inline-block"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "$16B", label: "Market Size" },
            { value: "30%+", label: "Annual Growth" },
            { value: "5+", label: "Ecosystem Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 C360,0 1080,80 1440,0 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
