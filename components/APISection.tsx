"use client"

import { motion } from "framer-motion"
import { Code2, Webhook, Database, ArrowRight } from "lucide-react"
import Image from "next/image"

const apiFeatures = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "Bulk Appraisal Data",
    description: "Access property records, MLS data, tax information, and comp analysis in bulk via simple REST endpoints.",
  },
  {
    icon: <Webhook className="w-6 h-6" />,
    title: "Webhook Integrations",
    description: "Receive real-time updates when new data becomes available or when appraisal reports are completed.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developer-Friendly",
    description: "Well-documented endpoints with SDKs for Python, JavaScript, and Ruby. Get started in minutes.",
  },
]

const codeExample = `// Fetch property appraisal data
const response = await fetch(
  'https://api.praise.com/v1/properties/123',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const data = await response.json();
// Returns: { property, comps, valuation }`

export const APISection = () => {
  return (
    <section id="api" className="w-full py-24 px-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#156d95]/10 text-[#156d95] px-4 py-2 rounded-full mb-6">
              <Code2 className="w-4 h-4" />
              <span
                className="text-sm font-medium"
                style={{ fontFamily: "var(--font-figtree), Figtree" }}
              >
                API Access
              </span>
            </div>

            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
              }}
            >
              Build on Top of Praise
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] mb-8"
              style={{ fontFamily: "var(--font-figtree), Figtree" }}
            >
              Need programmatic access to appraisal data? Our API lets you integrate property valuations, comp analysis, and market data directly into your own applications and workflows.
            </p>

            <div className="space-y-5 mb-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#156d95] text-white flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className="text-base font-medium text-[#202020] mb-1"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "500",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed text-[#666666]"
                      style={{ fontFamily: "var(--font-figtree), Figtree" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#156d95] text-white px-6 py-3 rounded-full hover:rounded-2xl transition-all"
              style={{ fontFamily: "var(--font-figtree), Figtree" }}
            >
              View API Documentation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Column - Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#1a1a2e] rounded-[24px] p-6 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
              <span
                className="ml-3 text-sm text-[#888]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                example.js
              </span>
            </div>
            <pre className="overflow-x-auto">
              <code
                className="text-sm leading-relaxed text-[#e4e4e7]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                {codeExample}
              </code>
            </pre>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<100ms", label: "Avg Response" },
            { value: "10M+", label: "API Calls/Day" },
            { value: "All Plans", label: "API Included" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center"
            >
              <p
                className="text-2xl font-medium text-[#156d95] mb-1"
                style={{
                  fontFamily: "var(--font-figtree), Figtree",
                  fontWeight: "500",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm text-[#666666]"
                style={{ fontFamily: "var(--font-figtree), Figtree" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
