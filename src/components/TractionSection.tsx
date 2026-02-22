"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  "MVP Built & Validated",
  "AI Doctor-Matching Tested",
  "Early Partnerships in Progress",
  "Growing Community Interest",
];

export default function TractionSection() {
  return (
    <section id="traction" className="py-24 bg-[#F4F6F8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-[#0E5E9C] font-semibold text-sm uppercase tracking-widest">
              Traction
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933] mt-3">
              Momentum Is <span className="text-[#0E5E9C]">Building</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-[#0E5E9C]/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#0E5E9C]" />
                </div>
                <span className="text-[#1F2933] font-semibold text-lg">{milestone}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
