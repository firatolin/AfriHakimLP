"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Smartphone } from "lucide-react";

const stats = [
  {
    icon: <Globe className="w-8 h-8 text-[#0E5E9C]" />,
    value: "$16B",
    label: "African Digital Health Opportunity",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#0E5E9C]" />,
    value: "30%+",
    label: "Annual Growth Rate",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#0E5E9C]" />,
    value: "600M+",
    label: "Smartphone Users Across Africa by 2030",
  },
];

export default function MarketSection() {
  return (
    <section id="market" className="py-24 bg-gradient-to-br from-[#0E5E9C] to-[#0a4d82] overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-white/70 font-semibold text-sm uppercase tracking-widest">
            Market Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Built in Africa. Built for the World.
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We start in Ethiopia. We scale across Africa. And from Africa, we go global.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Map visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
            <span className="text-2xl">🇪🇹</span>
            <span className="text-white font-medium">Ethiopia First</span>
            <span className="text-white/50 mx-2">→</span>
            <span className="text-2xl">🌍</span>
            <span className="text-white font-medium">Pan-Africa</span>
            <span className="text-white/50 mx-2">→</span>
            <span className="text-2xl">🌐</span>
            <span className="text-white font-medium">Global</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
