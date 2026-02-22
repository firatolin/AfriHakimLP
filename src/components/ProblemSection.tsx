"use client";

import { motion } from "framer-motion";
import { AlertCircle, MapPin, Pill, Users } from "lucide-react";

const problems = [
  {
    icon: <AlertCircle className="w-8 h-8 text-[#0E5E9C]" />,
    title: "Patients don't know what they're suffering from",
    description:
      "Lack of accessible diagnostic tools leaves millions guessing about their health conditions.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#0E5E9C]" />,
    title: "No intelligent path from symptom to the right doctor",
    description:
      "Patients waste time and money visiting the wrong specialists without AI-guided triage.",
  },
  {
    icon: <Pill className="w-8 h-8 text-[#0E5E9C]" />,
    title: "Medication misuse and no follow-up",
    description:
      "Self-medication without prescriptions and zero follow-up leads to dangerous health outcomes.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-[#0E5E9C]" />,
    title: "Rural communities excluded from digital healthcare",
    description:
      "Over 60% of Africa's population lives in rural areas with no access to modern healthcare technology.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#0E5E9C] font-semibold text-sm uppercase tracking-widest">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933] mt-3 mb-4">
            Healthcare Is <span className="text-[#0E5E9C]">Disconnected</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Millions across Africa face a fragmented, inaccessible healthcare system every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#F4F6F8] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                {problem.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2933] mb-3">{problem.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
