"use client"

import { motion } from "framer-motion"
type IntegrationApp = {
  name: string
  logo: string
}
type IntegrationCarouselProps = {
  buttonText?: string
  buttonHref?: string
  title?: string
  subtitle?: string
  topRowApps?: IntegrationApp[]
  bottomRowApps?: IntegrationApp[]
}
const defaultTopRowApps: IntegrationApp[] = [
  {
    name: "FEMA",
    logo: "/images/logos/fema.png",
  },
  {
    name: "MLS",
    logo: "/images/logos/mls.png",
  },
  {
    name: "Public Records",
    logo: "/images/logos/house.svg",
  },
  {
    name: "FEMA",
    logo: "/images/logos/fema.png",
  },
  {
    name: "MLS",
    logo: "/images/logos/mls.png",
  },
  {
    name: "Public Records",
    logo: "/images/logos/house.svg",
  },
  {
    name: "FEMA",
    logo: "/images/logos/fema.png",
  },
  {
    name: "MLS",
    logo: "/images/logos/mls.png",
  },
  {
    name: "Public Records",
    logo: "/images/logos/house.svg",
  },
  {
    name: "FEMA",
    logo: "/images/logos/fema.png",
  },
  {
    name: "MLS",
    logo: "/images/logos/mls.png",
  },
  {
    name: "Public Records",
    logo: "/images/logos/house.svg",
  },
]
const defaultBottomRowApps: IntegrationApp[] = [
  {
    name: "MLS",
    logo: "/images/logos/mls.png",
  },
  {
    name: "Public Records",
    logo: "/images/logos/house.svg",
  },
  {
    name: "FEMA",
    logo: "/images/logos/fema.png",
  },
  {
    name: "MLS",
    logo: "/images/logos/mls.png",
  },
  {
    name: "Public Records",
    logo: "/images/logos/house.svg",
  },
  {
    name: "FEMA",
    logo: "/images/logos/fema.png",
  },
  {
    name: "MLS",
    logo: "/images/logos/mls.png",
  },
  {
    name: "Public Records",
    logo: "/images/logos/house.svg",
  },
  {
    name: "FEMA",
    logo: "/images/logos/fema.png",
  },
  {
    name: "MLS",
    logo: "/images/logos/mls.png",
  },
  {
    name: "Public Records",
    logo: "/images/logos/house.svg",
  },
  {
    name: "FEMA",
    logo: "/images/logos/fema.png",
  },
]

// @component: IntegrationCarousel
export const IntegrationCarousel = ({
  buttonText = "Learn More",
  buttonHref = "#features",
  title = "Connects to All Your Data Sources",
  subtitle = "Pull MLS, tax records, public records, and permit data into one place instantly—no more switching between systems.",
  topRowApps = defaultTopRowApps,
  bottomRowApps = defaultBottomRowApps,
}: IntegrationCarouselProps) => {

  // @return
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#222222] text-center tracking-tight mb-0"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              {title}
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] text-center max-w-[600px] mt-2"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subtitle}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="flex gap-3 mt-6"
          >
            <a
              href={buttonHref}
              className="inline-block px-5 py-2.5 rounded-full bg-white text-[#222222] text-[15px] font-medium leading-6 text-center whitespace-nowrap transition-all duration-75 ease-out w-[182px] cursor-pointer hover:shadow-lg"
              style={{
                boxShadow:
                  "0 -1px 0 0 rgb(181, 181, 181) inset, -1px 0 0 0 rgb(227, 227, 227) inset, 1px 0 0 0 rgb(227, 227, 227) inset, 0 1px 0 0 rgb(227, 227, 227) inset",
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.06) 80%, rgba(255, 255, 255, 0.12))",
              }}
            >
              {buttonText}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-[268px] -mt-6 mb-0 pb-0 relative overflow-hidden">
        <div
          className="flex items-start gap-6 absolute top-6 whitespace-nowrap animate-scroll-left"
        >
          {[...topRowApps, ...topRowApps].map((app, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center justify-center w-24 h-24 rounded-3xl flex-shrink-0"
              style={{
                backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252))",
                boxShadow:
                  "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.4px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 12px 12px -6px, rgba(0, 0, 0, 0.04) 0px 12px 12px -12px",
              }}
            >
              <img src={app.logo || "/placeholder.svg"} alt={app.name} loading="lazy" className="w-16 h-12 block object-contain" />
            </div>
          ))}
        </div>

        <div
          className="absolute top-0 right-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(255, 255, 255))",
          }}
        />

        <div
          className="absolute top-0 left-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 0, 0, 0))",
          }}
        />

        <div
          className="flex items-start gap-6 absolute top-[148px] whitespace-nowrap animate-scroll-left-slow"
        >
          {[...bottomRowApps, ...bottomRowApps].map((app, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center justify-center w-24 h-24 rounded-3xl flex-shrink-0"
              style={{
                backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252))",
                boxShadow:
                  "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.4px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 12px 12px -6px, rgba(0, 0, 0, 0.04) 0px 12px 12px -12px",
              }}
            >
              <img src={app.logo || "/placeholder.svg"} alt={app.name} loading="lazy" className="w-16 h-12 block object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
