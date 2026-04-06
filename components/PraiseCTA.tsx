"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const PraiseCTA = () => {
  return (
    <section id="contact" className="w-full py-24 px-8 bg-[#202020]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-[40px] leading-tight font-normal text-white tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
              fontWeight: "400",
            }}
          >
            Start Working Smarter
          </h2>
          <p
            className="text-lg leading-7 text-white/70 mb-8"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            Join early access and streamline your appraisal workflow. Free beta—no credit card required.
          </p>
          <motion.a
            href="#"
            onClick={(e) => e.preventDefault()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#156d95] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-150 hover:bg-[#156d95]/90"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            Join the Free Beta
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
