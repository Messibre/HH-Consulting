"use client"

import { motion } from "framer-motion"
import { ChevronLeft, Award, Shield, FileCheck, BadgeCheck, Download, Building2 } from "lucide-react"
import Image from "next/image"

interface CredentialsProps {
  onBack: () => void
}

const certifications = [
  {
    icon: Award,
    title: "Grade 1 Consulting License",
    issuer: "Ministry of Urban Development & Construction",
    description: "Highest grade certification for architectural and engineering consulting services in Ethiopia",
    year: "Since 1992"
  },
  {
    icon: Shield,
    title: "Professional Engineering License",
    issuer: "Ethiopian Association of Engineers",
    description: "Licensed to practice civil, structural, and MEP engineering across all project categories",
    year: "Active"
  },
  {
    icon: FileCheck,
    title: "ISO 9001:2015 Compliant",
    issuer: "Quality Management Systems",
    description: "Adherence to international quality management standards in all project deliverables",
    year: "Certified"
  },
  {
    icon: BadgeCheck,
    title: "Architectural Practice License",
    issuer: "Ethiopian Institute of Architects",
    description: "Full authorization for architectural design and supervision services",
    year: "Active"
  },
]

const tools = [
  { name: "AutoCAD", category: "2D/3D Design" },
  { name: "Revit", category: "BIM" },
  { name: "ETABS", category: "Structural" },
  { name: "SAP2000", category: "Analysis" },
  { name: "SketchUp", category: "3D Modeling" },
  { name: "Lumion", category: "Rendering" },
  { name: "Civil 3D", category: "Infrastructure" },
  { name: "Primavera", category: "Project Mgmt" },
]

const standards = [
  "Ethiopian Building Code (EBCS)",
  "American Concrete Institute (ACI)",
  "American Institute of Steel Construction (AISC)",
  "ASHRAE Standards",
  "International Building Code (IBC)",
  "Ethiopian Roads Authority Standards",
  "IATA Airport Design Guidelines",
  "WHO Healthcare Facility Standards",
]

const affiliations = [
  "Ethiopian Association of Architects",
  "Ethiopian Association of Engineers",
  "Ethiopian Contractors Association",
  "Association of Consulting Engineers Ethiopia",
]

export function CredentialsSection({ onBack }: CredentialsProps) {
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
        <div className="h-8 w-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/30">
          <Image src="/images/hh-logo.jpg" alt="HH" width={32} height={32} className="object-cover" />
        </div>
      </div>

      <div className="px-5 py-8 pb-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-2">Trust & Compliance</p>
          <h1 className="font-heading text-2xl font-bold text-foreground">Credentials</h1>
          <p className="text-sm text-muted-foreground mt-2">Our certifications, tools, and standards</p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-8">
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-4">Certifications & Licenses</p>
          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 4 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-sm text-foreground">{cert.title}</h3>
                      <span className="text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded-full">{cert.year}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{cert.issuer}</p>
                    <p className="text-xs text-foreground/70 mt-2 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Software & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-4">Software & Tools</p>
          <div className="grid grid-cols-4 gap-2">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-card border border-border rounded-lg p-2 text-center overflow-hidden"
              >
                <p className="text-[10px] font-semibold text-foreground truncate">{tool.name}</p>
                <p className="text-[7px] text-muted-foreground mt-0.5 truncate">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-4">Design Standards</p>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex flex-wrap gap-2">
              {standards.map((standard, idx) => (
                <span
                  key={idx}
                  className="text-[10px] bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-4">Professional Affiliations</p>
          <div className="space-y-2">
            {affiliations.map((affiliation, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-foreground">
                <Building2 className="w-4 h-4 text-primary" />
                <span>{affiliation}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download Company Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground rounded-xl p-4 flex items-center justify-center gap-3"
          >
            <Download className="w-5 h-5" />
            <span className="font-semibold text-sm">Download Company Profile (PDF)</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
