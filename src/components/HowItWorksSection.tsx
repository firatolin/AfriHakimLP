"use client";

import { motion } from "framer-motion";
import { ClipboardList, Cpu, MessageSquare, FileCheck, Bell } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    step: "01",
    title: "Enter Symptoms",
    description: "Describe your symptoms through our intuitive interface — text, voice, or USSD.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    step: "02",
    title: "AI Matches You to the Right Doctor",
    description: "Our AI analyzes your symptoms and matches you with the most suitable specialist.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    step: "03",
    title: "Consult Online",
    description: "Video, voice, or text consultation — quality healthcare wherever you are.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    step: "04",
    title: "Get Digital Prescription",
    description: "Receive a secure QR-coded digital prescription, redeemable at any partner pharmacy.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    step: "05",
    title: "Follow-Up & Reminders",
    description: "Automated reminders for medication, follow-up appointments, and health tracking.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#0E5E9C] font-semibold text-sm uppercase tracking-widest">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2933] mt-3">
            How It <span className="text-[#0E5E9C]">Works</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0E5E9C]/20 via-[#0E5E9C] to-[#0E5E9C]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-14 h-14 bg-[#0E5E9C] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#0E5E9C]/30 mb-4">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-[#0E5E9C] tracking-widest mb-2">{step.step}</span>
                <h3 className="text-sm font-bold text-[#1F2933] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
