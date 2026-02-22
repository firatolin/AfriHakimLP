"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Stethoscope,
  Video,
  FileText,
  Building2,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: "AI Symptom Checker",
    description: "Intelligent triage system that analyzes symptoms and provides preliminary health assessments.",
  },
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Smart Doctor Matching",
    description: "AI-powered matching connects patients with the right specialist based on their condition.",
  },
  {
    icon: <Video className="w-7 h-7" />,
    title: "Telemedicine (Video & Voice)",
    description: "High-quality video and voice consultations from the comfort of your home.",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Digital QR Prescriptions",
    description: "Secure, tamper-proof digital prescriptions with QR codes for pharmacy verification.",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Pharmacy & Hospital SaaS",
    description: "Complete SaaS platform for pharmacies and hospitals to manage patients and inventory.",
  },
  {
    icon: <Phone className="w-7 h-7" />,
    title: "Offline Call Support for Rural Areas",
    description: "USSD and voice-based access ensuring rural communities are never left behind.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-[#F4F6F8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-[#0E5E9C] font-semibold text-sm uppercase tracking-widest">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933] mt-3 mb-6">
            Introducing <span className="text-[#0E5E9C]">AfriHakim</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">
            AfriHakim is an AI-powered healthcare ecosystem that connects the full patient journey:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Symptom", "→", "Diagnosis", "→", "Doctor", "→", "Pharmacy", "→", "Follow-up"].map(
              (item, i) => (
                <span
                  key={i}
                  className={
                    item === "→"
                      ? "text-[#0E5E9C] font-bold text-lg"
                      : "bg-[#0E5E9C] text-white px-4 py-1 rounded-full text-sm font-semibold"
                  }
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-[#0E5E9C]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-[#0E5E9C] group-hover:bg-[#0E5E9C] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-[#1F2933] mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
