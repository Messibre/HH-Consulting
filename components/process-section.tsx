"use client"

import { motion } from "framer-motion"
import { ChevronLeft, MessageSquare, Search, PenTool, FileText, Hammer, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"

interface ProcessProps {
  onBack: () => void
}

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We meet to understand your vision, requirements, budget, and timeline. Site visits are conducted to assess existing conditions.",
    icon: MessageSquare,
    duration: "1-2 weeks",
    deliverables: ["Project brief", "Site analysis report", "Preliminary budget estimate"]
  },
  {
    number: "02",
    title: "Feasibility & Concept",
    description: "We analyze project viability, develop initial concepts, and explore design options that align with your goals.",
    icon: Search,
    duration: "2-4 weeks",
    deliverables: ["Feasibility study", "Concept sketches", "Space programming"]
  },
  {
    number: "03",
    title: "Schematic Design",
    description: "Refining the selected concept into detailed schematic drawings showing layouts, elevations, and preliminary systems.",
    icon: PenTool,
    duration: "4-8 weeks",
    deliverables: ["Floor plans", "Elevations", "3D visualizations", "Preliminary cost estimate"]
  },
  {
    number: "04",
    title: "Design Development",
    description: "Full technical development of architectural, structural, and MEP systems with detailed specifications.",
    icon: FileText,
    duration: "6-12 weeks",
    deliverables: ["Technical drawings", "Structural calculations", "MEP designs", "Material specifications"]
  },
  {
    number: "05",
    title: "Construction Documents",
    description: "Complete set of drawings and documents ready for contractor bidding and construction permitting.",
    icon: FileText,
    duration: "4-8 weeks",
    deliverables: ["Bid documents", "Bill of Quantities", "Technical specifications", "Permit applications"]
  },
  {
    number: "06",
    title: "Construction & Supervision",
    description: "We oversee construction to ensure quality, adherence to design, and project completion on time and budget.",
    icon: Hammer,
    duration: "Project duration",
    deliverables: ["Site inspections", "Progress reports", "Quality assurance", "Final handover"]
  },
]

export function ProcessSection({ onBack }: ProcessProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-xs tracking-wider">BACK</span>
        </motion.button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/30">
            <Image src="/images/hh-logo.jpg" alt="HH" width={32} height={32} className="object-cover" />
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="px-5 py-8 pb-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-2">How We Work</p>
          <h1 className="font-heading text-2xl font-bold text-foreground">Our Process</h1>
          <p className="text-sm text-muted-foreground mt-2">A structured approach from concept to completion</p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-14 pb-8 last:pb-0"
            >
              {/* Step Number Circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
              >
                <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 4 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{step.title}</h3>
                    <p className="text-[10px] text-primary">{step.duration}</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                
                <div className="border-t border-border pt-3">
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-2">Deliverables</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[9px] bg-secondary text-secondary-foreground px-2 py-1 rounded-full flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-5 text-center"
        >
          <p className="text-sm font-medium text-foreground mb-2">Ready to start your project?</p>
          <p className="text-xs text-muted-foreground mb-4">Let&apos;s discuss how we can bring your vision to life</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            Start Consultation
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
