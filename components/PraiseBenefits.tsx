"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const benefits = [
  "Save hours per report",
  "Reduce manual errors",
  "Focus on judgment, not busywork",
  "Works alongside your existing tools",
]

export const PraiseBenefits = () => {
  return (
    <section id="benefits" className="w-full py-24 px-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
              }}
            >
              Why Appraisers Use Praise
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] mb-8"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              Built by people who understand the appraisal workflow. We focus on eliminating the tedious parts so you can do what you do best.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#156d95] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span
                    className="text-lg text-[#202020]"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-[32px] p-8 shadow-lg"
          >
            <div className="bg-[#f9f9f9] rounded-2xl p-6 mb-6">
              <p
                className="text-lg leading-7 text-[#404040] italic"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                }}
              >
                &ldquo;Most of my time is spent gathering and cleaning data—not analyzing it.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                <span className="text-lg font-medium text-[#666666]">JM</span>
              </div>
              <div>
                <p
                  className="text-base font-medium text-[#202020]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  James Miller
                </p>
                <p
                  className="text-sm text-[#666666]"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                  }}
                >
                  Certified Residential Appraiser
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
