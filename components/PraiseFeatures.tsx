"use client"

import { motion } from "framer-motion"
import { Database, Layout, Zap } from "lucide-react"

type FeatureCard = {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const features: FeatureCard[] = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Automated Data Aggregation",
    description: "Pull MLS, tax, and public records into one place instantly. No more switching between systems.",
    delay: 0,
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Smart Comp Organization",
    description: "Clean and structure your comp data with minimal manual input. Automatically formatted and ready to use.",
    delay: 0.1,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Workflow Optimization",
    description: "Reduce repetitive tasks and focus on high-value analysis. Your expertise is what matters most.",
    delay: 0.2,
  },
]

export const PraiseFeatures = () => {
  return (
    <section id="features" className="w-full py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
              fontWeight: "400",
            }}
          >
            How It Works
          </h2>
          <p
            className="text-lg leading-7 text-[#666666] max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            Praise automates data collection, organizes property records, and simplifies comp analysis—so you can complete reports faster without sacrificing accuracy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: feature.delay, ease: "easeOut" }}
              className="bg-[#f5f5f5] rounded-[24px] p-8 flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-[#156d95] text-white flex items-center justify-center mb-6"
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-medium text-[#202020] mb-3"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                  fontWeight: "500",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-base leading-6 text-[#666666]"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
