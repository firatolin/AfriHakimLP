"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-[#0E5E9C] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/30">
            Join the Movement
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Be Part of the Healthcare
            <br />
            Transformation.
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-12">
            Whether you&apos;re a patient, doctor, investor, or partner — AfriHakim has a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:join@afrihakim.com"
              className="bg-white text-[#0E5E9C] px-10 py-4 rounded-full text-base font-bold hover:bg-gray-50 transition-all duration-200 shadow-2xl hover:-translate-y-1 inline-block"
            >
              Join the Waitlist
            </a>
            <a
              href="mailto:partners@afrihakim.com"
              className="border-2 border-white/70 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-200 inline-block"
            >
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
